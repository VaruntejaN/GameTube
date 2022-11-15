import Navbar from "../Layout/Navbar";
import Sidebar from "../Layout/Sidebar";
import MainContainer from "../Layout/MainContainer";

const Home = () => {
  return (
    <div className="home flex">
      <Sidebar />
      <div className="homeContainer w-full">
        <Navbar />
        <MainContainer />
      </div>
    </div>
  );
};

export default Home;
