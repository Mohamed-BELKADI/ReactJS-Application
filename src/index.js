import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import SearchEngineApp from './components/SearchEngine'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <SearchEngineApp />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
