function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// // 
import * as React from 'react';
import classNames from 'classnames';
import ContentPreview from '../../elements/content-preview';
import Cache from '../../utils/Cache';
import MessagePreviewGhost from '../message-preview-ghost/MessagePreviewGhost';
import PreviewErrorNotification from './PreviewErrorNotification';
import './styles/MessagePreviewContent.scss';
var apiCache = new Cache();

function MessagePreviewContent(_ref) {
  var contentPreviewProps = _ref.contentPreviewProps,
      fileId = _ref.fileId,
      sharedLink = _ref.sharedLink,
      getToken = _ref.getToken,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      apiHost = _ref.apiHost;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isPreviewLoaded = _React$useState2[0],
      setIsPreviewLoaded = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isPreviewInErrorState = _React$useState4[0],
      setIsPreviewInErrorState = _React$useState4[1];

  var previewRef = React.useRef(null);
  React.useEffect(function () {
    setIsPreviewLoaded(false);
    setIsPreviewInErrorState(false);
  }, [fileId]);
  return React.createElement("div", {
    className: classNames('MessagePreviewContent', className)
  }, isPreviewLoaded ? null : React.createElement(MessagePreviewGhost, null), isPreviewInErrorState ? React.createElement(PreviewErrorNotification, null) : React.createElement(ContentPreview, _extends({}, contentPreviewProps, {
    apiHost: apiHost,
    cache: apiCache,
    className: classNames({
      'MessagePreviewContent is-loading': !isPreviewLoaded
    }),
    componentRef: previewRef,
    fileId: fileId,
    onError: function onError() {
      setIsPreviewLoaded(true);
      setIsPreviewInErrorState(true);
    },
    onLoad: function onLoad() {
      if (previewRef.current) {
        previewRef.current.getViewer().disableViewerControls();
        setIsPreviewLoaded(true);
      }
    },
    sharedLink: sharedLink,
    token: function token() {
      return getToken(fileId);
    }
  })));
}

export default MessagePreviewContent;
//# sourceMappingURL=MessagePreviewContent.js.map