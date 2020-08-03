/**
 * Gets a cookie by name
 *
 * @param {string} name Cookie name.
 * @returns {string} Cookie value
 */
function get(name) {
  var _window = window,
      document = _window.document;
  var cookies = document.cookie.split('; ');
  var len = cookies.length;
  var pair;
  var i;

  for (i = 0; i < len; i += 1) {
    pair = cookies[i].split('=');

    if (pair[0] === name) {
      if (pair[1]) {
        // Internet Explorer doesn't set a = on empty cookie values, therefore pair[1] is undefined
        return decodeURIComponent(pair[1]);
      }

      return '';
    }
  }

  return '';
}
/**
 * Sets a cookie. The name and value are required, and all other params have default values.
 * It is recommended to use the default values unless you have a specific reason to override them.
 *
 * @param {string} name - Cookie name.
 * @param {mixed} value - Cookie value.
 * @param {int} expires - (Optional) Expiration date in UNIX time. Defaults to 2 months in the future. 0 for session cookies.
 * @param {string} path - (Optional) Cookie path. Defaults to the root path '/'.
 * @param {string} domain - (Optional) Cookie domain. Defaults to the cookie_domain used server-side.
 * @returns {void}
 */


function set(name, value, expires) {
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
  var domain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var _window2 = window,
      document = _window2.document;
  var expiresDate = new Date();
  var cookie = [];

  if (typeof expires === 'undefined') {
    expires = expiresDate.getTime() + 1000 * 3600 * 24 * 60; // two months;
  }

  expiresDate.setTime(expires);
  cookie.push("".concat(name, "=").concat(encodeURIComponent(value)));

  if (expires !== 0) {
    // do not add "expires" when creating a session cookie
    cookie.push("; expires=".concat(expiresDate.toUTCString()));
  }

  cookie.push("; path=".concat(path));

  if (domain) {
    cookie.push("; domain=".concat(domain));
  }

  cookie.push('; secure');
  document.cookie = cookie.join('');
}
/**
 * Deletes a cookie by name.
 *
 * @param {string} name Cookie name.
 * @returns {void}
 */


function remove(name) {
  set(name, '', new Date(0).getTime());
}
/**
 * Checks if cookies are enabled for this browser
 * This is useful when treating Box as a 3rd party (iframed)
 * @returns {boolean} True if cookies are enabled, false if not.
 */


function isEnabled() {
  var _window3 = window,
      document = _window3.document;
  var theCookie = document.cookie;
  return !!(theCookie && theCookie.length > 0);
}

export { get, isEnabled, remove, set };
//# sourceMappingURL=cookies.js.map