import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  showSharedData = (authData) => {
    console.log(authData);
    return JSON.stringify(authData, null, '\t');
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations!</strong> If you're seeing this page, you've logged in with UPort successfully.</p>
            <p>Here's the data that you shared with us:</p>
            {this.showSharedData(this.props.authData)}
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
