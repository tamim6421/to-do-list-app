import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../../SocialLogin/SocialLogin";

// import login from "../../assets/login1.json";
// import Lottie from "lottie-react";
// import Title from "../../Components/Title/Title";

const Register = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const check = event.target.check.checked;

    console.log(name, email, password, photo, check);
    // if (password.length < 6) {
    //   toast.error("Password mast be at 6 character");
    //   return;
    // } else if (!/^(?=.*[A-Z])/.test(password)) {
    //   toast.error("One Character should be UPPERCASE");
    //   return;
    // } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    //   toast.error("Must have a special character");
    //   return;
    // } else if (!check) {
    //   toast.error("Please Accept Our Trams And Conditions");
    //   return;
    // }

    createUser(email, password)
      .then((res) => {
        const user = res.user;

        handleUpdateProfile(name, photo).then(() => {
          // send user data to the database
          const userInfo = {
            name: name,
            email: email,
            image: photo,
            role: "user",
          };

          console.log(userInfo);
          
           // Set user information in localStorage
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
          event.target.reset();

          console.log(user);
          navigate("/");
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container ">
      <div className="overly">
        <div className="hero min-h-screen bg-green-50">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="card flex-shrink-0 w-full max-w-sm  mt-20 ">
              <p className="text-center text-3xl font-bold text-orange-400 drop-shadow-lg">
                Register Now
              </p>
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-green-500">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-green-500">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-green-500">Email</span>
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
                    <span className="label-text text-green-500">Password</span>
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
                      <span onClick={() => setShowPass(!showPass)}>
                        {showPass ? (
                          <FaEyeSlash className="text-green-400"></FaEyeSlash>
                        ) : (
                          <FaEye className="text-green-400"></FaEye>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="check"
                      id="check"
                    />
                    <label className="text-green-500" htmlFor="check">
                      Accept Our Trams And Conditions
                    </label>
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-green-500 text-white btn-success">
                    register
                  </button>
                  <p className="text-green-500 mt-4">
                    Already have an account? Please{" "}
                    <Link to="/login">
                      {" "}
                      <span className="text-rose-600 font-semibold underline">
                        {" "}
                        Login
                      </span>{" "}
                    </Link>
                  </p>
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

export default Register;
