import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'


const Create = () => {

  let navigate=useNavigate()
  let formik=  useFormik({
    initialValues:{
      name:"",
      phone:"",
      dob:"",
      degree:"",
      stream:"",
      percentage:"",
      yop:""
    },onSubmit:(data)=>{
      axios.post("http://localhost:3000/users",data)
      navigate("/")
      
    }
  })

  let {name,phone,dob,degree,stream,percentage,yop}=formik.values;
  
  
  return (
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="name">Name:</label>
      <input type="text" id='name' name='name' placeholder='enter your name' value={name} onChange={formik.handleChange} /><br/><br/>

      
      <label htmlFor="phone">Phone:</label>
      <input type="tel" id='phone' name='phone' placeholder='enter your phone' value={phone} onChange={formik.handleChange}/><br/><br/>

      
      <label htmlFor="dob">DOB:</label>
      <input type="date" id='dob' name='dob' placeholder='enter your dob' value={dob} onChange={formik.handleChange}/><br/><br/>
      
      <label htmlFor="degree">DEGREE:</label>
      <input type="text" id='degree' name='degree' placeholder='enter your degree' value={degree}  onChange={formik.handleChange}/><br/><br/>
      
      <label htmlFor="stream">STREAM:</label>
      <input type="text" id='stream' name='stream' placeholder='enter your stream' value={stream} onChange={formik.handleChange}/><br/><br/>
      
      <label htmlFor="percentage">TROUGHTOUT:</label>
      <input type="text" id='percentage' name='percentage' placeholder='enter your percentage' value={percentage} onChange={formik.handleChange}/><br/><br/>
      
      <label htmlFor="yop">YOP:</label>
      <input type="text" id='yop' name='yop' placeholder='enter your yop' value={yop} onChange={formik.handleChange}/><br/><br/>

      <input type="submit"  value="register"/>

    </form>
  )
}

export default Create