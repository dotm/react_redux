import React from 'react';
import TextFormGroup from './TextFormGroup';

export default function UserFormGroups (props){
    let user = props.user || {}
    return (
        <React.Fragment>
            <TextFormGroup
                name='first_name'
                title='First Name'
                value={user.first_name}
                handleInputChange={props.handleInputChange}
            />
            <TextFormGroup
                name='last_name'
                title='Last Name'
                value={user.last_name}
                handleInputChange={props.handleInputChange}
            />
            <TextFormGroup
                name='email'
                title='Email'
                type='email'
                value={user.email}
                handleInputChange={props.handleInputChange}
            />
        </React.Fragment>
    )
}