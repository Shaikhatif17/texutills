import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
const [mode ,setMode]=useState('light'); // whether dark mode is enabled or not
const [alert,setAlert] =useState(null);

const showAlert =(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })

}

const toggleMode=()=>{
  if(mode==='light'){
    setMode ( 'dark')
    document.body.style.backgroundColor='grey';
  }
  else{
    setMode ( 'light')
    document.body.style.backgroundColor= 'white';
  }
}

  return (
    < >
      <NavBar title='textUtils'  mode ={mode} toggleMode={toggleMode}/>
      
      {/* <NavBar /> */}
      <div className="container my-3">
      
      <TextForm  showAlert={showAlert} heading='Enter The Text To Analyse' mode={mode}/>
      </div>
    </>
  );
}


export default App;

