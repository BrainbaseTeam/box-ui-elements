/**
 * 
 * @file Utility for copying and downloading
 * @author Box
 */

/**
 * Function to download string as txt file
 *
 * @private
 * @param {String} string - string to download
 * @param {String} name - file name to use
 * @return {void}
 */
function download(string, name) {
  var blob = new Blob([string], {
    type: 'text/plain;charset=utf-8'
  }); // IE11

  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, name);
    return;
  }

  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = name;

  if (document.body) {
    document.body.appendChild(a);
  }

  a.click();
  setTimeout(function () {
    if (document.body) {
      document.body.removeChild(a);
    }

    URL.revokeObjectURL(url);
  }, 100);
}
/**
 * Function to copy string to the clipboard
 *
 * @private
 * @param {String} string - string to copy
 * @return {void}
 */


function copy(string) {
  var textarea = document.createElement('textarea');
  var _document = document,
      body = _document.body;
  textarea.value = string;
  textarea.style.display = 'hidden';

  if (body) {
    body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    body.removeChild(textarea);
  }
}

export { download, copy };
//# sourceMappingURL=download.js.map