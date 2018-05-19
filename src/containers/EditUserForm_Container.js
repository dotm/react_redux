import { connect } from 'react-redux'
import EditUserForm from '../components/EditUserForm';
import { editUser } from '../actions'

const mapStateToProps = state => ({
    users: state.users
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSubmit: (event, new_user_data) => {
        event.preventDefault()
        let form = event.target

        let user_id = new_user_data.id

        dispatch(editUser(new_user_data))
        form.reset()
    }
})

const EditUserForm_Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditUserForm)

export default EditUserForm_Container