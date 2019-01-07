import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import { render } from "react-dom";
import { createHashHistory } from 'history';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Redirect, Link, Route, Router, withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ShowApps from './ShowApps';

export const history = createHashHistory()

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  onShow = () => {
      // var headers = {
      //       'Content-Type': 'application/json',
      //       "Access-Control-Allow-Origin": '*'
      //   }
      // axios.get('https://192.168.0.4:8443/', {headers: headers}).then(res => {

     //  axios.get('https://192.168.0.4:8443/').then(res => {
     //   const persons = res.data;
     //   console.log(res);
     // })
     console.log("hello");
     //return <Redirect to='/showApps' />

     // return ReactDOM.render(
     //     <Router history={history}>
     //       <div>
     //         <Route path="/ShowApps" component={ShowApps} />
     //       </div>
     //     </Router>,
     //   document.getElementById('root'),
     // );

    return history.push('/ShowApps'); //this.props.history.push('/ShowApps')
     // return ReactDOM.render(<ShowApps />, document.getElementById('root'))
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles);
    acceptedFiles.forEach(file => {
        const reader = new FileReader();
        console.log(reader.readAsBinaryString(file));
        reader.onload = () => {
            const fileAsBinaryString = reader.result;
            // console.log(fileAsBinaryString);
            // console.log(file.name);
            // console.log(file);
            // var headers = {
            //        'Content-Type': 'application/pdf'
            //   }

            axios.post('https://192.168.0.4:8443/api/fileupload', fileAsBinaryString).then(res => {
              console.log(res);
              console.log(res.data);
            })

        };
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
    });
  }

  render() {
    return (
      <div className="app">
      <button onClick={this.onShow} style={styles.showAppsButton}>Show Apps</button>
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps, isDragActive}) => {
          return (
            <div
              {...getRootProps()}
              className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
            >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop files here...</p> :
                  <button style={styles.uploadButton}>Upload</button>
              }
            </div>
          )
        }}
      </Dropzone>
      </div>
    );
  }
}

export default App;

const styles = {
  showAppsButton: {
    marginTop: '12%',
    marginLeft: '10%',
    fontSize: '18px',
    height: '65px',
    width: '250px',
    borderRadius: '10px',
    background: '#008CBA',
    color: 'white',
    fontWeight: 'bold',
  },
  uploadButton: {
    marginTop: '2%',
    marginLeft: '10%',
    fontSize: '18px',
    height: '65px',
    width: '250px',
    borderRadius: '10px',
    background: '#008CBA',
    color: 'white',
    fontWeight: 'bold',
  }
}
