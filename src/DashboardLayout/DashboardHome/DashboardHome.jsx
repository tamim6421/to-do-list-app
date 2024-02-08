
import { useContext, useEffect, useState } from "react";




import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import useAuth from "../../Hooks/useAuth";
import CreateTask from "../CreateTask/CreateTask";
import ListTask from "../CreateTask/ListTask";

const DashboardHome = () => {
    const {user} = useAuth()
    const [tasks, setTasks] = useState([])
    // console.log('tasks',tasks)

    useEffect( () =>{
        const myTask = JSON.parse(localStorage.getItem("tasks") )
        const filterTask = myTask?.filter(task => task.email === user?.email)

        // console.log(filterTask)
        setTasks(filterTask)
        
    } ,[user?.email])
  
    return (

        <DndProvider backend={HTML5Backend}>
             <div className="md:pl-56 mx-auto mb-20 bg-slate-50 ">
            {/* <TaskFrom></TaskFrom> */}
        

            <div className="flex flex-col items-center justify-center pt-4">
                <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
                <ListTask tasks={tasks} setTasks={setTasks} ></ListTask>
            </div>
        </div>
        </DndProvider>
       
    );
};

export default DashboardHome;
  
  
  

