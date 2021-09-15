import * as React from 'react';

import AccessibleSVG from '../accessible-svg';

import { Icon } from '../iconTypes';

const IconAddMetadataEmptyState = ({ className = '', color = '#0061D5', title, width = 140 }: Icon) => (
    <AccessibleSVG
        className={`icon-add-metadata-empty-state ${className}`}
        title={title}
        viewBox="0 0 140 105"
        width={width}
    >
        <g fill="none" fillRule="evenodd">
            <path
                d="M92 1.134V.492a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-90.5 83.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629A1.005 1.005 0 0 1 1.134 86H.49a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm136 5.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-29-78v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-80 3.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-5.563 8.075v-.402a.313.313 0 0 1 .625 0v.402a.628.628 0 0 1 .23.229h.401c.17 0 .307.144.307.312a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.229.228v.402a.313.313 0 0 1-.625.004v-.406a.628.628 0 0 1-.228-.229h-.402A.313.313 0 0 1 22 24.25c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .229-.228zm-11.5 79v-.402a.313.313 0 0 1 .626 0v.402a.628.628 0 0 1 .228.228h.402c.17 0 .307.145.307.313a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.229.228v.402a.313.313 0 0 1-.624.004v-.406a.628.628 0 0 1-.23-.228h-.401a.313.313 0 0 1-.307-.313c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .229-.228z"
                fill={color}
            />
            <path
                d="M17 54c0-3.866 3.133-7 6.992-7h106.016c3.861 0 6.992 3.142 6.992 7 0 3.866-3.133 7-6.992 7H23.992C20.131 61 17 57.858 17 54zm-6 20c0-3.866 3.133-7 6.992-7h106.016c3.861 0 6.992 3.142 6.992 7 0 3.866-3.133 7-6.992 7H17.992C14.131 81 11 77.858 11 74zM5 94c0-3.866 3.133-7 6.992-7h106.016c3.861 0 6.992 3.142 6.992 7 0 3.866-3.133 7-6.992 7H11.992C8.131 101 5 97.858 5 94z"
                fill={color}
                fillOpacity=".1"
            />
            <path
                d="M130 61a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-6 20a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-6 22a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                fill={color}
            />
            <path
                d="M117.944 95.189l3.215-3.832a.996.996 0 0 1 1.407-.121c.423.355.475.99.126 1.406l-3.861 4.6a.993.993 0 0 1-1.4.128l-3.078-2.583a.993.993 0 0 1-.116-1.403 1 1 0 0 1 1.401-.13l2.306 1.935zm12-40l3.215-3.832a.996.996 0 0 1 1.407-.121c.423.355.475.99.126 1.406l-3.861 4.6a.993.993 0 0 1-1.4.128l-3.078-2.583a.993.993 0 0 1-.116-1.403 1 1 0 0 1 1.401-.13l2.306 1.935z"
                fill="#FFF"
            />
            <path
                d="M25 38.49c0-.823.668-1.49 1.509-1.49H54.77c.833 0 1.788.605 2.139 1.365l3.207 6.942c.348.754-.036 1.365-.86 1.365H26.491c-.824 0-1.491-.665-1.491-1.49V38.49z"
                fill="#FFF"
                stroke={color}
                strokeWidth="2"
            />
            <path
                d="M27 40.49c0-.823.668-1.49 1.494-1.49h25.164c.825 0 1.751.62 2.07 1.386l2.869 6.9c.318.766-.096 1.386-.933 1.386H28.51A1.498 1.498 0 0 1 27 47.182V40.49z"
                fill="#22A7F0"
                fillOpacity=".1"
            />
            <rect fill="#FFF" height="53.197" rx="1.5" stroke={color} strokeWidth="2" width="80" x="25" y="43" />
            <path
                d="M27 82.214c0-.827.657-1.34 1.475-1.185 0 0 3.614 1.268 23.858 1.268 12.585 0 18.165 3.312 25.334 3.312 14.499 0 23.954-4.331 23.954-4.331.762-.31 1.379.115 1.379.936v10.284c0 .827-.68 1.497-1.501 1.497H28.501A1.503 1.503 0 0 1 27 92.498V82.214z"
                fill={color}
                fillOpacity=".1"
            />
        </g>
    </AccessibleSVG>
);

export default IconAddMetadataEmptyState;
