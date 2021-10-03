import { MENU_SHOW, MENU_HIDE, DISPLAY_CONTENT } from '../actions/types';

const initialState ={
    displayMenu: false,
    displayContent: 'Home',
}

export const headerReducer = (state = initialState, action) =>{
    switch(action.type){
        case MENU_SHOW:
            return {
                ...state,
                displayMenu: true
            }
        case MENU_HIDE:
            return {
                ...state,
                displayMenu: false
            }
        case DISPLAY_CONTENT:
            return{
                ...state,
                displayContent: action.payload
            }
        default :
        return state;
    }
}