import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FetchProvider } from "./context/FetchContext";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import MainContainer from "./Layout/MainContainer";
import GameDetails from "./components/GameDetails";

const App = () => {
  return (
    <FetchProvider>
      <div className="home flex">
        <Sidebar />
        <div className="homeContainer w-full ml-64">
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<MainContainer />} />
                <Route path="/gameDetails" element={<GameDetails />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      {/* <div className="App">
        
      </div> */}
    </FetchProvider>
  );
};

export default App;
