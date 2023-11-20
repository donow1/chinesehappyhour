import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {useNavigate} from "react-router-dom";


const SignUp = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const navigate = useNavigate();


    
    const handleSubmit = (e)=> {
      e.preventDefault()
      Axios.post('https://chinese-happy-hour.vercel.app/register', {
          name: name, 
          email: email, 
          password: password
      })
      .then(result=> {console.log(result)
      navigate('/login')
      })
  
      .catch(err=> console.log(err))


        

    
    // const handleSubmit = (e)=> {
    //     e.preventDefault()
    //     Axios.post('http://localhost:3001/register', {
    //         name: name, 
    //         email: email, 
    //         password: password
    //     })
    //     .then(result=> {console.log(result)
    //     navigate('/login')
    //     })
    
    //     .catch(err=> console.log(err))
    // }


    return(

        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2" id='ESignUpOrLogin'>
        <main className="flex items-center w-full px-2 md:px-20">
          <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
            <p className='text-6xl  text-[#D3756B] font-third'>Join us</p>
            <p className='text-3xl text-gray-500 font-lg pt-5'>Explore exclusive free learning resources and join free Chinese events!</p>
          </div>



       <div className="bg-[#68c2d4] text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">

            <h3 className='text-xl font-semibold text-white pt-2'>Create Account!</h3>

            <form onSubmit={handleSubmit}>

            <div className='flex flex-col items-center justify-center mt-2'>
            <input 
            type="text" 
            autoComplete='off'
            onChange={(e) => setName(e.target.value)}
            className='text-black rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' 
            placeholder='Name' />

            <input 
            type='email' 
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
            className='text-black rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' 
            placeholder='Email' />

            <input 
             type="password" 
             autoComplete='off'
             onChange={(e) => setPassword(e.target.value)}
             className='text-black rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' 
             placeholder='Password' />

            <button type="submit" className='rounded-2xl m-4 text-[#68c2d4] bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in'>
               Register
            </button>
            </div>
            </form>

            <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
            <p className='text-white mt-4 text-sm'>Already have an account?</p>
            <Link className='btn text-white mb-4 text-sm font-medium cursor-pointer' to='/login'>Sign In to your Account?</Link>
            
         </div>

         </main>
         </div>
    )
 }


 export default SignUp;


