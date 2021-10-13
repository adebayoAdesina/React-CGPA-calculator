import logo from './Component/R.gif';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Index from './Component';

function App() {
  
  // const loader = () => {
  //   document.getElementById('loading').innerHTML= `<img src={logo} alt="loading"/>`
  // }
  // loader()
  return (
    <>
    <section id="loading">
      <Index/>
    </section>
    </>
  );
}

export default App;
