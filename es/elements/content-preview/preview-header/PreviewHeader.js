function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Preview header component
 * @author Box
 */
import React from 'react';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import getProp from 'lodash/get';
import AsyncLoad from '../../common/async-load';
import FileInfo from './FileInfo';
import IconClose from '../../../icons/general/IconClose';
import IconDownload from '../../../icons/general/IconDownloadSolid';
import IconDrawAnnotationMode from '../../../icons/annotations/IconDrawAnnotation';
import IconPointAnnotation from '../../../icons/annotations/IconPointAnnotation';
import IconPrint from '../../../icons/general/IconPrint';
import Logo from '../../common/header/Logo';
import messages from '../../common/messages';
import PlainButton from '../../../components/plain-button/PlainButton';
import { bdlGray50 } from '../../../styles/variables';
import './PreviewHeader.scss';
var LoadableContentOpenWith = AsyncLoad({
  loader: function loader() {
    return import(
    /* webpackMode: "lazy", webpackChunkName: "content-open-with" */
    '../../content-open-with');
  }
});

var PreviewHeader = function PreviewHeader(_ref) {
  var canAnnotate = _ref.canAnnotate,
      canDownload = _ref.canDownload,
      canPrint = _ref.canPrint,
      _ref$contentOpenWithP = _ref.contentOpenWithProps,
      contentOpenWithProps = _ref$contentOpenWithP === void 0 ? {} : _ref$contentOpenWithP,
      file = _ref.file,
      intl = _ref.intl,
      logoUrl = _ref.logoUrl,
      onClose = _ref.onClose,
      onDownload = _ref.onDownload,
      onPrint = _ref.onPrint,
      selectedVersion = _ref.selectedVersion,
      token = _ref.token;
  var fileId = file && file.id;
  var shouldRenderOpenWith = fileId && contentOpenWithProps.show;
  var currentVersionId = getProp(file, 'file_version.id');
  var selectedVersionId = getProp(selectedVersion, 'id', currentVersionId);
  var isPreviewingCurrentVersion = currentVersionId === selectedVersionId; // When previewing an older version the close button returns the user to the current version

  var closeMsg = isPreviewingCurrentVersion ? intl.formatMessage(messages.close) : intl.formatMessage(messages.back);
  var printMsg = intl.formatMessage(messages.print);
  var downloadMsg = intl.formatMessage(messages.download);
  var drawMsg = intl.formatMessage(messages.drawAnnotation);
  var pointMsg = intl.formatMessage(messages.pointAnnotation);
  return React.createElement("header", {
    className: classNames('bcpr-PreviewHeader', {
      'bcpr-PreviewHeader--basic': !isPreviewingCurrentVersion
    })
  }, React.createElement("div", {
    className: "bcpr-PreviewHeader-content bp-header bp-base-header"
  }, logoUrl ? React.createElement(Logo, {
    url: logoUrl
  }) : React.createElement(FileInfo, {
    file: file,
    version: selectedVersion
  }), React.createElement("div", {
    className: "bcpr-PreviewHeader-controls"
  }, isPreviewingCurrentVersion && React.createElement(React.Fragment, null, shouldRenderOpenWith && React.createElement(LoadableContentOpenWith, _extends({
    className: "bcpr-bcow-btn",
    fileId: fileId,
    token: token
  }, contentOpenWithProps)), canAnnotate && React.createElement(React.Fragment, null, React.createElement(PlainButton, {
    "aria-label": drawMsg,
    className: "bcpr-PreviewHeader-button bp-btn-annotate-draw bp-is-hidden",
    title: drawMsg,
    type: "button"
  }, React.createElement(IconDrawAnnotationMode, {
    color: bdlGray50,
    height: 18,
    width: 18
  })), React.createElement(PlainButton, {
    "aria-label": pointMsg,
    className: "bcpr-PreviewHeader-button bp-btn-annotate-point bp-is-hidden",
    title: pointMsg,
    type: "button"
  }, React.createElement(IconPointAnnotation, {
    color: bdlGray50,
    height: 18,
    width: 18
  }))), canPrint && React.createElement(PlainButton, {
    "aria-label": printMsg,
    className: "bcpr-PreviewHeader-button",
    onClick: onPrint,
    title: printMsg,
    type: "button"
  }, React.createElement(IconPrint, {
    color: bdlGray50,
    height: 22,
    width: 22
  })), canDownload && React.createElement(PlainButton, {
    "aria-label": downloadMsg,
    className: "bcpr-PreviewHeader-button",
    onClick: onDownload,
    title: downloadMsg,
    type: "button"
  }, React.createElement(IconDownload, {
    color: bdlGray50,
    height: 18,
    width: 18
  }))), onClose && React.createElement(PlainButton, {
    "aria-label": isPreviewingCurrentVersion && closeMsg,
    className: "bcpr-PreviewHeader-button bcpr-PreviewHeader-button-close",
    onClick: onClose,
    type: "button"
  }, isPreviewingCurrentVersion ? React.createElement(IconClose, {
    color: bdlGray50,
    height: 24,
    width: 24
  }) : closeMsg))));
};

export default injectIntl(PreviewHeader);
//# sourceMappingURL=PreviewHeader.js.map