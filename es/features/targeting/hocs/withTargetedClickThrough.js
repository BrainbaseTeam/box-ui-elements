function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { useOnClickBody } from '../utils';

function withTargetedClickThrough(WrappedComponent) {
  var WrapperComponent = function WrapperComponent(_ref) {
    var children = _ref.children,
        closeOnClickOutside = _ref.closeOnClickOutside,
        shouldTarget = _ref.shouldTarget,
        useTargetingApi = _ref.useTargetingApi,
        rest = _objectWithoutProperties(_ref, ["children", "closeOnClickOutside", "shouldTarget", "useTargetingApi"]);

    var _useTargetingApi = useTargetingApi(),
        canShow = _useTargetingApi.canShow,
        onComplete = _useTargetingApi.onComplete,
        onClose = _useTargetingApi.onClose,
        onShow = _useTargetingApi.onShow;

    var handleOnComplete = function handleOnComplete() {
      if (shouldTarget && canShow) {
        onComplete();
      }
    };

    var shouldShow = shouldTarget && canShow;
    useOnClickBody(onClose, !!(shouldShow && closeOnClickOutside));
    React.useEffect(function () {
      if (shouldShow) {
        onShow();
      }
    }, [shouldShow, onShow]);
    return React.createElement(WrappedComponent, _extends({
      showCloseButton: true,
      stopBubble: true
    }, rest, {
      isShown: shouldShow,
      onDismiss: onClose
    }), React.createElement("span", {
      className: "bdl-targeted-click-through",
      "data-targeting": "click-through",
      "data-testid": "with-targeted-click-span",
      onClickCapture: handleOnComplete,
      onKeyPressCapture: handleOnComplete,
      tabIndex: -1
    }, children));
  };

  WrapperComponent.displayName = "withTargetedClickThrough(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
  return WrapperComponent;
}

export default withTargetedClickThrough;
//# sourceMappingURL=withTargetedClickThrough.js.map