import React, { Component } from 'react'

import App from '../../containers/App'

export default class NotFound extends Component {
  render() {
    return (
      <div className=''>
        <App />
        <div className='notFound'>
            404
            Страница не найдена...
        </div>
      </div>
    )
  }
}