import { generateRandomId } from '../util';

/* action types */
const ADD_USER = 'ADD_USER'
const EDIT_USER = 'EDIT_USER'

/* other constants */
const UserList_SortingFilters = {
    FIRST_NAME: 'FIRST_NAME',
    LAST_NAME: 'LAST_NAME',
    EMAIL: 'EMAIL',
}
const UserList_SortingOrder = {
    ASCENDING: 'ASCENDING',
    DESCENDING: 'DESCENDING',
}

/* action creators */
function addUser({first_name, last_name, email}) {
    let user_data = {
        id: generateRandomId(),
        first_name, last_name, email
    }
    return { type: ADD_USER, payload: user_data }
}
function editUser({id, first_name, last_name, email}) {
    let user_data = {id, first_name, last_name, email}
    return { type: EDIT_USER, payload: user_data }
}

export {
    addUser,
    editUser,
}