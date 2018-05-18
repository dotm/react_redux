import { connect } from 'react-redux'
import UserList from '../components/UserList';

const mapStateToProps = state => ({
    users: state.users
})

const SortedUserList = connect(
    mapStateToProps
)(UserList)

export default SortedUserList