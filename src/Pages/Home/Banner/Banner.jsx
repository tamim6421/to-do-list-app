



import image from '../../../assets/banner.svg'
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className=" mt-28 max-w-[1250px] mx-auto  flex px-5 md:px-10 flex-col md:flex-row md:h-[600px]">
            <div className='flex-[1] p-3'>
                <p 
               
                className='bg-green-200 text-xl max-w-max px-5 shadow-lg py-2 rounded-full'  data-aos="fade-down" > <span className='badge bg-orange-400 text-white  badge-info gap-2'  data-aos="fade-up" > Begin</span> A great thinks</p>
             <div>
             <motion.p
                initial ={{opacity : 0}}
                animate ={{opacity : 1}}
                transition={{delay: 0.2, duration: 2}}
                className='text-green-500 text-3xl md:text-5xl drop-shadow-lg font-extrabold mt-20'  data-aos="fade-up" >Manage  <span className='text-orange-400'> Your Task</span>  <span className='text-purple-400'>&</span> <br /> make sure goal <span className='text-orange-400'>!!</span></motion.p>
             </div>
               
                <p className='text-xl mt-10 drop-shadow-lg ' data-aos="fade-up" >Forget the old rules. You can have the best people.
                            Right now. Right here.</p>

                   

                <div>
                   <Link to='/login'>
                   <motion.button 
                    animate={{rotateZ : 360}}
                    className='btn box bg-green-500 mt-10 shadow-lg hover:bg-green-600 text-white font-bold px-5 rounded-full' data-aos="fade-down">Let's Explore <BsArrowRight  className='text-white text-3xl font-bold'></BsArrowRight> </motion.button>
                   </Link>
                </div>

            </div>
            <div className='flex-[1]'>
            <div>
                <img src={image} alt="" />
            </div>
            </div>
             
        </div>
    );
};

export default Banner;