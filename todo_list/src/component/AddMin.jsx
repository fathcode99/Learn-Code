import React from "react";
// import Axios from 'axios';

import {
    Button
} from 'react-bootstrap'


import { connect } from 'react-redux';
import { minValue , addValue } from '../redux/actions'

class AddMin extends React.Component {
    render() {
        return (
            <div style={styles.container} className="align-items-center">
                <Button variant="danger" onClick={this.props.minValue} className="m-2"> - </Button>
                <h3>{this.props.nilai}</h3>
                <Button variant="success" onClick={this.props.addValue} className="m-2"> + </Button>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex'
    }
}

const mapStateToProps = (state) => {
    return {
        nilai: state.todo.value
    }
}
export default connect(mapStateToProps, { minValue , addValue })(AddMin)