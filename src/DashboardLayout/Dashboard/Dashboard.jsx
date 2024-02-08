
import { NavLink, Outlet } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth()
  return (
    <div className="flex flex-col  md:flex-row">
      <div className="flex-[1] md:w-[190px]  md:fixed md:z-10 md:h-[100vh]  bg-base-100 shadow-lg">
        <div className="h-[180px] bg-green-500 p-2 pt-10">
          <div className="avatar flex justify-center items-center ">
            <div className="w-20 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
          <p className="text-white text-lg font-semibold text-center">{user?.displayName}</p>
        </div>
        <ul className="px-5 pl-20 md:pl-10 space-y-10 mt-10 mb-4 text-center">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "  font-bold text-green-500 text-lg"
                  : "text-gray-600 "
              }
            >
              <p className="flex gap-2">
                <MdSpaceDashboard  className="text-2xl"></MdSpaceDashboard>
                <p> Dashboard</p>
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-500 text-lg  font-semibold"
                  : "hover:bg-green-100 hover:text-green-500  text-lg"
              }
            >
             <p className="flex gap-2">
                <GoHomeFill   className="text-2xl"></GoHomeFill>
                <p> Home</p>
              </p>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-[5]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
