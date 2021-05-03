import React from 'react'
import CoolButton from '../coolButton/CoolButton'
import FormField from '../formfield/FormField'
import Navbar from '../navbar/Navbar'



class SignUp extends React.Component {
    render(){
        return (
            <div>
              <Navbar/>
              <FormField label = {"Name"} placeholder = {'John Doe'} type= {'name'}/>
              <FormField label = {"Email"} placeholder = {'e.g. johnDoe@gmail.com'} type= {'email'}/>
              <FormField label = {"Password"} placeholder = {'password'} type= {'password'}/> 
              <CoolButton isSuccess>Submit</CoolButton>
            </div>
        )
    }
   
}


export default SignUp
