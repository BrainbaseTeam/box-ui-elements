function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mergeContacts = function mergeContacts(existingContacts, fetchedContacts) {
  var contactsMap = Object.keys(fetchedContacts).reduce(function (map, email) {
    var contact = fetchedContacts[email];
    map[email] = _objectSpread({}, contact, {
      text: contact.name,
      value: contact.email || contact.id
    });
    return map;
  }, {});
  return existingContacts.map(function (contact) {
    if (contact.id) {
      return contact;
    }

    return contact.value && contactsMap[contact.value] || {
      email: String(contact.value),
      id: String(contact.value),
      isExternalUser: true,
      text: String(contact.value),
      type: 'user',
      value: contact.value
    };
  });
};

export default mergeContacts;
//# sourceMappingURL=mergeContacts.js.map