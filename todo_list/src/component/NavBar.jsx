import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";

const NavigationBar = () => {
    const getData = useSelector((state) => 
        state.todo,
        )

    return (
        <Navbar style={styles.container} bg="dark" className="p-3">
            <h3>TO DO LIST</h3>
            <h3>You Have {getData.activities.length} To Do Item(s)</h3>
        </Navbar>
    )
}

const styles = {
    container : {
        display : 'flex',
        justifyContent : 'space-between',
        color: 'white'
    }
}


export default NavigationBar