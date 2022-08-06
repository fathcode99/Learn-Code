import React from 'react';
import Axios from 'axios';

import AddMin from '../component/AddMin';

import { connect } from 'react-redux'

import { getDatab } from '../redux/actions'

class AddMinPages extends React.Component{

  fetchData = () => {
    Axios.get('http://localhost:2000/value')
    .then(res => {
      this.props.getDatab(res.data)
    })
  }

  render() {
    return (
      <div>
        {this.fetchData()}
        <AddMin 
        />
      </div>
    )
  }
}

export default connect(null, {getDatab})(AddMinPages)