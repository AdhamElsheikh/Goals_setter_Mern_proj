import React from 'react';
import { useState,useEffect } from 'react';
import{useSelector,useDispatch} from  'react-redux'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import{register,reset} from '../features/auth/authslice'
import Spinner from '../components/spinner'

import { FaReact , FaUser } from 'react-icons/fa';
function Register() {
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
    name:'',
    email:'',
    password:'',
    password2:''
  })
  const{name,email,password,password2}=formData
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user,isLoading,isError,isSuccess,message} = useSelector((state)=>state.auth)
  useEffect(()=>{
    if(isError){
        toast.error(message)
    }
    if(isSuccess){
        navigate('/')
    }

    dispatch(reset())

  },[user,isError,isSuccess,message,navigate,dispatch])

  const onChange=(e)=>{
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,


    }))


  }


  const onSubmit=()=>{
    if(password !== password2){
        toast.error('password does not match confirmed password')
    }
    else{
        const userData = {
            name,
            email,
            password,
        }
        dispatch(register(userData))
    }
  

}
if(isLoading){
   return <Spinner/>
}

  return (
    <div>
      <div style={headerStyles}>
        <h1><FaUser/> Register</h1>
      </div>
      <div style={formStyles}>
        <h2 style={headingStyles}>Create an Account</h2>
        <section className='form'>
        <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label style={labelStyles} htmlFor="name">Name:</label>
          <input style={inputStyles} type="text" id="name" className='form-control' name='name' value={name} onChange={onChange}/>
          </div>

          <div className='form-group'>
          <label style={labelStyles} htmlFor="email">Email:</label>
          <input style={inputStyles} type="email" id="email" className='form-control' name='email' value={email} onChange={onChange} />
          </div>
          <div className='form-group'>
          <label style={labelStyles} htmlFor="password">Password:</label>
          <input style={inputStyles} type="password" id="password" className='form-control' name='password' value={password} onChange={onChange}  />
          </div>
          <div className='form-group'>
          <label style={labelStyles} htmlFor="confirmPassword">Confirm Password:</label>
          <input style={inputStyles} type="password" id="confirmPassword" className='form-cotrol' name='password2' value={password2} onChange={onChange} />
          </div>
          <div className='form-group'>
          <button style={buttonStyles} type="submit" className='btn btn-Block'>Register</button>
          </div>
        </form>
        </section>
      </div>
      </div>
    
  );
}

export default Register;
