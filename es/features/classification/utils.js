import getProp from 'lodash/get';
import classificationColorsMap from './classificationColorsMap';
import { DEFAULT_CLASSIFICATION_COLOR_ID } from './constants';

function getClassificationLabelColor(classificationLabelData) {
  var colorID = getProp(classificationLabelData, 'colorID', DEFAULT_CLASSIFICATION_COLOR_ID);

  var _ref = classificationColorsMap[colorID] || classificationColorsMap[DEFAULT_CLASSIFICATION_COLOR_ID],
      color = _ref.color;

  return color;
}

function getClassificationTinyconColor(classificationLabelData) {
  var colorID = getProp(classificationLabelData, 'colorID', DEFAULT_CLASSIFICATION_COLOR_ID);

  var _ref2 = classificationColorsMap[colorID] || classificationColorsMap[DEFAULT_CLASSIFICATION_COLOR_ID],
      tinycon = _ref2.tinycon;

  return tinycon;
} // eslint-disable-next-line import/prefer-default-export


export { getClassificationLabelColor, getClassificationTinyconColor };
//# sourceMappingURL=utils.js.map