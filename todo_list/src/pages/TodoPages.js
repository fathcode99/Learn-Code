import React from 'react';
import { useEffect } from 'react'
import Axios from 'axios';
import {
  Form,
  Button
} from 'react-bootstrap'

// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

// import component

const TodoPages = () => {
  // const [state, setState] = useState()
  const getData = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  const fetchData = () => {
    Axios.get('http://localhost:2000/activities')
      .then(res => {
        dispatch({
          type: 'GET_DATA',
          payload: res.data
        })
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    Axios.get('http://localhost:2000/activities')
      .then(res => {
        dispatch({
          type: 'GET_DATA',
          payload: res.data
        })
      })
      .catch(err => console.log(err))
  }, [dispatch]);

  const onAdd = () => {
    let obj = {
      name: document.getElementById("newName").value,
      isCompleted: false
    }
    Axios.post('http://localhost:2000/activities', obj)
      .then(res => {
        fetchData()
      })
    document.getElementById("newName").value = ''
  }


  const onEdit = (id) => {
    Axios.patch(`http://localhost:2000/activities/${id}`, { isEdit: true })
      .then(res => {
        fetchData()
      })

  }

  const onDone = (id) => {
    let newEdit = {
      name : document.getElementById("newEdit").value,
      isEdit: false
    }
    Axios.patch(`http://localhost:2000/activities/${id}`, newEdit)
      .then(res => {
        fetchData()
      })
    console.log(newEdit)

  }

  const onComplete = (id) => {
    Axios.patch(`http://localhost:2000/activities/${id}`, { isCompleted: true })
      .then(res => {
        fetchData()
      })
  }
  const onUnfinished = (id) => {
    Axios.patch(`http://localhost:2000/activities/${id}`, { isCompleted: false })
      .then(res => {
        fetchData()
      })
  }

  const onDelete = (id) => {
    Axios.delete(`http://localhost:2000/activities/${id}`)
      .then(res => {
        fetchData()
      })
    console.log(getData)
  }


  const showData = () => {
    return (
      getData.activities.map(item => {
        return (
          <div >
            {item.isEdit ?
              <div style={styles.container}>
                <Form.Control
                  placeholder={item.name} type="text" id="newEdit"
                />
                <div>
                  <Button variant="success" className="me-2" onClick={() => onDone(item.id)}>
                    Done
                  </Button>
                </div>
              </div>
              :
              <div style={styles.container}>
                <p style={styles.p}> ID : - {item.id} - {item.name}</p>
                <div>
                  <Button variant="danger" className="me-2" onClick={() => onDelete(item.id)}>Delete</Button>
                  <Button variant="success" className="me-2" onClick={() => onComplete(item.id)} disabled={item.isCompleted}>
                    {item.isCompleted ? "Finished" : "Completed"}
                  </Button>
                  <Button variant="success" className="me-2" onClick={() => onUnfinished(item.id)} disabled={!item.isCompleted}>Unfinished</Button>
                  <Button variant="success" className="me-2" onClick={() => onEdit(item.id)} disabled={item.isEdit}>
                    Edit

                  </Button>
                </div>
              </div>
            }

          </div>
        )
      })
    )
  }



  return (
    <div style={styles.containers}>
      <h1>TO DO LIST</h1>
      {showData()}
      <div style={styles.input} >
        <Form.Control
          placeholder="Input New To Do" type="text" id="newName"
        />
        <Button variant="primary" className='ms-2' onClick={() => onAdd()}>Add</Button>
      </div>
    </div>
  )
}

const styles = {
  containers: {
    padding: '10px'
  },
  input: {
    width: '25vw',
    display: 'flex'
  },
  container: {
    backgroundColor: 'salmon',
    width: '55vw',
    height: '10vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
    borderRadius: '10px',
    marginBottom: '10px'
  },
  p: {
    margin: '0px'
  }
}

export default TodoPages
