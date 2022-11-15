import Navbar from "../Layout/Navbar";
import Sidebar from "../Layout/Sidebar";
import MainContainer from "../Layout/MainContainer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer flex">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
};

export default Home;
