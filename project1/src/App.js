import logo from './logo.svg';
import './App.css';

import { useState } from 'react';


function App() {
  const [formdata,setformdata] = useState({
    Firstname: "" , Lastname: "" , Email: "" , Country:"india" , Address:"", City : "" , Comments:false ,Candidates:false,Offers:false,
    Pushnoti:""
  })

  function changehandler(event){
 const {name, value , checked , type} = event.target;
 setformdata((prev) => ({...prev,[name]: type=== "checkbox"  ? checked : value}))
  }

  function submithandler(event){
    event.preventDefault();
    console.log(formdata);
  }

  return (
   <div style={{display:'flex', flexDirection:'column', justifyContent:'center' , alignItems: 'center'}}> 
    <form onSubmit={submithandler}>
      <label htmlFor='Firstname'>Firstname</label>
      <br/>
      <input
      type='text'
      name='Firstname'
      id='Firstname'
      value={formdata.Firstname}
      onChange={changehandler}></input>
      <br/>
      <label htmlFor='Lasttname'>Lastname</label>
      <br/>
      <input
      type='text'
      name='Lastname'
      id='Lastname'
      value={formdata.Lastname}
      onChange={changehandler}></input>

      <br/>
      <label htmlFor='Email'>Email</label>
      <br/>
      <input
      type='email'
      name='Email'
      id='Email'
      value={formdata.Email}
      onChange={changehandler}></input>
      <br/>
      <label htmlFor='Country'>Country</label>
      <br/>
      <select 
      name='Country'
      id='Country'
      value={formdata.Country}
      onChange={changehandler}>
        <option>india</option>
        <option>us</option>
        <option>mexico</option>
        <option>china</option>

      </select>
      <br/>
      <label htmlFor='Address'>Address</label>
      <br/>
      <input
      type='text'
      name='Address'
      id='Address'
      value={formdata.Address}
      onChange={changehandler}></input>
      <br/>
      <label htmlFor='City'>City</label>
      <br/>
      <input
      type='text'
      name='City'
      id='City'
      value={formdata.City}
      onChange={changehandler}></input>
      <br/>
      <fieldset>
        <legend>By Email</legend>
        <br/>
        <div style={{display:'flex'}}>
          <input
           type='checkbox'
           name='Comments'
           id='Comments'
           checked={formdata.Comments}
           onChange={changehandler}></input>
           <div>
            <label>Comments</label>
           </div>
        </div>
        <br/>
        <div style={{display:'flex'}}>
          <input
           type='checkbox'
           name='Candidates'
           id='Candidates'
           checked={formdata.Candidates}
           onChange={changehandler}></input>
           <div>
            <label>Candidates
            </label>
           </div>
        </div>
        <br/>
        <div style={{display:'flex'}}>
          <input
           type='checkbox'
           name='Offers'
           id='Offers'
           checked={formdata.Offers}
           onChange={changehandler}></input>
           <div>
            <label>Offers</label>
           </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Push notification</legend>
        <input
        type='radio'
        id='Pushnoti'
        name='Pushnoti'
        onChange={changehandler}
        value='everything'></input>
        <label htmlFor='Pushnoti'> everything</label>
        <br/>
        <input
        type='radio'
        id='Sameasemail'
        name='Pushnoti'
        onChange={changehandler}
        value='Sameasemail'></input>
        <label htmlFor='Sameasemail'> Same as Email</label>
        <br/>
        <input
        type='radio'
        id='Pushnothing'
        name='Pushnoti'
        onChange={changehandler}
        value='Nopushnotification'></input>
        <label htmlFor='Pushnothing'> Push Nothing</label>
      </fieldset>
      <button>Save</button>
    </form>
    <br/>
   
   </div>
  );
}

export default App;
