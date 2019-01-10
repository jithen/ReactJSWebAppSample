import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import ReactList from 'react-list';
const fileDownload = require('js-file-download');
// import { FileSystem } from 'expo';
var fs = require('browserify-fs');
var FileSaver = require('file-saver');

class ShowApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [""],
    }
    this.renderItem = this.renderItem.bind(this)
  };

  componentWillMount() {
    axios.get('http://192.168.0.4:8080/')
      .then(res => {
        console.log(res.data.files[1]);
        const array = res.data.files
        console.log(array);
        this.state.accounts = res.data.files;
        this.setState(this.state.accounts)
      })
  }

  setRedirect = () => {
    axios.get('http://192.168.0.4:8080/')
      .then(res => {
        // const persons = res.data;
        // this.setState({ persons });
        console.log(res);
        console.log(res.data);
        this.setState({
           accounts: res.data
        })
        // this.state.accounts = res.data;
        // this.setState({accounts});
      })

  }

// async installApp = (event) => {
installApp = async () => {
  console.log("Helloo")
  // console.log(event.target.id)

FileSaver.saveAs('http://192.168.0.4:8080/download', 'app.ipa');

/*  axios.get('http://192.168.0.4:8080/download')
    .then(res => {
      console.log(res.data.length)
      console.log(res.data);
    })*/
}

  renderItem(index, key, accounts) {
    console.log()
    // return <div key={key}><ul><li>{this.state.accounts[index]}</li></ul></div>;
    return (
                    <div>
                        <table>
                            <tr>
                              <td>{this.state.accounts[index]}</td>
                            </tr>
                            <button id={this.state.accounts[index]} onClick={this.installApp}>Install</button>
                        </table>
                    </div>
                );
  }

  render () {
    return (
       <div>
       <h1>Accounts</h1>
       <div style={{overflow: 'auto', maxHeight: 400}}>
         <ReactList
           itemRenderer={this.renderItem}
           length={this.state.accounts.length}
           type='uniform'
         />
       </div>
     </div>
    );
  }
}

export default ShowApps;
// export default withRouter(ShowApps);
