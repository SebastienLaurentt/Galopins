import { Route, Routes } from 'react-router';

import MainPage from "./sections/MainPage";
import Login from './sections/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/auth/login" element={<Login />} />
      </Routes>
      
    </div>
  )
}

export default App;
