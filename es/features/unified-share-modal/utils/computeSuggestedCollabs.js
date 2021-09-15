function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * 
 * @file Suggested Collaborator utility functions
 * @author Box
 */
import fuzzySearch from '../../../utils/fuzzySearch';

function scoreComparator(optionA, optionB) {
  return optionB.userScore - optionA.userScore;
}
/**
 * Function to compute suggested collaborators given a list of contacts and cached suggested collaborators.
 * Used by input components to help augment API results with cached suggestions using a fuzzy search.
 */


function computeSuggestedCollabs(contacts, suggestedCollabLookup, inputValue) {
  var maxSuggestions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;
  var minCharacters = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3;
  var maxGaps = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2;
  var contactIdSet = new Set(contacts.map(function (contact) {
    return contact.id.toString();
  })); // $FlowFixMe

  var suggestedCollabs = Object.values(suggestedCollabLookup);
  var exactMatches = suggestedCollabs.filter(function (suggestedCollab) {
    return suggestedCollab.id && contactIdSet.has(suggestedCollab.id.toString());
  });
  var exactMatchIds = exactMatches.map(function (suggestedCollab) {
    return suggestedCollab.id.toString();
  });
  var suggestedFuzzyMatches = exactMatches.length >= maxSuggestions ? [] : suggestedCollabs.filter(function (option) {
    if (!inputValue || exactMatchIds.includes(option.id.toString())) {
      return false;
    }

    var nameMatches = fuzzySearch(inputValue, option.name, minCharacters, maxGaps);
    var emailAddress = option.email || '';
    var emailAlias = emailAddress.substring(0, emailAddress.indexOf('@'));
    var emailMatches = inputValue.length >= minCharacters && emailAlias.includes(inputValue);
    return nameMatches || emailMatches;
  }); // combine both lists preferring exact id matches over fuzzy matches

  var suggestedResult = [].concat(_toConsumableArray(exactMatches.sort(scoreComparator)), _toConsumableArray(suggestedFuzzyMatches.sort(scoreComparator))).slice(0, maxSuggestions);
  var suggestedResultIds = suggestedResult.map(function (suggestion) {
    return suggestion.id;
  });
  var otherResults = contacts.filter(function (contact) {
    return !suggestedResultIds.includes(contact.id);
  });
  return [suggestedResult, otherResults];
}

export default computeSuggestedCollabs;
//# sourceMappingURL=computeSuggestedCollabs.js.map