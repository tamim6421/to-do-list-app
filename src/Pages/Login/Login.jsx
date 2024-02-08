
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaEye,FaEyeSlash  } from "react-icons/fa";
import toast from 'react-hot-toast';
// import Lottie from "lottie-react";
// import Title from "../../Components/Title/Title";


import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
    const{signInUser} = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const  from = location.state?.from.pathname || '/'


    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target 
        const email = form.email.value
        const password = form.password.value


        // login verification system 
        
    //     if(password.length < 6){
    //       toast.error('Password mast be at 6 character')
    //       return
    //  }
    //  else if (!/^(?=.*[A-Z])/.test(password)){
    //      toast.error('One Character should be UPPERCASE')
    //      return 
    //    }
    //    else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
    //     toast.error('Must have a special character')
    //     return
    //   }
        
        signInUser(email, password)
        .then(res =>{
          const user = res.user
          toast.success('Login Successful')
          event.target.reset()
          console.log(user)
         
          // Navigate after login 
          navigate(from, {replace: true})
        })
  
  
        .catch(error =>{
          console.log(error)
          toast.error(error.message)
        })
      
    }

    return (
        <div className="container">
        <div className="overly">
   
        <div className="hero  min-h-screen">
           <div className="hero-content flex-col  lg:flex-row-reverse bg-green-50">
             <div className="text-center lg:text-left">
             
               <p className="">
                <img src="https://i.ibb.co/KsC2cbt/Rectangle-2-4.png" alt="" />
               </p>
             </div>
             <div className="card flex-shrink-0 w-full max-w-sm ">
              <p className="text-center text-3xl font-bold text-orange-400 drop-shadow-lg">Login</p>
               <form onSubmit={handleLogin} className="card-body">
                 
                 <div className="form-control ">
                   <label className="label">
                     <span className="label-text text-green-600">Email</span>
                   </label>
                   <input
                     type="email"
                     name="email"
                     placeholder="Email"
                    
                     className="input input-bordered"
                     required
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text text-green-600">Password</span>
                   </label>
   
                        <div className="relative">
                  <input
                     type={showPass ? "text" : "password"}
                     name="password"
                     placeholder="password"
                     required
                     className="input input-bordered w-full"
                   />
                   <div className=" absolute right-3 top-3 text-xl">
                   <span onClick={()=> setShowPass(!showPass)}>
                     {
                       showPass? <FaEyeSlash className="text-green-400"></FaEyeSlash> :  <FaEye className="text-green-400"></FaEye>
                     }
                   </span>
                   </div>
                  </div>
                   <label className="label">
                     <a href="#" className="label-text-alt text-sm link link-hover text-green-600">
                       Forgot password?
                     </a>
                   </label>
                 </div>
                
                 <div className="form-control mt-6">
                   <button className="btn bg-green-400 text-white hover:bg-green-600">Login</button>
                   <p className='text-green-400 mt-5'>New This Site? Please  <Link to='/register'>   <span className='text-orange-600 underline font-semibold'>  Register</span> </Link></p>
                 </div>
                 <div>
                 <SocialLogin></SocialLogin>
                </div>
               </form>
             </div>
           </div>
         </div>
        </div>
       </div>
    );
};

export default Login;