
import { AiTwotoneMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Helmet } from "react-helmet-async";




const Contact = () => {
    return (
        <div>
            <Helmet>
            <title>
               TODO | Contact 
                </title>
            </Helmet>
            
            <div className="text-center overflow-hidden min-h-screen mt-36">
        <h1 className="text-center text-2xl font-semibold text-gray-400 drop-shadow-md">Contact Me</h1>
         <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" data-aos="fade-up"  />
            <div>
            <div className="grid gap-2 md:grid-cols-3 mt-20">
        <div className="card  "  data-aos="fade-down">
          <figure className="px-10 pt-5">
          <BiSolidPhoneCall className="text-5xl text-green-500"></BiSolidPhoneCall>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-green-500">Call Us</h2>
            <p>+8801780-506421</p>
           
          </div>
        </div>
        <div className="card  "  data-aos="fade-up">
          <figure className="px-10 pt-10">
         
        <AiTwotoneMail className="text-5xl  text-green-500"></AiTwotoneMail>
          </figure>
          <div className="card-body items-center text-center">
          
            <h2 className="card-title text-green-500">Connect With Email</h2>
            <p>tamimhossain6421@gmail.com</p>
            <p>tamimhossain6421@gmail.com</p>
          </div>
        </div>
        <div className="card"  data-aos="fade-up">
          <figure className="px-10 pt-10">
         <FaLocationDot className="text-5xl  text-green-500"></FaLocationDot>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-green-500">My Address</h2>
            <p>Dhaka ,Bangladesh</p>
            <p>Mirpur - 6</p>
          </div>
        </div>
      </div>

    
            </div>

            </div>
        </div>
    );
};

export default Contact;