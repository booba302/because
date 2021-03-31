import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const App = () => (
  <div></div>
)

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'))
}