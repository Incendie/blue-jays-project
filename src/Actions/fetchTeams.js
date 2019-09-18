import axios from "axios";

export function fetchTeams() {
  return function (dispatch) {
    axios({
        method: "POST",
        params: {
          ckAPIToken: "e77360a702ff8b523c437b5346f3eb4f7424667a1cddea61dedb57dbbd2ab42d"
        },
        baseURL: "https://api.apple-cloudkit.com/database/1/iCloud.com.lookscopeapp.lookscope/development/public/records/query",
        data: {
          zoneID: {
            zoneName: "_defaultZone"
          },
          query: {
            recordType: "Brand"
          }
        }
      })
      .then(response => {
        dispatch({
          type: "FETCH_BRANDS_FULFILLED",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: "FETCH_BRANDS_REJECTED",
          payload: err
        });
      });
  };
}