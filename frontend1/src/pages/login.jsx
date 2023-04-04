import React from 'react'
import{FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import { useState,useEffect } from 'react';




function Login() {
    const headerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: '10px',
      };
    
      const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: '30px',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.2)',
      };
    
      const labelStyles = {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
      };
    
      const inputStyles = {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '15px',
        boxSizing: 'border-box',
      };
    
      const buttonStyles = {
        backgroundColor: '#1abc9c',
        color: '#FFFFFF',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
      };
    
      const headingStyles = {
        textAlign: 'center',
        marginBottom: '30px',
        fontWeight: 'bold',
        fontSize: '24px',
      };
    
      const [formData,setFormData] = useState({
        
        email:'',
        password:'',
        
      })
      const{email,password}=formData
    
      const onChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
            
    
        }))
    
    
      }
    
    
      const onSubmit=()=>{
      
    
    }
    
      return (
        <div>
          <div style={headerStyles}>
            <h1><FaSignInAlt/> Login</h1>
          </div>
          <div style={formStyles}>
            <h2 style={headingStyles}>Sign In</h2>
            <section className='form'>
            <form onSubmit={onSubmit}>
            
    
              <div className='form-group'>
              <label style={labelStyles} htmlFor="email">Email:</label>
              <input style={inputStyles} type="email" id="email" className='form-cotrol' name='email' value={email} onChange={onChange} />
              </div>
              <div className='form-group'>
              <label style={labelStyles} htmlFor="password">Password:</label>
              <input style={inputStyles} type="password" id="password" className='form-cotrol' name='password' value={password} onChange={onChange}  />
              </div>
              
              <div className='form-group'>
              <button style={buttonStyles} type="submit" className='btn btn-Block'>Sign In</button>
              </div>
            </form>
            </section>
          </div>
          </div>
    );
  }




export default Login