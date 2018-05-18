const default_users = [
    {
        "id": "5aedbd8692b696a8f35e890d",
        "first_name": "Miller",
        "last_name": "Amyes",
        "email": "mamyes0@posterous.com",
        "gender": "Male"
    }, {
        "id": "5aedbd90352ea61f53ed330b",
        "first_name": "Leonora",
        "last_name": "Jenne",
        "email": "ljenne1@google.co.jp",
        "gender": "Female"
    }
]

const users = (state = default_users, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: action.id,
                    first_name: action.first_name,
                    last_name: action.last_name,
                    email: action.email,
                }
            ]
        case 'EDIT_USER':
            return state.map(user => {
                if (user.id === action.id){
                    return {
                        id: action.id,
                        first_name: action.first_name,
                        last_name: action.last_name,
                        email: action.email,
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