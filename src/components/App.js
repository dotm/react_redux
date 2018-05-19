import React from 'react';
import AddUserForm_Container from '../containers/AddUserForm_Container';
import EditUserForm_Container from '../containers/EditUserForm_Container';
import SortedUserList from '../containers/SortedUserList';
import { generateRandomId } from 'util';
//import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        let users = [
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
        this.state = {users};
        this.addUser = this.addUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }
    
    addUser(event){
        event.preventDefault()
        let form = event.target
        const getFormValue = (className => form.getElementsByClassName(className)[0].value)
        
        this.setState((prevState, props) => {
            let new_id = generateRandomId()
            let new_user = {
                id: new_id,
                first_name: getFormValue('first_name'),
                last_name: getFormValue('last_name'),
                email: getFormValue('email'),
            }
            let users = prevState.users
            users.push(new_user)
            
            form.reset()
            return {users}
        });
    }
    
    editUser(event, new_user_data){
        event.preventDefault()
        let form = event.target
        
        this.setState((prevState, props) => {
            let user_id = new_user_data.id
            let users = prevState.users
            let new_users = users.map(user => {
                let selected_user = user.id === user_id
                if(selected_user){
                    return new_user_data
                }else{
                    return user
                }
            })
            
            form.reset()
            return {users:new_users}
        });
    }
    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <AddUserForm_Container/>
                    </div>
                    <div className="col-md-3">
                        <EditUserForm_Container/>
                    </div>
                    <div className="col-md-3">
                        <SortedUserList/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
