import React from 'react'
import Template from '../components/Template'
import acadwin from '../assets/AcadWin.png'


const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome back"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career"
    image = {acadwin}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login