import axios from "axios";
import { MONTHLY_NASA_DATA_PENDING, MONTHLY_NASA_DATA_FAILURE, MONTHLY_NASA_DATA_SUCCESS } from "./types"

export const getMonthlyNasaData = (value) => dispatch => {
    const { lat, long } = value;
    console.log("getMonthlyNasaData action called", value);
    const url = `https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_KT&community=RE&longitude=${long}&latitude=${lat}&start=2020&end=2020&format=JSON`
    dispatch({
        type: MONTHLY_NASA_DATA_PENDING,
      })
      return axios.get(url)
        .then(res => {
            console.log(res.data.properties);
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

    // if(value){
    //     dispatch({
    //         type: MENU_SHOW
    //     })
    // }else{
    //     dispatch({
    //         type: MENU_HIDE
    //     })
    // }
}

// export const displayContentAction = (value) => dispatch =>{
//     dispatch({
//         type: DISPLAY_CONTENT,
//         payload: value
//     })
// }
