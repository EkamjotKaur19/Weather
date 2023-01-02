import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import React, { useState, useEffect } from "react"

function App() {
  const [darkMode, setDarkMode]=useState(false);

  

  useEffect(() => {
    if(darkMode){
      document.body.classList.add('dark');
      

    }
    else{
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className={darkMode? "app-dark":"app-light"}>
      <div className="head-btns">
        <button type="button" className={darkMode? "btn btn-light pos":"btn btn-dark pos"} data-bs-toggle="button" onClick={() => setDarkMode(!darkMode)} >{darkMode?'Light Mode' : 'Dark Mode'}</button>    

           
      </div>
      <Input />

    </div>
  );
}

export default App;
