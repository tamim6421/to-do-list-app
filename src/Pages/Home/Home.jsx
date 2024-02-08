import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div className="mt-28 max-w-[1250] mx-auto">
             <Helmet>
                <title>
                    TODO App | Home
                </title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;