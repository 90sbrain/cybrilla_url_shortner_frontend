import './App.css';
import {
  useState
} from "react";
import React from 'react';
import axios from "axios";

function App() {

  const [state, setState] = useState({
    url: "",
    isInValidUrl: false,
    errMsg:'',
    shortUrl:'',
    showShortUrl:false,
    showWhat:1
  });

  var changeHandler = (e) => {
    setState({
      ...state,
      isInValidUrl: false,
      [e.target.name]: e.target.value
    })
  }

  var genetateUrl = (e) => {
    console.log(e)
    axios.post("http://localhost:5000/url",
      {
        "urlToConvert": e
      },
      {
      // 'Content-Type': 'text/plain',
      "Access-Control-Allow-Origin": "*"
      }
    ).then(resp => {
      console.log(resp)
      //debugger;
      if(resp.status == 200){
        setState({
          ...state,
          shortUrl: resp.data.shortUrl,
          showShortUrl: true,
          showWhat: 2
        })
      }else{
        setState({
          ...state,
          errMsg: resp.data.err
        })
      }
    }).catch(err=>{
      //debugger;
      setState({
        ...state,
        errMsg: err.response.data.err,
        isInValidUrl: true
      })
    })

  }

  return (
  
    <div id="app">
      {state.showWhat == 1 &&<React.Fragment>
        <h3>URL Shortner</h3>
        <form method="post" name="url" onSubmit={genetateUrl}>

            <label id='enterUrl' style={{'font-weight': 'bold'}}>Enter Url</label>
            <input type="text" name="url" value={state.url} onChange={changeHandler} />
            <div className="errorMsg">{state.isInValidUrl && <div>
                    <div>{state.errMsg}</div>
                </div>}</div>

            <input type="submit" className="button" value="Generate Url" onClick={(e)=>{
            e.preventDefault();
            console.log(e)
            genetateUrl(state.url)
            }
            }/>

            

        </form>

        </React.Fragment>}
        {state.showWhat ==2 &&<React.Fragment>
        <h3>URL Shortner</h3>
        <form method="post" name="url" onSubmit={genetateUrl}>

        <label id='enterUrl' style={{'font-weight': 'bold'}}>Short Url</label>
            <input type="text" style={{'margin-bottom': '12px'}} name="url" value={state.shortUrl}  />
            

            <input type="submit" style={{'margin-bottom': '12px'}} className="button" value="Click To Visit" onClick={(e)=>{
                e.preventDefault();
                console.log(e)
                window.open(state.shortUrl, '_blank');
            }} />
            <input type="submit" className="button" value="Go Back" onClick={(e)=>{
              e.preventDefault();
              setState({...state, showWhat:1})
              }
            }/>


        </form>

        </React.Fragment>}
    </div>


    );
  }

  export default App;