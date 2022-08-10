const onAdd = () => {
    // mempersiapkan data to do baru (utk ID sudah otomatis)
    let newTodo = this.refs.todo.value

    // siapkan objek
    let obj = {
      name: newTodo,
      isCompleted: false
    }

    // menambahkan data baru ke dg.json
    Axios.post('http://localhost:2000/activities', obj)
      .then(res => {
        fetchData()
      })

    // untuk mengosongkan kembali fomr control
    this.refs.todo.value = ''
  }

  const onComplete = (id) => {
    Axios.patch(`http://localhost:2000/activities/${id}`, { isCompleted: true })
      // Kalau Axios.put dia akan berfungsi untuk mengganti semuanya
      .then(res => {
        fetchData()
      })
  }

  const onDelete = async (id) => {
    await Axios.delete(`http://localhost:2000/activities/${id}`)
      .then(res => {
        fetchData()
      })
  }

  <div style={styles.container}>
            <p style={styles.p}> ID : -</p>
            <div>
                <Button variant="danger" className="me-2">Delete</Button>
                <Button variant="success"> Complete
                </Button>
            </div>
        </div>