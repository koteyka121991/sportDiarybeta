
import Diary from "./components/Diary";
import Header from "./components/Header";

import "./scss/app.scss";


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div>
        <Diary />  
        </div>
      </div>
 
    </div>
  );
}

export default App;
