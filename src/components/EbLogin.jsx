import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {useNavigate} from "react-router-dom";


const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();



  const handleSubmit = (e)=> {
    e.preventDefault()
    Axios.post('http://localhost:3001/login', {
        email: email, 
        password: password
    })
    .then(result=> {console.log(result)
      if (result.data === "Success") {
        navigate("/resource")
      }
    })
    .catch(err=> console.log(err))
}



    return(

        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2" id='ESignUpOrLogin'>
        <main className="flex items-center w-full px-2 md:px-20">
          <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
            <p className='text-6xl  text-[#D3756B] font-third'>Join us</p>
            <p className='text-3xl text-gray-500 font-lg pt-5'>Explore exclusive free learning resources and join free Chinese events!</p>
          </div>




       <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">

             <h3 className='text-xl font-semibold text-[#D3756B] pt-2'>Sign In!</h3>

             {/* Inputs */}

             <form onSubmit={handleSubmit}>
             <div className='flex flex-col items-center justify-center'>
              <input 
              type='email' 
              autoComplete='off'
             onChange={(e) => setEmail(e.target.value)}
              className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-[#dea6a0] m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' 
              placeholder='Email'></input>

              <input 
              type="password" 
              autoComplete='off'
               onChange={(e) => setPassword(e.target.value)}
              className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-[#dea6a0] m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' 
              placeholder='Password'></input>

              <button type="submit" className='rounded-2xl m-2 text-white bg-[#f28c83] w-2/5 px-4 py-2 shadow-md hover:text-[#dea6a0] hover:bg-white transition duration-200 ease-in'>
                Sign In
              </button>
             </div>
             </form>



             <div className="inline-block border-[1px] justify-center w-20 border-gray-300 border-solid"></div>
             <p className='text-[#62e3dc] mt-4 text-sm'>Don't have an account?</p>
             <Link 
             to='/register'
             className='text-[#75e6df] mb-4 text-sm font-medium cursor-pointer'>Create a New Account?</Link>
          </div>




        </main>
         </div>
    )
  }
  
export default Login;