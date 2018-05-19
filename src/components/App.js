import React from 'react';
import AddUserForm_Container from '../containers/AddUserForm_Container';
import EditUserForm_Container from '../containers/EditUserForm_Container';
import SortedUserList from '../containers/SortedUserList';
import { generateRandomId } from 'util';
//import './App.css';

function App(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"><AddUserForm_Container/></div>
                <div className="col-md-3"><EditUserForm_Container/></div>
                <div className="col-md-3"><SortedUserList/></div>
            </div>
        </div>
    )
}

export default App;