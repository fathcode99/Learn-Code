import React from 'react';
// import Axios from 'axios';
import {
  Form,
  Button
} from 'react-bootstrap'

import { connect } from 'react-redux'

// import component
import ToDoItem from '../component/ToDoItem'

// import action
import { getData, addData, delData, compData } from '../redux/actions'


class TodoPages extends React.Component {

  fetchData = () => {
    this.props.getData()
  }

  componentDidMount() {
    this.fetchData()
  }

  onDelete = (id) => {
    this.props.delData(id)

  }

  showData = () => {
    return (
      this.props.listActivity.map(item => {
        return (
          <ToDoItem
            data={item}
            key={item.id}
            delete={() => this.onDelete(item.id)}
            complete={() => this.onComplete(item.id)}
          />)
      })
    )
  }

  onAdd = () => {
    // mempersiapkan data to do baru (utk ID sudah otomatis)
    let newTodo = this.refs.todo.value

    // siapkan objek
    let obj = {
      name: newTodo,
      isCompleted: false
    }

    // menambahkan data baru ke dg.json
    this.props.addData(obj)

    // untuk mengosongkan kembali fomr control
    this.refs.todo.value = ''
  }

  onComplete = (id) => {
    this.props.compData(id)
  }

  render() {
    // console.log(this.props.listActivity)
    return (
      <div style={styles.container}>
        <h1>TO DO LIST</h1>
        {this.showData()}
        <div style={styles.input}>
          <Form.Control
            placeholder="Input New To Do"
            ref="todo"
          />
          <Button variant="primary" onClick={this.onAdd} className='ms-2'>Add</Button>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: '10px'
  },
  input: {
    width: '25vw',
    display: 'flex'
  }
}

const mapStateToProps = (state) => {
  return {
    listActivity: state.todo.activities
  }
}

export default connect(mapStateToProps, { getData, addData, delData, compData })(TodoPages)
