import Navbar from "../Layout/Navbar"
import Sidebar from "../Layout/Sidebar"

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="homeContainer">
                <Sidebar />
            </div>
        </div>
    )
}

export default Home
