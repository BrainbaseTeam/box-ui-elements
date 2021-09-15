var hasRestrictedExternalContacts = function hasRestrictedExternalContacts(contacts, restrictedExternalEmails) {
  if (!restrictedExternalEmails.length) {
    return false;
  }

  return contacts.some(function (_ref) {
    var value = _ref.value;
    return restrictedExternalEmails.includes(value);
  });
};

export default hasRestrictedExternalContacts;
//# sourceMappingURL=hasRestrictedExternalContacts.js.map