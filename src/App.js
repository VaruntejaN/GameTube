import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FetchProvider } from "./context/FetchContext";

const App = () => {
  return (
    <FetchProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </FetchProvider>
  );
};

export default App;
