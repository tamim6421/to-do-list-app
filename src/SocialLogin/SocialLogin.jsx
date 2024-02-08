import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";




const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSocialLogin = (social) =>{
        social()
        .then( res =>{
            // console.log(res.user)

            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName,
                role: 'user'
            }
            console.log(userInfo)
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
          
                navigate('/')
           
        })
    }
    
    return (
        <div>
              <div className="divider text-green-500 ">Or, Continue With</div>
          <button
            type="button"
            onClick= { ()=>handleSocialLogin(googleLogin)}
            className="btn  w-full hover:text-white bg-green-200 hover:bg-green-500  flex justify-between items-center cursor-pointer "
          >
            Google
            <FcGoogle className="w-8 h-8" />
          </button>
        </div>
    );
};

export default SocialLogin;