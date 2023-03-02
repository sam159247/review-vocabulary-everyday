function getTextCompletion(searchTerm) {
  const apiKey = ScriptProperties.getProperty('OPENAI_APIKEY');
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  // https://github.com/f/awesome-chatgpt-prompts#act-as-an-english-translator-and-improver
  const prompt = `I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences. Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations. My first sentence is "${searchTerm}"`;

  let headers = {
    Authorization: 'Bearer ' + apiKey,
    'Content-type': 'application/json',
  };
  // Try on https://platform.openai.com/playground
  let options = {
    muteHttpExceptions: true,
    headers: headers,
    method: 'POST',
    payload: JSON.stringify({
      model: 'gpt-3.5-turbo',
      max_tokens: 1024,
      temperature: 0.9,
      messages: [{ role: 'user', content: prompt }],
    }),
  };
  const response = getRawData(apiUrl, options);
  const textResult = JSON.parse(response).choices[0].message.content;
  return textResult;
}

function testTextCompletion() {
  Logger.log(getTextCompletion('cool'));
}
