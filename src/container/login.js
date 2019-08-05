/**
 * 容器组件
 */
import { connect } from 'react-redux';
import { changeName } from '../ducks/login';
import Login from "../component/login/login";

const mapStateToProps = state => {
    return {name: state.login.name}
}

const mapDispatchToProps = dispatch => ({
    changeName: name => dispatch(changeName(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);