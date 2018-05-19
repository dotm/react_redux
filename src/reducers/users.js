const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: action.payload.id,
                    first_name: action.payload.first_name,
                    last_name: action.payload.last_name,
                    email: action.payload.email,
                }
            ]
        case 'EDIT_USER':
            return state.map(user => {
                if (user.id === action.payload.id){
                    return {
                        id: action.payload.id,
                        first_name: action.payload.first_name,
                        last_name: action.payload.last_name,
                        email: action.payload.email,
                    }
                } else {
                    return user
                }
            })
        default:
            return state
    }
}

export default users