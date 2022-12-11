import Categories from "./components/Categories";
import Diary from "./components/Diary";
import Header from "./components/Header";
import Test from "./components/Test";
import "./scss/app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Diary />
        {/* <Categories /> */}
        {/* <Test /> */}
      </div>
      {/* <Routes>
        
      </Routes> */}
    </div>
  );
}

export default App;
