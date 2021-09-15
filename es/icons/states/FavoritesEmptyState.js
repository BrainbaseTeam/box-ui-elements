import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue } from '../../styles/variables';

var FavoritesEmptyState = function FavoritesEmptyState(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 126 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 130 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "favorites-empty-state ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 150 150",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  }, React.createElement("ellipse", {
    className: "fill-color fill-opacity",
    cx: "75",
    cy: "142",
    fill: color,
    fillOpacity: "0.1",
    rx: "32.5",
    ry: "3"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M69.7314286,6.14673971 L69.7314286,5.49740801 C69.7314286,5.22269715 69.9660128,5 70.2371429,5 C70.5164411,5 70.7428571,5.21751517 70.7428571,5.49608398 L70.7428571,6.14673971 C70.8964062,6.23556302 71.024437,6.36359384 71.1132603,6.51714286 L71.763916,6.51714286 C72.0378956,6.51714286 72.26,6.75172712 72.26,7.02285714 C72.26,7.30215543 72.0424848,7.52857143 71.763916,7.52857143 L71.1132603,7.52857143 C71.024437,7.68212045 70.8964062,7.81015127 70.7428571,7.89897458 L70.7428571,8.5496303 C70.7428571,8.82360992 70.5082729,9.04571429 70.2371429,9.04571429 C69.9578446,9.04571429 69.7314286,8.81205319 69.7314286,8.53520201 L69.7314286,7.89897458 C69.5778796,7.81015127 69.4498487,7.68212045 69.3610254,7.52857143 L68.7103697,7.52857143 C68.4363901,7.52857143 68.2142857,7.29398717 68.2142857,7.02285714 C68.2142857,6.74355886 68.4318009,6.51714286 68.7103697,6.51714286 L69.3610254,6.51714286 C69.4498487,6.36359384 69.5778796,6.23556302 69.7314286,6.14673971 Z M6.51714286,90.6010254 L6.51714286,89.9516937 C6.51714286,89.6769829 6.75172712,89.4542857 7.02285714,89.4542857 C7.30215543,89.4542857 7.52857143,89.6718009 7.52857143,89.9503697 L7.52857143,90.6010254 C7.68212045,90.6898487 7.81015127,90.8178796 7.89897458,90.9714286 L8.5496303,90.9714286 C8.82360992,90.9714286 9.04571429,91.2060128 9.04571429,91.4771429 C9.04571429,91.7564411 8.82819911,91.9828571 8.5496303,91.9828571 L7.89897458,91.9828571 C7.81015127,92.1364062 7.68212045,92.264437 7.52857143,92.3532603 L7.52857143,93.003916 C7.52857143,93.2778956 7.29398717,93.5 7.02285714,93.5 C6.74355886,93.5 6.51714286,93.2663389 6.51714286,92.9894877 L6.51714286,92.3532603 C6.36359384,92.264437 6.23556302,92.1364062 6.14673971,91.9828571 L5.49608398,91.9828571 C5.22210437,91.9828571 5,91.7482729 5,91.4771429 C5,91.1978446 5.21751517,90.9714286 5.49608398,90.9714286 L6.14673971,90.9714286 C6.23556302,90.8178796 6.36359384,90.6898487 6.51714286,90.6010254 Z M143.071429,85.5438826 L143.071429,84.8945509 C143.071429,84.61984 143.306013,84.3971429 143.577143,84.3971429 C143.856441,84.3971429 144.082857,84.614658 144.082857,84.8932268 L144.082857,85.5438826 C144.236406,85.6327059 144.364437,85.7607367 144.45326,85.9142857 L145.103916,85.9142857 C145.377896,85.9142857 145.6,86.14887 145.6,86.42 C145.6,86.6992983 145.382485,86.9257143 145.103916,86.9257143 L144.45326,86.9257143 C144.364437,87.0792633 144.236406,87.2072941 144.082857,87.2961174 L144.082857,87.9467732 C144.082857,88.2207528 143.848273,88.4428571 143.577143,88.4428571 C143.297845,88.4428571 143.071429,88.2091961 143.071429,87.9323449 L143.071429,87.2961174 C142.91788,87.2072941 142.789849,87.0792633 142.701025,86.9257143 L142.05037,86.9257143 C141.77639,86.9257143 141.554286,86.69113 141.554286,86.42 C141.554286,86.1407017 141.771801,85.9142857 142.05037,85.9142857 L142.701025,85.9142857 C142.789849,85.7607367 142.91788,85.6327059 143.071429,85.5438826 Z M101.591429,25.3638826 L101.591429,24.7145509 C101.591429,24.43984 101.826013,24.2171429 102.097143,24.2171429 C102.376441,24.2171429 102.602857,24.434658 102.602857,24.7132268 L102.602857,25.3638826 C102.756406,25.4527059 102.884437,25.5807367 102.97326,25.7342857 L103.623916,25.7342857 C103.897896,25.7342857 104.12,25.96887 104.12,26.24 C104.12,26.5192983 103.902485,26.7457143 103.623916,26.7457143 L102.97326,26.7457143 C102.884437,26.8992633 102.756406,27.0272941 102.602857,27.1161174 L102.602857,27.7667732 C102.602857,28.0407528 102.368273,28.2628571 102.097143,28.2628571 C101.817845,28.2628571 101.591429,28.0291961 101.591429,27.7523449 L101.591429,27.1161174 C101.43788,27.0272941 101.309849,26.8992633 101.221025,26.7457143 L100.57037,26.7457143 C100.29639,26.7457143 100.074286,26.51113 100.074286,26.24 C100.074286,25.9607017 100.291801,25.7342857 100.57037,25.7342857 L101.221025,25.7342857 C101.309849,25.5807367 101.43788,25.4527059 101.591429,25.3638826 Z M35.8485714,30.9267397 L35.8485714,30.277408 C35.8485714,30.0026972 36.0831557,29.78 36.3542857,29.78 C36.633584,29.78 36.86,29.9975152 36.86,30.276084 L36.86,30.9267397 C37.013549,31.015563 37.1415798,31.1435938 37.2304032,31.2971429 L37.8810589,31.2971429 C38.1550385,31.2971429 38.3771429,31.5317271 38.3771429,31.8028571 C38.3771429,32.0821554 38.1596277,32.3085714 37.8810589,32.3085714 L37.2304032,32.3085714 C37.1415798,32.4621204 37.013549,32.5901513 36.86,32.6789746 L36.86,33.3296303 C36.86,33.6036099 36.6254157,33.8257143 36.3542857,33.8257143 C36.0749874,33.8257143 35.8485714,33.5920532 35.8485714,33.315202 L35.8485714,32.6789746 C35.6950224,32.5901513 35.5669916,32.4621204 35.4781683,32.3085714 L34.8275126,32.3085714 C34.5535329,32.3085714 34.3314286,32.0739872 34.3314286,31.8028571 C34.3314286,31.5235589 34.5489437,31.2971429 34.8275126,31.2971429 L35.4781683,31.2971429 C35.5669916,31.1435938 35.6950224,31.015563 35.8485714,30.9267397 Z M135.474286,56.212454 L135.474286,55.5631223 C135.474286,55.2884114 135.70887,55.0657143 135.98,55.0657143 C136.259298,55.0657143 136.485714,55.2832295 136.485714,55.5617983 L136.485714,56.212454 C136.639263,56.3012773 136.767294,56.4293081 136.856117,56.5828571 L137.506773,56.5828571 C137.780753,56.5828571 138.002857,56.8174414 138.002857,57.0885714 C138.002857,57.3678697 137.785342,57.5942857 137.506773,57.5942857 L136.856117,57.5942857 C136.767294,57.7478347 136.639263,57.8758656 136.485714,57.9646889 L136.485714,58.6153446 C136.485714,58.8893242 136.25113,59.1114286 135.98,59.1114286 C135.700702,59.1114286 135.474286,58.8777675 135.474286,58.6009163 L135.474286,57.9646889 C135.320737,57.8758656 135.192706,57.7478347 135.103883,57.5942857 L134.453227,57.5942857 C134.179247,57.5942857 133.957143,57.3597015 133.957143,57.0885714 C133.957143,56.8092731 134.174658,56.5828571 134.453227,56.5828571 L135.103883,56.5828571 C135.192706,56.4293081 135.320737,56.3012773 135.474286,56.212454 Z M25.1653571,44.150998 L25.1653571,43.7451657 C25.1653571,43.5734714 25.3119723,43.4342857 25.4814286,43.4342857 C25.65599,43.4342857 25.7975,43.5702327 25.7975,43.7443382 L25.7975,44.150998 C25.8934681,44.2065126 25.9734874,44.2865319 26.029002,44.3825 L26.4356618,44.3825 C26.6068991,44.3825 26.7457143,44.5291152 26.7457143,44.6985714 C26.7457143,44.8731329 26.6097673,45.0146429 26.4356618,45.0146429 L26.029002,45.0146429 C25.9734874,45.110611 25.8934681,45.1906303 25.7975,45.2461448 L25.7975,45.6528047 C25.7975,45.8240419 25.6508848,45.9628571 25.4814286,45.9628571 C25.3068671,45.9628571 25.1653571,45.816819 25.1653571,45.643787 L25.1653571,45.2461448 C25.069389,45.1906303 24.9893697,45.110611 24.9338552,45.0146429 L24.5271953,45.0146429 C24.3559581,45.0146429 24.2171429,44.8680277 24.2171429,44.6985714 C24.2171429,44.52401 24.3530898,44.3825 24.5271953,44.3825 L24.9338552,44.3825 C24.9893697,44.2865319 25.069389,44.2065126 25.1653571,44.150998 Z M18.5910714,79.550998 L18.5910714,79.1451657 C18.5910714,78.9734714 18.7376866,78.8342857 18.9071429,78.8342857 C19.0817043,78.8342857 19.2232143,78.9702327 19.2232143,79.1443382 L19.2232143,79.550998 C19.3191824,79.6065126 19.3992017,79.6865319 19.4547163,79.7825 L19.8613761,79.7825 C20.0326133,79.7825 20.1714286,79.9291152 20.1714286,80.0985714 C20.1714286,80.2731329 20.0354816,80.4146429 19.8613761,80.4146429 L19.4547163,80.4146429 C19.3992017,80.510611 19.3191824,80.5906303 19.2232143,80.6461448 L19.2232143,81.0528047 C19.2232143,81.2240419 19.0765991,81.3628571 18.9071429,81.3628571 C18.7325814,81.3628571 18.5910714,81.216819 18.5910714,81.043787 L18.5910714,80.6461448 C18.4951033,80.5906303 18.415084,80.510611 18.3595695,80.4146429 L17.9529096,80.4146429 C17.7816724,80.4146429 17.6428571,80.2680277 17.6428571,80.0985714 C17.6428571,79.92401 17.7788041,79.7825 17.9529096,79.7825 L18.3595695,79.7825 C18.415084,79.6865319 18.4951033,79.6065126 18.5910714,79.550998 Z M126.813929,48.7024266 L126.813929,48.2965943 C126.813929,48.1249 126.960544,47.9857143 127.13,47.9857143 C127.304561,47.9857143 127.446071,48.1216613 127.446071,48.2957668 L127.446071,48.7024266 C127.54204,48.7579412 127.622059,48.8379604 127.677573,48.9339286 L128.084233,48.9339286 C128.25547,48.9339286 128.394286,49.0805437 128.394286,49.25 C128.394286,49.4245614 128.258339,49.5660714 128.084233,49.5660714 L127.677573,49.5660714 C127.622059,49.6620396 127.54204,49.7420588 127.446071,49.7975734 L127.446071,50.2042332 C127.446071,50.3754705 127.299456,50.5142857 127.13,50.5142857 C126.955439,50.5142857 126.813929,50.3682475 126.813929,50.1952155 L126.813929,49.7975734 C126.71796,49.7420588 126.637941,49.6620396 126.582427,49.5660714 L126.175767,49.5660714 C126.00453,49.5660714 125.865714,49.4194563 125.865714,49.25 C125.865714,49.0754386 126.001661,48.9339286 126.175767,48.9339286 L126.582427,48.9339286 C126.637941,48.8379604 126.71796,48.7579412 126.813929,48.7024266 Z",
    fill: color,
    transform: "translate(75.300000, 49.250000) scale(-1, 1) translate(-75.300000, -49.250000) "
  }), React.createElement("path", {
    className: "stroke-color fill-white",
    d: "M35,47.9900737 C35,47.1671287 35.6677833,46.5 36.5086652,46.5 L64.7706257,46.5 C65.6038385,46.5 66.5588137,47.1050351 66.9100361,47.8652661 L70.1170158,54.806865 C70.4653667,55.5608807 70.0812601,56.1721311 69.2572363,56.1721311 L36.4905247,56.1721311 C35.6673306,56.1721311 35,55.5073264 35,54.6820574 L35,47.9900737 Z",
    fill: "#FFFFFF",
    stroke: color,
    strokeWidth: "2"
  }), React.createElement("path", {
    className: "fill-color fill-opacity",
    d: "M36.7873881,49.9245 C36.7873881,49.101555 37.4555019,48.4344262 38.2810514,48.4344262 L63.4450865,48.4344262 C64.270014,48.4344262 65.1964383,49.054175 65.5149504,49.8202068 L68.3841724,56.7207768 C68.7023992,57.4861223 68.2883944,58.1065574 67.4517556,58.1065574 L38.2960054,58.1065574 C37.462819,58.1065574 36.7873881,57.4417526 36.7873881,56.6164836 L36.7873881,49.9245 Z",
    fill: color,
    fillOpacity: "0.1"
  }), React.createElement("path", {
    className: "stroke-color fill-white",
    d: "M80.332974,52.3032787 L113.499274,52.3032787 C114.328102,52.3032787 115,52.9758818 115,53.8026203 L115,104.000658 C115,104.828722 114.32719,105.5 113.498314,105.5 L81.318055,105.5",
    fill: "#FFFFFF",
    stroke: color,
    strokeDasharray: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }), React.createElement("path", {
    className: "stroke-color fill-white",
    d: "M81.318055,105.5 L36.5016621,105.5 C35.672317,105.5 35,104.827397 35,104.000658 L35,53.8026203 L35,53.8026203 C35,52.9745568 35.6760132,52.3032787 36.4953971,52.3032787 L80.332974,52.3032787",
    fill: "#FFFFFF",
    stroke: color,
    strokeWidth: "2"
  }), React.createElement("path", {
    className: "fill-color fill-opacity",
    d: "M37,91.7185235 C37,90.8915052 37.6574211,90.3784293 38.4748917,90.5333945 C38.4748917,90.5333945 42.0893396,91.8018989 62.3333333,91.8018989 C74.9176315,91.8018989 80.4976661,95.1139445 87.6666667,95.1139445 C102.165889,95.1139445 111.621106,90.7823489 111.621106,90.7823489 C112.382648,90.4723656 113,90.8978342 113,91.7185235 L113,102.002551 C113,102.829569 112.319761,103.5 111.498955,103.5 L38.5010449,103.5 C37.6720407,103.5 37,102.82324 37,102.002551 L37,91.7185235 Z",
    fill: color,
    fillOpacity: "0.1"
  }), React.createElement("path", {
    className: "stroke-color fill-white",
    d: "M93,50.5064693 C93,49.9506116 93.4446309,49.5 94.0008717,49.5 L107.999128,49.5 C108.551894,49.5 109,49.9483083 109,50.5064693 L109,69.9576354 C109,70.5134931 108.635468,70.7211115 108.173991,70.4134952 L101.826009,66.1819909 C101.369817,65.8778977 100.635468,65.8743746 100.173991,66.1819909 L93.8260088,70.4134952 C93.3698167,70.7175884 93,70.5157964 93,69.9576354 L93,50.5064693 Z",
    fill: "#FFFFFF",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }), React.createElement("polygon", {
    className: "stroke-color fill-color",
    fill: color,
    points: "101 59.625 98.9427516 60.7838137 99.3356511 58.3294069 97.6713022 56.5911863 99.9713758 56.2330931 101 54 102.028624 56.2330931 104.328698 56.5911863 102.664349 58.3294069 103.057248 60.7838137",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

export default FavoritesEmptyState;
//# sourceMappingURL=FavoritesEmptyState.js.map