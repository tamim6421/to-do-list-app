import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import image from '../../assets/task.svg'

const CreateTask = ({tasks, setTasks}) => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit ,reset } = useForm();
 
    const navigate = useNavigate()

     const [task, setTask] = useState({
    title: '',
    priority: '',
    deadline: '',
    description: '',
    email:''
  });

//   console.log(task)


    const onSubmit = async (data) => {
        console.log(data);
        setTask({
            title: data.title,
            priority: data.priority,
            deadline: data.deadline,
            description: data.description,
            email:user?.email
          });

     
          
            // now send the menu item data send the database 
            const taskItem = {
                title: data.title,
                priority: data.priority,
                deadline: data.deadline,
                description: data.description,
                email: user?.email,
                userName: user?.displayName,
                photo: user?.photoURL ,
                status: 'todo',
                
            }

            setTasks((prevTasks) => {
                // Ensure that prevTasks is an array, or initialize as an empty array
                const currentTasks = Array.isArray(prevTasks) ? prevTasks : [];
              
                const newList = [...currentTasks, taskItem];
                localStorage.setItem("tasks", JSON.stringify(newList));
                return newList;
              });
              reset();

              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Task added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            
            
            // setTasks([taskItem])
           
          //   send data to the database 
        //     const taskResponse = await axiosPublic.post('/task', taskItem)
        //     console.log(taskResponse.data)
        //     if(taskResponse.data.insertedId){
        //         reset()
        //         //show success popup
        //         Swal.fire({
        //           position: "top-center",
        //           icon: "success",
        //           title: ` Task added Successful`,
        //           showConfirmButton: false,
        //           timer: 1500
        //         });
        //        navigate('/dashboard')
       
        // }
      };
    

    return (
        <div>
                 <div className=" bg-green-50 py-5 pt-10 mb-10 ">
        <h1 className="text-center text-orange-400 text-3xl font-bold drop-shadow-xl ">Added Your Task</h1>

        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <img src={image} className="max-w-sm rounded-lg " />
    <div>
    <div className=" mx-auto ">
        <form className="shadow-xl rounded-lg p-3 " onSubmit={handleSubmit(onSubmit)}>

         

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-gray-500 font-semibold"> Task Title</span>
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
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-gray-500 font-semibold">Task Priority</span>
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

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-gray-500 font-semibold">Task Deadline</span>
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
                    <span className="label-text text-gray-500 font-semibold">Task Description</span>
                   
                </label>
                <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Text here"></textarea>
               
                </div>


                    <button className="btn bg-orange-400 text-white block mx-auto hover:bg-orange-600 drop-shadow-lg px-8 mt-5">Add Task</button>
        </form>
      </div>
    </div>
  </div>
</div>
    
    </div>
        </div>
    );
};

export default CreateTask;