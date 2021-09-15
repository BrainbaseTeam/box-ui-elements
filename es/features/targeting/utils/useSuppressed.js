import neverTargeted from '../neverTargeted';

/**
 * Returns a targetingApi that will be targeted as long as the input targeting api is targeted
 * and should suppress is false.
 */
var useSuppressed = function useSuppressed(useTargetingApi, useShouldSuppress) {
  var targetingApi = useTargetingApi();
  var shouldSuppress = useShouldSuppress();

  if (shouldSuppress) {
    return neverTargeted;
  }

  return targetingApi;
};

export default useSuppressed;
//# sourceMappingURL=useSuppressed.js.map