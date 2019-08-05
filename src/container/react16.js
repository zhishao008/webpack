/**
 * 容器组件
 */
import { connect } from 'react-redux';
import { changeStatus } from '../ducks/dialog';
import TestIndex from "../test16.8/index";

const mapStateToProps = state => {
    return {status: state.dialog.status}
}

const mapDispatchToProps = dispatch => ({
    changeStatus: status => dispatch(changeStatus(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(TestIndex);