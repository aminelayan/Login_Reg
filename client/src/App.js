
import './App.css';
import SignUp from './Components/Signup';
import SignIn from './Components/SignIn';
import { Route, Routes } from 'react-router-dom';
import Tanas from './Components/Tanas';


function App() {
  return (
    <div className="App">
        <Routes>
      <Route path="/login" element={<SignIn/>}></Route>
      <Route path="/registration" element={<SignUp/>}></Route>
      <Route path='/tanas' element={<Tanas/>}/>
    </Routes>
    </div>
  );
}

export default App;
