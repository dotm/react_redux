import React from 'react';
import UserFormGroups from './UserFormGroups';

export default function AddUserForm (props){
    return (
        <form onSubmit={event => props.handleSubmit(event)}>
            <h3>Add User Form</h3>
            <UserFormGroups />
            <button type="submit" className="btn btn-default">Save</button>
        </form>
    )
}