class SheetService {
  constructor(sheetId, webhooksUrl) {
    this.webhooksUrl = webhooksUrl;
    [this.sheetsOne] = SpreadsheetApp.openById(sheetId).getSheets();
    [this.lastColumn, this.lastRow] = [
      this.sheetsOne.getLastColumn(),
      this.sheetsOne.getLastRow(),
    ];
  }

  getChosenItemAndIndex() {
    const data = this.sheetsOne
      .getRange(1, 1, this.lastRow, this.lastColumn)
      .getValues();
    const [sheetHeader] = data;
    data.shift();
    const convertedData = data.map((row) =>
      sheetHeader.reduce((o, h, i) => {
        o[h] = row[i];
        return o;
      }, {})
    );
    Logger.log(`Total vocabulary in dictionary=${this.lastRow - 1}`);
    const candidatesIndex = data
      .map((elm, idx) => (elm[this.lastColumn - 1] !== 'yes' ? idx : ''))
      .filter(String);
    if (!this.constructor.isAnyCandidateItem(candidatesIndex)) {
      return [];
    }
    const chosenItemIndex =
      candidatesIndex[Math.floor(Math.random() * candidatesIndex.length)];
    const chosenItem = convertedData[chosenItemIndex];
    return [chosenItem, chosenItemIndex];
  }

  getParseContent(chosenItem) {
    const contents = [];
    const gifsUrl = grabGifs(chosenItem['Vocabulary']);
    const openAiExplanation = getTextCompletion(chosenItem['Vocabulary']);
    for (const [key, value] of Object.entries(chosenItem).slice(1, -1)) {
      contents.push(`**${key}**\n`);
      if (key === 'Definition' || key === 'Addition') {
        if (value !== '') contents.push(`||${value}||\n\n`);
        else contents.push(`\n\n`);
      } else {
        contents.push(`\`\`\`${value}\`\`\`\n\n`);
      }
    }
    contents.push(`**OpenAI Explanation**`);
    contents.push(`||${openAiExplanation}||\n\n`);

    contents.push(`**Gifs**\n`);
    contents.push(`${gifsUrl.join('\n\n')}`);

    const content = contents.join('');
    return content;
  }

  sendToDiscord(content) {
    const payload = {
      username: 'Dictionary Bot',
      avatar_url:
        'https://cdn.iconscout.com/icon/premium/png-256-thumb/dictionary-1438295-1216705.png',
      content,
    };
    let response;
    try {
      response = UrlFetchApp.fetch(this.webhooksUrl, {
        method: 'post',
        contentType: 'application/json',
        muteHttpExceptions: true,
        payload: JSON.stringify(payload),
      });
    } catch (e) {
      Logger.log(e);
    }
    return response.getResponseCode() === 204;
  }

  setNotifiedFlagOnSheet(chosenItemIndex) {
    this.sheetsOne
      .getRange(chosenItemIndex + 2, this.lastColumn)
      .setValue('yes');
    Logger.log(`Index:"${chosenItemIndex + 2}" is updated.`);
  }

  static isAnyCandidateItem(data) {
    return data.length !== 0;
  }
}

function main(sheetId, webhooksUrl) {
  const s = new SheetService(sheetId, webhooksUrl);
  const [item, itemIndex] = s.getChosenItemAndIndex();
  if (!item) {
    Logger.log('Each vocabulary on Google Sheet is pushed to Discord.');
    return;
  }
  const contnet = s.getParseContent(item);
  const sent = s.sendToDiscord(contnet, webhooksUrl);
  if (sent) {
    s.setNotifiedFlagOnSheet(itemIndex);
  }
}
