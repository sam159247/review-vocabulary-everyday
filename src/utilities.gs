function getRawData(url, options) {
  let response;
  try {
    response = UrlFetchApp.fetch(url, options).getContentText();
  } catch (e) {
    Logger.log(e);
  }
  return response;
}
