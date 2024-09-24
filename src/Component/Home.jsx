import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./Home.css"

const Home = ({ readOnly = false }) => {
   
   let [mode, setMode] = useState("Read");
   let navigate = useNavigate();
   let [details, setDetails] = useState(null);

   useEffect(() => {
      let fetchData = async () => {
         let { data } = await axios.get("http://localhost:3000/users");
         setDetails(data);
      }
      fetchData();
   }, []);

   let handleDelete = (id) => {
      let modifiedArray = details.filter((ele) => ele.id !== id);
      setDetails(modifiedArray);
   }

   let handleEdit = (id) => {
      navigate(`/Edit/${id}`);
   }

   // Update mode on clicking Create or Read
   let handleModeChange = (newMode) => {
      setMode(newMode);
   }

   return (
      <>
         <h1>STUDENTS-REGISTER-FORM</h1>
         <h2>CurrentMode:{mode}</h2>
         <ul>
            <li> <NavLink to={'/create'}  className="underline" onClick={() => handleModeChange('Create')} > Create </NavLink>  </li>
            <li><button id='clear-btn' onClick={() => { setDetails(null);
              handleModeChange('Cleared');}} > ClearAll </button>
            </li>
            <li> <NavLink to={'/read'}  className="underline" onClick={() => handleModeChange('Read')} > Read </NavLink>
            </li>
         </ul>
         <table border={2} width="100%">
            <thead>
               <tr>
                  <th>SL.NO</th>
                  <th>NAME</th>
                  <th>PHONE</th>
                  <th>DOB</th>
                  <th>STREAM</th>
                  <th>PERCENTAGE</th>
                  <th>YOP</th>
                  <th>ACTIONS</th>
               </tr>
            </thead>
            <tbody>
               {details == null ? (
                  <tr>
                     <td colSpan="7" style={{ textAlign: "center" }}>ENTER SOME DATA...!</td>
                  </tr>
               ) : (
                  details.map((ele, index) => (
                     <tr key={index} style={{ textAlign: "center" }}>
                        <td>{index + 1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.phone}</td>
                        <td>{ele.dob}</td>
                        <td>{ele.stream}</td>
                        <td>{ele.percentage}</td>
                        <td>{ele.yop}</td>
                        <td>
                           <button disabled={readOnly} onClick={() => handleEdit(ele.id)}>Edit</button>
                           <button disabled={readOnly} onClick={() => handleDelete(ele.id)}>Delete</button>
                        </td>
                     </tr>
                  ))
               )}
            </tbody>
         </table>
      </>
   )
}

export default Home;
