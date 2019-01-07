import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class ShowApps extends React.Component {
  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  render () {
    return (
       <div>
        <button onClick={this.setRedirect}>Redirect</button>
       </div>
    );
  }
}

export default ShowApps;
// export default withRouter(ShowApps);
