function grabGifs(searchTerm) {
  const apiKey = ScriptProperties.getProperty('TENOR_APIKEY');
  const clientKey = ScriptProperties.getProperty('TENOR_CLIENTKEY');
  const limit = 3;
  const searchUrl = `https://tenor.googleapis.com/v2/search?q=${searchTerm}&key=${apiKey}&client_key=${clientKey}&limit=${limit}`;
  const options = {};
  const response = getRawData(searchUrl, options);
  const urls = JSON.parse(response).results.map((v) => v.media_formats.gif.url);
  return urls;
}

function testGrabGifs() {
  Logger.log(grabGifs('cool'));
}
