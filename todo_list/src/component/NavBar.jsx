import React from "react";
import Navbar from 'react-bootstrap/Navbar';

import { connect } from 'react-redux';

class NavigationBar extends React.Component {
    render() {
        return (
            console.log(this.props.listActivity),
            <Navbar style={styles.container} bg="dark" className="p-3">
                <h3>TO DO LIST</h3>
                <h3>You Have {this.props.listActivity.length} To Do Item(s)</h3>
            </Navbar>
        )
    }
}

const styles = {
    container : {
        display : 'flex',
        justifyContent : 'space-between',
        color: 'white'
    }
}

const mapStateToProps = (state) => {
    return {
        listActivity : state.todo.activities
    }
}
export default connect (mapStateToProps)(NavigationBar)