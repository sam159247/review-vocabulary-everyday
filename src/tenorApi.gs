function getRawData(url) {
  let response;
  try {
    response = UrlFetchApp.fetch(url).getContentText();
  } catch (e) {
    Logger.log(e);
  }
  return response;
}

function getParseData(responsetext) {
  const rawData = JSON.parse(responsetext);
  const urls = rawData.results.map((v) => v.media_formats.gif.url);
  return urls;
}

function grabGifs(searchTerm) {
  const apiKey = '';
  const clientKey = '';
  const limit = 3;
  const searchUrl = `https://tenor.googleapis.com/v2/search?q=${searchTerm}&key=${apiKey}&client_key=${clientKey}&limit=${limit}`;
  const response = getRawData(searchUrl);
  const urls = getParseData(response);
  return urls;
}

function testGrabGifs() {
  Logger.log(grabGifs('cool'));
}
