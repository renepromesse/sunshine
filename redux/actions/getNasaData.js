import axios from "axios";
import { MONTHLY_NASA_DATA_PENDING, MONTHLY_NASA_DATA_FAILURE, MONTHLY_NASA_DATA_SUCCESS } from "./types"

export const getMonthlyNasaData = (value) => dispatch => {
    const { lat, long } = value;
    const url = `https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_KT,TS,PRECTOTCORR&community=RE&longitude=${long}&latitude=${lat}&start=2020&end=2020&format=JSON`
    const URL = `https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_KT,TS,PRECTOTCORR&community=RE&longitude=-99.3083&latitude=38.3009&format=JSON&start=2020&end=2020`
    dispatch({
        type: MONTHLY_NASA_DATA_PENDING,
      })
      return axios.get(url)
        .then(res => {
          dispatch({
            type: MONTHLY_NASA_DATA_SUCCESS,
            payload: res.data.properties
          })
          }
        )
        .catch(err => {
          dispatch({
            type: MONTHLY_NASA_DATA_FAILURE,
            error: err
          })
        })

}


// export const getMonthlyNasaData = (value) => dispatch => {
//   const { lat, long } = value;
//   const url = `https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=TS&community=RE&longitude=${long}&latitude=${lat}&start=2020&end=2020&format=JSON`
//   dispatch({
//       type: MONTHLY_NASA_DATA_PENDING,
//     })
//     return axios.get(url)
//       .then(res => {
//         dispatch({
//           type: MONTHLY_NASA_DATA_SUCCESS,
//           payload: res.data.properties
//         })
//         }
//       )
//       .catch(err => {
//         dispatch({
//           type: MONTHLY_NASA_DATA_FAILURE,
//           error: err
//         })
//       })

// }