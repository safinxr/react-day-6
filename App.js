import './App.css';
import { useEffect, useState } from 'react';
import Apishow from './conponent/ApiSho/Apishow';

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('my.json')
    .then(res =>res.json())
    .then(data => setData(data))
  },[])
  return (
    <div className="App">
      {
        data.map(info => <Apishow info={info} key={info.id}></Apishow> )
      }
    </div>
  );
}


export default App;
