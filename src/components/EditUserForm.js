import React from 'react';
import UserFormGroups from './UserFormGroups';

export default class EditUserForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.get_initialState()

        this.select_editedUser = this.select_editedUser.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    
    get_initialState(){
        let initial_state = {
            id: undefined,
            first_name: '',
            last_name: '',
            email: '',
        }
        return initial_state
    }

    select_editedUser(event){
        let user_id = event.target.value
        
        let editedUser = this.props.users.find(user => user.id === user_id)
        
        this.setState({
            id: user_id,
            ...editedUser,
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    resetForm(){
        this.setState(this.get_initialState())
    }

    render(){
        let {users, handleSubmit} = this.props
        let options = users.map(user => <option value={user.id} key={user.id}>{user.email}</option>)
        return (
            <form onSubmit={event => {
                handleSubmit(event, this.state)
                this.resetForm()
            }}>
                <h3>Edit User Form</h3>
                <div className="form-group">
                    <label className="sr-only" htmlFor="select_user">Select User</label>
                    <select
                        value={this.state.id}
                        onChange={event => this.select_editedUser(event)}
                        className="select_user form-control"
                    >
                        <option value=''>Please select user first..</option>
                        {options}
                    </select>
                </div>
                {
                    (this.state.id === undefined)
                        ? null
                        : <UserFormGroups
                                user={this.state}
                                handleInputChange={this.handleInputChange}
                            />
                }
                <button type="submit" className="btn btn-default">Save</button>
            </form>
        )
    }
}