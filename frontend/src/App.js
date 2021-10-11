import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {

  const [data,setData]=useState([]);

  const [dt,setDt]=useState('abc');
  useEffect(
    ()=>{
      axios.get('http://localhost:8080/hello')
      .then((data)=>{setData(data);
        var today = new Date(),

      date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + ' '+today.getHours() + ':'+today.getMinutes();
        setDt(date)
      })},[]
      );
//console.log(data[0]);
let abc=Object.create(data);

console.log(abc);
console.log(data.data)
  return (
    
    <div>
      <h2>{dt} {data.data}</h2>
    </div>
  );
}

export default App;
