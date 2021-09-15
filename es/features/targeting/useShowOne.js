import * as React from 'react';

function makeUseShowOne(targetingApis) {
  var shown = null;

  function useShowOne(useTargetingApi, index) {
    var _useTargetingApi = useTargetingApi(),
        canShow = _useTargetingApi.canShow,
        onShow = _useTargetingApi.onShow,
        onClose = _useTargetingApi.onClose,
        onComplete = _useTargetingApi.onComplete;

    return {
      canShow: (shown === null || shown === index) && canShow,
      onShow: React.useCallback(function () {
        if (shown === null && canShow) {
          shown = index;
          onShow();
        }
      }, [canShow, index, onShow]),
      onClose: onClose,
      onComplete: onComplete
    };
  }

  return targetingApis.map(function (targetingApi, index) {
    return function () {
      return useShowOne(targetingApi, index);
    };
  });
}

export default makeUseShowOne;
//# sourceMappingURL=useShowOne.js.map