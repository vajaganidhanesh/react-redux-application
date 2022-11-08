import './App.css';

import {useEffect} from 'react'
import CARD from './card';
import Badge from './Badge';
function App() {

  useEffect(()=>{

    fetch('data.json')

    .then((data)=>data.json())
    .then((datas)=>{
        console.log(datas);
    })

    .catch((err)=>{
        console.log(err);
    })
    
},[])


  return (
    <div className="App">
      <Badge/>

      <CARD/>
    </div>
  );
}

export default App;
