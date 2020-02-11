/**
 * @flow
 * @file Suggested Collaborator utility functions
 * @author Box
 */
import type { SuggestedCollab, SuggestedCollabLookup } from '../flowTypes';
import fuzzySearch from '../../../utils/fuzzySearch';

/**
 * Function to compute suggested collaborators given a list of contacts and cached suggested collaborators.
 * Used by input components to help augment API results with cached suggestions using a fuzzy search.
 *
 * @param {Array<C>} contacts Contacts returned from the server with exact matches
 * @param {SuggestedCollabLookup} suggestedCollaborators Cached suggested collab lookup to fuzzy match on
 * @param {string} inputValue Value the user typed into the input box searching for collabs
 * @param {number} maxSuggestions Maximum number of items to suggest/return, default 3
 * @param {number} minCharacters Minimum number of characters before searching, default 3
 * @returns {Array<SuggestedCollab>, Array<C>}
 * [0] Suggested collaborators in recommended order
 * [1] The rest of the contacts not suggested
 */
export default function computeSuggestedCollabs<C: { id: number | string }>(
    contacts: Array<C>,
    suggestedCollabLookup: SuggestedCollabLookup,
    inputValue: string,
    maxSuggestions: number = 3,
    minCharacters: number = 3,
    maxGaps: number = 2,
): [Array<SuggestedCollab>, Array<C>] {
    const contactIdSet = new Set(contacts.map(c => c.id.toString()));
    // $FlowFixMe
    const suggestedCollabs: Array<SuggestedCollab> = Object.values(suggestedCollabLookup);
    const exactMatches: Array<SuggestedCollab> = suggestedCollabs.filter(
        sc => sc.id && contactIdSet.has(sc.id.toString()),
    );
    const exactMatchIds = exactMatches.map(c => c.id.toString());

    const suggestedFuzzyMatches =
        exactMatches.length >= maxSuggestions
            ? []
            : suggestedCollabs.filter((option: SuggestedCollab) => {
                  if (!inputValue || exactMatchIds.includes(option.id.toString())) {
                      return false;
                  }
                  const nameMatches = fuzzySearch(inputValue, option.name || '', minCharacters, maxGaps);
                  const emailAddress = option.email || '';
                  const emailAlias = emailAddress.substring(0, emailAddress.indexOf('@'));
                  const emailMatches = inputValue.length >= minCharacters && emailAlias.indexOf(inputValue) > -1;
                  return nameMatches || emailMatches;
              });

    const sortSuggestionList = list => {
        return list.sort((optionA: SuggestedCollab, optionB: SuggestedCollab) => {
            return optionB.userScore - optionA.userScore;
        });
    };

    // combine both lists preferring exact id matches over fuzzy matches
    const suggestedResult = [...sortSuggestionList(exactMatches), ...sortSuggestionList(suggestedFuzzyMatches)].slice(
        0,
        maxSuggestions,
    );

    const otherResults = contacts.filter(c => !suggestedResult.map(suggestion => suggestion.id).includes(c.id));

    return [suggestedResult, otherResults];
}
