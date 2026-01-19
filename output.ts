// {
//   "success": true,
//   "chartType": "line",
//   "context": "trend",
//   "preset": {
//     "defaultChart": "line",
//     "allowed": [
//       "line",
//       "bar"
//     ]
//   },
//   "data": {
//     "labels": [
//       "1/2024"
//     ],
//     "datasets": [
//       {
//         "label": "demand pressure",
//         "data": [
//           0.63
//         ]
//       }
//     ],
//     "meta": {
//       "context": "trend",
//       "indexes": [
//         "demand_pressure"
//       ],
//       "aggregation": "monthly average",
//       "timeRange": "1/2024 → 1/2024"
//     }
//   }
// }



// Test 1
// {
//   "success": true,
//   "chartType": "line",
//   "context": "trend",
//   "preset": {
//     "defaultChart": "line",
//     "allowed": [
//       "line",
//       "bar"
//     ]
//   },
//   "data": {
//     "labels": [],
//     "datasets": [
//       {
//         "label": "demand pressure",
//         "data": []
//       },
//       {
//         "label": "operational stress",
//         "data": []
//       },
//       {
//         "label": "update accessibility gap",
//         "data": []
//       }
//     ],
//     "meta": {
//       "context": "trend",
//       "indexes": [
//         "demand_pressure",
//         "operational_stress",
//         "update_accessibility_gap"
//       ],
//       "aggregation": "monthly average",
//       "timeRange": null
//     }
//   }
// }

// Test 2
// {
//   "success": true,
//   "chartType": "pie",
//   "context": "distribution",
//   "preset": {
//     "defaultChart": "pie",
//     "allowed": [
//       "pie"
//     ]
//   },
//   "data": {
//     "labels": [
//       "Normal",
//       "Watch",
//       "Critical"
//     ],
//     "datasets": [
//       {
//         "label": "Risk Distribution",
//         "data": [
//           0,
//           0,
//           0
//         ]
//       }
//     ],
//     "meta": {
//       "context": "distribution",
//       "totalSamples": 0,
//       "thresholds": {
//         "normal": "< 0.5",
//         "watch": "0.5 – 0.75",
//         "critical": ">= 0.75"
//       }
//     }
//   }
// }


//Test 3
// {
//   "success": true,
//   "chartType": "bar",
//   "context": "trend",
//   "preset": {
//     "defaultChart": "line",
//     "allowed": [
//       "line",
//       "bar"
//     ]
//   },
//   "data": {
//     "labels": [],
//     "datasets": [
//       {
//         "label": "composite risk",
//         "data": []
//       }
//     ],
//     "meta": {
//       "context": "trend",
//       "indexes": [
//         "composite_risk"
//       ],
//       "aggregation": "monthly average",
//       "timeRange": null
//     }
//   }
// }

// Test 6
// {
//   "success": true,
//   "chartType": "line",
//   "context": "trend",
//   "preset": {
//     "defaultChart": "line",
//     "allowed": [
//       "line",
//       "bar"
//     ]
//   },
//   "data": {
//     "labels": [],
//     "datasets": [
//       {
//         "label": "demand pressure",
//         "data": []
//       },
//       {
//         "label": "operational stress",
//         "data": []
//       }
//     ],
//     "meta": {
//       "context": "trend",
//       "indexes": [
//         "demand_pressure",
//         "operational_stress"
//       ],
//       "aggregation": "monthly average",
//       "timeRange": null
//     }
//   }
// }

