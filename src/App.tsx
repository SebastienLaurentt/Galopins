import { Route, Routes } from 'react-router';

import MainPage from "./sections/MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App;
