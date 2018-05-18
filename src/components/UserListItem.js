import React from 'react';

export default function UserListItem (props){
    let {user} = props
    return (
        <ul>
            <li>First Name: {user.first_name}</li>
            <li>Last Name: {user.last_name}</li>
            <li>Email: {user.email}</li>
        </ul>
    )
}