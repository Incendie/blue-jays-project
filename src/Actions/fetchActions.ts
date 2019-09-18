import axios from "axios";

export function fetchTeams() {
  return function(dispatch: any) {
    axios({
      method: "GET",
      params: {
        sportId: 1
      },
      baseURL: "https://statsapi.mlb.com/api/v1/team",
      headers: {
        "Access-Control-Allow-Headers":
          "Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        dispatch({ type: "FETCH_TEAMS_FULFILLED", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_TEAMS_REJECTED", payload: err });
      });
  };
}

// export function fetchOutfitExamples(filter: any) {
//   return function(dispatch: any) {
//     axios({
//       method: "POST",
//       params: {
//         ckAPIToken:
//           "e77360a702ff8b523c437b5346f3eb4f7424667a1cddea61dedb57dbbd2ab42d"
//       },
//       baseURL:
//         "https://api.apple-cloudkit.com/database/1/iCloud.com.lookscopeapp.lookscope/development/public/records/query",
//       data: {
//         zoneID: {
//           zoneName: "_defaultZone"
//         },
//         query: {
//           recordType: "OutfitExampleSmall",
//           filterBy: filter
//         }
//       }
//     })
//       .then(response => {
//         dispatch({ type: "FETCH_EXAMPLES_FULFILLED", payload: response.data });
//       })
//       .catch(err => {
//         dispatch({ type: "FETCH_EXAMPLES_REJECTED", payload: err });
//       });
//   };
// }

// export function fetchFilteredOutfits(filter: any) {
//   return function(dispatch: any) {
//     axios({
//       method: "POST",
//       params: {
//         ckAPIToken:
//           "e77360a702ff8b523c437b5346f3eb4f7424667a1cddea61dedb57dbbd2ab42d"
//       },
//       baseURL:
//         "https://api.apple-cloudkit.com/database/1/iCloud.com.lookscopeapp.lookscope/development/public/records/query",
//       data: {
//         zoneID: {
//           zoneName: "_defaultZone"
//         },
//         query: {
//           recordType: "OutfitExampleSmall",
//           filterBy: filter
//         }
//       }
//     })
//       .then(response => {
//         dispatch({
//           type: "FETCH_FILTERED_EXAMPLES_FULFILLED",
//           payload: response.data
//         });
//       })
//       .catch(err => {
//         dispatch({ type: "FETCH_FILTERED_EXAMPLES_REJECTED", payload: err });
//       });
//   };
// }

// export function fetchOutfitDetails() {
//   return function(dispatch: any) {
//     axios({
//       method: "POST",
//       params: {
//         ckAPIToken:
//           "e77360a702ff8b523c437b5346f3eb4f7424667a1cddea61dedb57dbbd2ab42d"
//       },
//       baseURL:
//         "https://api.apple-cloudkit.com/database/1/iCloud.com.lookscopeapp.lookscope/development/public/records/query",
//       data: {
//         zoneID: {
//           zoneName: "_defaultZone"
//         },
//         query: {
//           recordType: "OutfitExampleLarge"
//         }
//       }
//     })
//       .then(response => {
//         dispatch({
//           type: "FETCH_OUTFIT_DETAILS_FULFILLED",
//           payload: response.data
//         });
//       })
//       .catch(err => {
//         dispatch({ type: "FETCH_OUTFIT_DETAILS_REJECTED", payload: err });
//       });
//   };
// }
