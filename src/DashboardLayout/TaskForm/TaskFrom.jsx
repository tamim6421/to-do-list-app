import { useForm } from "react-hook-form"

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import useAuth from "../../Hooks/useAuth";


const TaskFrom = () => {
    const {user} = useAuth()
    const { register, handleSubmit  } = useForm();


    
  
    const onSubmit = async (data) => {
      console.log(data);

          // now send the menu item data send the database 
          const taskItem = {
              title: data.title,
              priority: data.priority,
              deadline: data.deadline,
              description: data.description,
              email: user?.email,
              userName: user?.displayName,
              photo: user?.photoURL 
              
          }
   
    };
  
    


    return (
        <div className="px-28 bg-green-50 py-5 pt-10 mb-10 ">
        <h1 className="text-center text-orange-400 text-2xl font-bold drop-shadow-xl ">Added task</h1>
      <div className="w-3/4 mx-auto">
        <form className="shadow-xl rounded-lg p-3 w-3/4 mx-auto  pb-7" onSubmit={handleSubmit(onSubmit)}>

          {/* recipe name  */}

          <div className="form-control w-full my-7">
            <label className="label">
              <span className="label-text"> Task Title</span>
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Task Title"
              className="input input-bordered w-full "
            />
          </div>


          <div className=" md:flex gap-8 justify-center items-center">
            {/* category section  */}
            <div className="form-control w-full my-7">
              <label className="label">
                <span className="label-text">Task Priority</span>
              </label>
              <select
              defaultValue='default'
                {...register("priority", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default" >
                  Priority
                </option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
             
              </select>
            </div>

            {/* price section  */}

            <div className="form-control w-full my-7">
              <label className="label">
                <span className="label-text">Task Deadline</span>
              </label>
              <input
                {...register("deadline", { required: true })}
                type="date"
                placeholder="Deadline"
                className="input input-bordered w-full "
              />
            </div>
          </div>

            {/* recipe details  */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Task Description</span>
                   
                </label>
                <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Text here"></textarea>
               
                </div>


                    <button className="btn bg-orange-400 text-white block mx-auto hover:bg-orange-600 drop-shadow-lg px-8 mt-5">Add Task</button>
        </form>
      </div>
    </div>
    );
};

export default TaskFrom;