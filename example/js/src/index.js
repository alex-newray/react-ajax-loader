
import React from 'react'
import ReactDOM from 'react-dom'

import {setRAL, RAL, LoaderView} from '../../../../react-ajax-loader/dist/react-ajax-loader'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider, connect } from 'react-redux';


const reducer = combineReducers({
  RAL,
})

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
)
window.store = store

class _Application extends React.Component {

  constructor(props){
    super(props)
    this.tick = this.tick.bind(this)
  }

  tick(i){
    this.props.setRAL(true)
    setTimeout(()=>{
      this.props.setRAL(false)
    }, i)
  }

  render(){
    console.log(this.props.setRAL);
    return(
      <div>
        <a onClick={ (e)=> {
              this.tick(1000)
              this.tick(5000)
              this.tick(2000)
          }}>
          SHOW LOADER
        </a>
        <br />
        <a onClick={ (e)=> {
              this.props.setRAL(true)
              this.props.setRAL(true)
              this.props.setRAL(true)
              setTimeout(()=>{
                this.props.setRAL(false, true)
              }, 3000)

          }}>
          Forse hide
        </a>

        <LoaderView />
      </div>

    )
  }
}

const Application = connect(
  (store)=>({}),
  (dispatch)=>({
    setRAL:(s, f)=>{ dispatch(setRAL(s, f)) },
  })
)(_Application)

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('content')
);
