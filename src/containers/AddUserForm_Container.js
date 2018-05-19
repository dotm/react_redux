import { connect } from 'react-redux'
import AddUserForm from '../components/AddUserForm';
import { addUser } from '../actions'

const mapDispatchToProps = dispatch => ({
    handleSubmit: event => {
        event.preventDefault()
        let form = event.target
        const getFormValue = (className => form.getElementsByClassName(className)[0].value)

        let new_user = {
            first_name: getFormValue('first_name'),
            last_name: getFormValue('last_name'),
            email: getFormValue('email'),
        }

        dispatch(addUser(new_user))
        form.reset()
    }
})

const AddUserForm_Container = connect(
    null,
    mapDispatchToProps
)(AddUserForm)

export default AddUserForm_Container