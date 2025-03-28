import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter  as Router,
//   Routes, // instead of Switch
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }
    , 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // This will keep changing the title of the page
      // setInterval(() => {
      //   document.title = "TextUtils is amazing mode";
      // }, 2000);
      // This will keep changing the title of the page
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    {/* <Router> */}
    {/* <Navbar title="Textutils" aboutText="About us" /> */}
    {/* <Navbar /> */}
    <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/>
      {/* <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/>} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
