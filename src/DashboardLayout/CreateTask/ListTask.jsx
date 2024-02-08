/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";


const ListTask = ({tasks, setTasks}) => {
    const [todos, setTodos] = useState([])
    const [ongoing,setOngoing] = useState([])
    const [completed, setCompleted] = useState([])


    useEffect( () =>{

        const filterTodo = tasks?.filter(task => task.status == 'todo')
        const filterOngoing = tasks?.filter(task => task.status == 'ongoing')
        const filterComplete = tasks?.filter(task => task.status == 'complete')
        setTodos(filterTodo)
        setOngoing(filterOngoing)
        setCompleted(filterComplete)

    } ,[tasks])

    const statuses = ['todo', 'ongoing', 'complete']



    return (
        <div>
            
            <div className="flex gap-20 flex-col md:flex-row">
                {
                    statuses.map( (status, index) => <Section key={index} status={status} tasks ={tasks} setTasks = {setTasks} todos = {todos} ongoing = {ongoing} completed = {completed}>

                    </Section> )
                }
            </div>
        </div>
    );
};

export default ListTask;

const Section = ({status, tasks, setTasks, todos, ongoing, completed}) =>{
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.title),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

    let text = "Todo"
    let bg = "bg-orange-400"
    let tasksToMap = todos

    if(status == 'ongoing'){
        text = " Ongoing"
        bg = 'bg-blue-500'
        tasksToMap = ongoing
    }
    if(status == 'complete'){
        text = " Complete"
        bg = 'bg-green-500'
        tasksToMap = completed
    }

    const addItemToSection = (title) =>{
        // console.log("drop", title, status)
        setTasks(prev => {
            const modifiedTask = prev?.map(task => {
                if(task.title == title){
                    return {...task, status: status}
                }
                return task
            })
            localStorage.setItem("tasks", JSON.stringify(modifiedTask))
            
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Task Stage Changed",
                showConfirmButton: false,
                timer: 1500,
              });
            
            return modifiedTask
        })
    }

    return <>
        <div ref={drop} className={` w-64  ${isOver ? "bg-slate-200" : ""}`}>
           <Header text = {text} bg = {bg} count={tasksToMap?.length}></Header> 
           {
            tasksToMap?.length > 0 && tasksToMap?.map( (task, index) => <Task key={index} index={index} task={task} tasks={tasks} setTasks = {setTasks} ></Task> )
           }
        </div>
    </>
}

const Header = ({text, bg, count}) =>{
    return (
        <div>
           <div className={` ${bg} flex items-center  h-10 uppercase rounded-md font-semibold text-white px-3`} >{text}  <div className="ml-5 bg-red-500 w-5 h-5 text-white text-center font-semibold rounded-full flex items-center justify-center">{count}</div> </div>
        </div>
    )
 
}

const Task = ({task, tasks, setTasks}) =>{

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {title: task.title},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

      console.log(isDragging)


    const handelRemove = (dead) =>{
        // console.log(dead)
      
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                const filterTask = tasks?.filter(task => task.title !== dead)
                localStorage.setItem("tasks", JSON.stringify(filterTask))
                setTasks(filterTask)
              Swal.fire({
                title: "Deleted!",
                text: "Task deleted.",
                icon: "success"
              });
            }
          });
    }
    return (
        <div ref={drag} className={`p-3 mt-8 shadow-md bg-slate-200 text-gray-500 space-y-4 rounded-md ${isDragging? "opacity-25" : "opacity-100"} text-center  cursor-grab`}>
          <p className="text-gray-500 font-bold text-xl">{task.title}</p>
          <hr className="border-orange-500 my-3" /> 
          <div className="flex items-center gap-2 justify-center">
            <p className="text-gray-500 text-xl">Priority: </p>
            <p className="badge bg-green-500 text-white" >{task.priority}</p>
          </div>
          <div>
            <p >
              <span className="text-lg text-gray-600 font-semibold" > Description : </span>
            
            <span>{task.description}</span>
             </p>
          </div>
            <p className="text-lg font-bold">DeadLine : <span className="text-sm">{task.deadline}</span></p>

          <div>
          <button
          onClick={() => handelRemove(task.title)}
          className="  mt-3 mr-3 bg-red-200 rounded-lg drop-shadow-md p-2" >
          
            <MdDelete className="text-2xl text-red-500 "></MdDelete>
            </button>
            <button className="p-2 bg-green-200 rounded-lg drop-shadow-md  ">
                <MdEdit className="text-2xl text-green-500"></MdEdit>
            </button>
          </div>
        </div>
    )
 
}