import GET_SERVICIO from '../actions/types';


const initialState = {
    uso: 0,
    porcentaje: 0
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_SERVICIO:
            return {
                ...state,
                uso: action.payload.uso,
                porcentaje: action.payload.porcen
            }
    }
}