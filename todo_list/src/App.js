import React from 'react';
import Axios from 'axios';
import {
  Form,
  Button
} from 'react-bootstrap'

// import component
import ToDoItem from './component/TodoItem'

class App extends React.Component{
      constructor(props){
        super(props)
        this.state = {
          activities: [ ]
        }
      }

      fetchData = () => {
        Axios.get('http://localhost:2000/activities')
        .then(res => {
          this.setState({activities:res.data})
        })
        .catch(err => console.log(err))
      }

      componentDidMount() {
        this.fetchData()
      }
      
      onDelete = (id) => {
        Axios.delete(`http://localhost:2000/activities/${id}`)
        .then(res => {
          console.log(res.data)
          this.fetchData()
        })

      }
      
      showData = () => {
        return (
          this.state.activities.map(item => {
            return (
              <ToDoItem 
                ayam={item}
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
          name : newTodo,
          isCompleted : false
        }

        // menambahkan data baru ke dg.json
        Axios.post('http://localhost:2000/activities', obj)
        .then(res => {
          console.log(res.data)
          this.fetchData()
        })

        // untuk mengosongkan kembali fomr control
        this.refs.todo.value = ''
      }

      onComplete = (id) => {
        Axios.patch(`http://localhost:2000/activities/${id}`, {isCompleted : true})
        // Kalau Axios.put dia akan berfungsi untuk mengganti semuanya
        .then(res => {
          this.fetchData()
        })
      }

      render () {
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
    container : {
      padding : '10px'
    },
    input : {
      width : '25vw',
      display : 'flex'
    }
}

export default App
