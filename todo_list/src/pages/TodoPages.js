import React from 'react';
import { useEffect, useState } from 'react'
import Axios from 'axios';
import {
  Form,
  Button
} from 'react-bootstrap'

// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

// import component
import ToDoItem from '../component/ToDoItem'

function TodoPages() => {
  const [state, setState] = useState(activities)
  const dispatch = useDispatch()

  const fetchData = async () => {
    const getData = await Axios.get('http://localhost:2000/activities')
      .then(res => {
        dispatch({
          type: 'GET_DATA',
          payload: getData
        })
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    Axios.get('http://localhost:2000/activities')
      .then(res => {
        return({
          type: 'GET_DATA',
          payload: res.data
        })
      })
      .catch(err => console.log(err))
  }, []);
  
  // componentDidMount() {
  //   fetchData()
  // }

  const onDelete = async (id) => {
    await Axios.delete(`http://localhost:2000/activities/${id}`)
      .then(res => {
        fetchData()
      })
  }

  const showData = () => {
    return (
        getAllData.map(item => {
        return (
          <ToDoItem
            data={item}
            key={item.id}
            delete={() => onDelete(item.id)}
            complete={() => onComplete(item.id)}
          />)
      })
    )
  }

  const onAdd = async () => {
    // mempersiapkan data to do baru (utk ID sudah otomatis)
    let newTodo = this.refs.todo.value

    // siapkan objek
    let obj = {
      name: newTodo,
      isCompleted: false
    }

    // menambahkan data baru ke dg.json
    await Axios.post('http://localhost:2000/activities', obj)
      .then(res => {
        fetchData()
      })

    // untuk mengosongkan kembali fomr control
    this.refs.todo.value = ''
  }

  const onComplete = async (id) => {
    await Axios.patch(`http://localhost:2000/activities/${id}`, { isCompleted: true })
      // Kalau Axios.put dia akan berfungsi untuk mengganti semuanya
      .then(res => {
        fetchData()
      })
  }

  return (
    <div style={styles.container}>
      <h1>TO DO LIST</h1>
      {showData()}
      <div style={styles.input}>
        <Form.Control
          placeholder="Input New To Do"
          ref="todo"
        />
        <Button variant="primary" onClick={onAdd} className='ms-2'>Add</Button>
      </div>
    </div>
  )
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

export default TodoPages
