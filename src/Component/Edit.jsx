import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Edit = () => {
  let navigate=useNavigate()
  let [editData,setEditData]=useState({
    name:"",
    phone:"",
    dob:"",
    degree:"",
    stream:"",
    percentage:"",
    yop:"",
  })

  let {id}=useParams()
  useEffect(()=>{
    let getdata=async()=>{
     let {data}=await axios.get(`http://localhost:3000/users/${id}`)
     setEditData(data);
    }
    getdata()
    
  },[id])

 let handleSubmit=(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:3000/users/${id}`,editData)
    navigate('/')
 }
  
  return (
    <>
    <article>
    <main>
      <form onSubmit={handleSubmit}>

      <label htmlFor="name" className="label">Name:</label>
      <input type="text" id='name'  name='name' value={editData.name} 
      onChange={(e)=>setEditData({...editData,name:e.target.value})} /> <br /><br />

      <label htmlFor="phone" className="label">Phone:</label>
      <input type="text" id='phone'  phone='phone' value={editData.phone} 
      onChange={(e)=>setEditData({...editData,phone:e.target.value})} /> <br /><br />

      <label htmlFor="dob" className="label">Dob:</label>
      <input type="text" id='dob'  dob='dob' value={editData.dob} 
      onChange={(e)=>setEditData({...editData,dob:e.target.value})} /> <br /><br />

      <label htmlFor="degree" className="label">Degree:</label>
      <input type="text" id='degree'  degree='degree' value={editData.degree} 
      onChange={(e)=>setEditData({...editData,degree:e.target.value})} /> <br /><br />

      <label htmlFor="stream" className="label">Stream:</label>
      <input type="text" id='stream'  stream='stream' value={editData.stream} 
      onChange={(e)=>setEditData({...editData,stream:e.target.value})} /> <br /><br />
      
      <label htmlFor="percentage" className="label">Percentage:</label>
      <input type="text" id='percentage'  percentage='percentage' value={editData.percentage} 
      onChange={(e)=>setEditData({...editData,percentage:e.target.value})} /> <br /><br />

      <label htmlFor="yop" className="label">Yop:</label>
      <input type="text" id='yop'  yop='yop' value={editData.yop} 
      onChange={(e)=>setEditData({...editData,yop:e.target.value})} /> <br /><br />

      <center><input type="submit" value="UPDATE" /></center>

      </form>
       </main>
    </article>
     
    </>
  )
}

export default Edit