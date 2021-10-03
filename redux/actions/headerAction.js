import { MENU_HIDE, MENU_SHOW, DISPLAY_CONTENT } from "./types"

export const headerAction = (value) => dispatch => {
    if(value){
        dispatch({
            type: MENU_SHOW
        })
    }else{
        dispatch({
            type: MENU_HIDE
        })
    }
}

export const displayContentAction = (value) => dispatch =>{
    dispatch({
        type: DISPLAY_CONTENT,
        payload: value
    })
}
