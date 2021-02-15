import axios from "axios";

// constantes
const dataInicial = {
    array: []
}

// types
const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS'

// reducer
export default function reducer(state = dataInicial, action){
    switch(action.type){
        case GET_TODO_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
}

// actions
export const getTodoAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:5000/todo')
        dispatch({
            type: GET_TODO_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }

}