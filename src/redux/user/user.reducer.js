/**
 * Reducer is just a function that gets two properties
 * a state - the last or initial state
 * an action - just an option that has a type (string value used in switch case) and a payload
 */

const INITIAL_STATE = {
     currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state, //always spread in everything on the state
                currentUser: action.payload
            }

        default:
            return state;
    }

}

export default userReducer;