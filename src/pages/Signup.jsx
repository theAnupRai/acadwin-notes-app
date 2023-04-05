import React from 'react'
import acadwin from '../assets/AcadWin.png'
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome back"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career"
    // image = {acadwin}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup