import React from "react";

const Setting = ({ color = "#000", fill = false }) => {
  if (fill) {
    return (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path
            d="M2281 5104 c-80 -21 -149 -62 -212 -124 -95 -93 -139 -206 -139 -350
l0 -87 -87 -33 c-49 -18 -121 -48 -162 -67 l-75 -34 -55 55 c-140 136 -305
185 -476 141 -102 -27 -160 -69 -326 -234 -165 -166 -207 -224 -234 -326 -44
-171 5 -336 141 -476 l55 -55 -34 -75 c-19 -41 -49 -113 -67 -161 l-33 -88
-87 0 c-144 0 -256 -44 -351 -139 -116 -117 -139 -197 -139 -491 0 -295 22
-371 140 -491 93 -95 206 -139 350 -139 l87 0 33 -87 c18 -49 48 -121 67 -162
l34 -75 -55 -55 c-30 -31 -68 -78 -85 -106 -90 -144 -94 -334 -9 -484 42 -75
324 -357 399 -399 142 -80 319 -82 463 -4 28 15 80 55 117 89 l66 63 99 -43
c55 -24 127 -54 162 -67 l62 -22 0 -87 c0 -145 44 -258 139 -351 120 -118 196
-140 491 -140 294 0 374 23 491 139 95 95 139 207 139 352 l0 87 63 22 c34 13
106 43 161 67 l99 43 66 -63 c37 -34 89 -74 117 -89 141 -76 316 -76 458 0 67
36 360 328 403 402 86 147 83 341 -8 485 -17 28 -55 75 -85 106 l-55 55 44
100 c24 54 54 127 67 162 l22 62 87 0 c148 0 256 43 351 139 118 120 140 196
140 491 0 295 -22 371 -140 491 -95 96 -203 139 -351 139 l-87 0 -22 63 c-13
34 -43 106 -67 161 l-43 99 63 66 c34 37 74 89 89 117 78 144 76 321 -4 463
-42 74 -334 366 -404 403 -150 81 -338 76 -479 -13 -27 -17 -75 -55 -106 -85
l-55 -55 -100 44 c-54 24 -127 54 -161 67 l-63 22 0 87 c0 145 -44 257 -139
352 -63 63 -131 101 -218 124 -79 21 -474 20 -552 -1z m561 -1467 c384 -101
691 -408 796 -795 24 -88 26 -114 26 -282 0 -168 -2 -194 -26 -282 -105 -387
-412 -694 -796 -795 -75 -20 -130 -27 -242 -30 -161 -6 -263 8 -399 54 -345
115 -622 413 -719 771 -24 88 -26 114 -26 282 0 168 2 194 26 282 96 352 364
645 703 767 130 47 228 61 400 57 132 -3 177 -8 257 -29z"
          />
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.517 3.292a1.767 1.767 0 0 1 2.966 0l.633.978a1.767 1.767 0 0 0 1.854.767l1.138-.243a1.767 1.767 0 0 1 2.098 2.098l-.244 1.138a1.767 1.767 0 0 0 .768 1.854l.978.633a1.767 1.767 0 0 1 0 2.966l-.978.633a1.767 1.767 0 0 0-.768 1.854l.244 1.138a1.767 1.767 0 0 1-2.098 2.098l-1.138-.244a1.767 1.767 0 0 0-1.854.768l-.633.978a1.767 1.767 0 0 1-2.966 0l-.633-.978a1.767 1.767 0 0 0-1.854-.768l-1.138.244a1.767 1.767 0 0 1-2.098-2.098l.243-1.138a1.767 1.767 0 0 0-.767-1.854l-.978-.633a1.767 1.767 0 0 1 0-2.966l.978-.633a1.767 1.767 0 0 0 .767-1.854l-.243-1.138a1.767 1.767 0 0 1 2.098-2.098l1.138.243a1.767 1.767 0 0 0 1.854-.767l.633-.978z"
          stroke={color}
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" />
      </svg>
    );
  }
};

export default Setting;
