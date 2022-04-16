import Login from './components/login';
 import './App.css';
import GridDemo from './components/grid-demo';
import {useNavigate} from "react-router-dom"
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseconfig';

const app = initializeApp(firebaseConfig);

function App() {
  
  return (
      <>
     
     <Login/>
     
      
</>
  )
}

export default App;
