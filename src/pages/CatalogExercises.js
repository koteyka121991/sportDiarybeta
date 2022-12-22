import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';


const CatalogExercises = () => {
    return (
        <div>
            <h1>Каталог упраженений</h1>
            {/* <Categories /> */}
            <Categories/>
            <Link to='/training'><button>Назад</button></Link>

        </div>

    );
}

export default CatalogExercises;
