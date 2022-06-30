// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  function submit(){
    console.log("Given details entered")
    alert("Successfully Entered")
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className='App'>

      <div>
        <label>FirstName:</label>
        <input type='text' />
      </div>
      <div>
        <label>LastName:</label>
        <input type='text' />
      </div>
      <div>
        <label>Role:</label>
        <select id="role" name="Role">
          <option value="Manager">Manager</option>
          <option value="Developer">Developer</option>
          <option value="engineer">engineer</option>
        </select>
      </div>
      <script src="index.js"></script>

      <div>
        <button onClick={submit}>Submit</button> 
      </div>

    </div>


  );
}

export default App;
