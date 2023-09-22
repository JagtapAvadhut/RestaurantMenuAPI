import { useEffect } from 'react';
import './App.css';
import Resturant from './Resturent/Resturent';



function App() {
  useEffect(() => {
    document.title = "Cafe Black & White"
  });
  
  return (
    <>
      <Resturant />
    </>
  );
}

export default App;
