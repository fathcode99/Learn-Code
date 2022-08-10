import React, { useEffect, useRef } from 'react';
import Axios from 'axios';
import {
  Form,
  Button
} from 'react-bootstrap'

// import { connect } from 'react-redux'

import { useSelector, useDispatch } from 'react-redux'
// import component
import ToDoItem from '../component/TodoItem'

// import action
// import { getData } from '../redux/actions'



const TodoPages = () => {
  const getData = useSelector((state) =>
    state.todo
  )

  const dispatch = useDispatch()

  useEffect(() => {
    Axios.get('http://localhost:2000/activities')
      .then(res => {
        console.log(res)
        dispatch({
          type: 'GET_DATA',
          payload: res.data
        })
      })
      .catch(err => console.log(err))
  }, [])

  const onDelete = (id) => {
  Axios.delete(`http://localhost:2000/activities/${id}`)
    .then(res => {
      console.log(res.data)
      this.fetchData()
    })
}

  const showData = () => {
    return (
      getData.activities.map(item => {
        return (
          <ToDoItem
            data={item}
            key={item.id}
            delete={() => onDelete(item.id)}
            complete={() => this.onComplete(item.id)}
          />)
      })
    )
  }

  let newTodo = useRef(null)
  console.log(newTodo)

  const onAdd = () => {
    // mempersiapkan data to do baru (utk ID sudah otomatis)
    
    // siapkan objek

    let obj = {
      name: newTodo.current.focus(),
      isCompleted: false
    }
    

    // menambahkan data baru ke dg.json
    Axios.post('http://localhost:2000/activities', obj)
      .then(res => {
        console.log(res.data)
        Axios.get('http://localhost:2000/activities')
          .then(res => {
            console.log(res)
            dispatch({
              type: 'GET_DATA',
              payload: res.data
            })
          })
          .catch(err => console.log(err))
      })

    // untuk mengosongkan kembali fomr control
  }

  return (
    <div style={styles.container}>
      <h1>TO DO LIST</h1>
      {showData()}
      <div style={styles.input}>
        <Form.Control
          placeholder="Input New To Do"
          ref={newTodo}
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
