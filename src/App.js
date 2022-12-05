import Categories from './components/Categories';
import Header from './components/Header';
import './scss/app.scss'

function App() {
  return (
    <div className="wrapper">
      <div className='container'>
     <Header />
     <Categories />
     </div>
    </div>
  );
}

export default App;
