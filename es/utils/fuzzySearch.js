/**
 * 
 * @file Fuzzy search utility
 * @author Box
 *

/**
 * Fuzzy search helper to match a term against a piece of content.
 * Matches all characters in search string to content in the order they appear.
 * Requires all characters to be matched in order to return true.
 * Internal scoring rewards sequences of characters found in the content very highly.
 * Also has a minimum scoring check the uses the passed maxGaps to approximate how many breaks in the
 * search string are allowed to be present in the content while still considering it to be a match.
 *
 * @param {string} search User input search string
 * @param {string} content Content to search over for matches
 * @param {number} minCharacters Minimum number of search characters before matching anything, default 3
 * @param {number} maxGaps Approximate maximum number of gaps in the search string to tune fuzzyness, default 2
 * @returns {boolean} If a match is found
 */
var fuzzySearch = function fuzzySearch(search, content) {
  var minCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var maxGaps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;

  if (!content) {
    return false;
  }

  var uniformContent = content.toLowerCase().replace(/\s/g, '');
  var uniformSearch = search.toLowerCase().replace(/\s/g, '');
  var contentLength = uniformContent.length;
  var searchLength = uniformSearch.length;

  if (searchLength < minCharacters || searchLength > contentLength) {
    return false;
  }

  var matched = false;
  var totalScore = 0;

  for (var i = 0; i < contentLength; i += 1) {
    if (contentLength - i < searchLength) {
      break;
    }

    var searchIndex = 0;
    var currentScore = 0;
    var subScore = 0;

    for (var j = i; j < contentLength; j += 1) {
      if (uniformContent[j] === uniformSearch[searchIndex]) {
        searchIndex += 1; // For streaks of matched characters score should increase exponentially

        currentScore += 1 + currentScore;
      } else {
        currentScore = 0;
      }

      subScore += currentScore;
    }

    if (searchIndex !== searchLength) {
      break;
    }

    if (subScore > totalScore) {
      totalScore = subScore;
    }
  }

  if (totalScore > 0) {
    var maxGroups = Math.min(maxGaps, searchLength); // minScore is calculated as a near-worst-case score given an even distribution of gaps
    // since the algorithm rewards streak of characters breaking them up evenly is the worst case
    // minimum score should also be better than just each character individually

    var minScore = Math.max(maxGroups * Math.pow(2, Math.floor(searchLength / maxGroups - 1)), searchLength + 1);
    matched = totalScore >= minScore;
  }

  return matched;
};

export default fuzzySearch;
//# sourceMappingURL=fuzzySearch.js.map