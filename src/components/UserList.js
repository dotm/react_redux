import React from 'react';
import UserListItem from './UserListItem';

export default function UserList (props){
    let {users} = props
    let listItems = users.map(user => <UserListItem user={user} key={user.id}/>)
    return(
        <div>
            <h3>User List</h3>
            {listItems}
        </div>
    )
}