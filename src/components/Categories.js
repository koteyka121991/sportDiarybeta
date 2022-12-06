import React from 'react';
import Exercises from './Exercises';

const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const categories = [
        'Руки',
        'Спина',
        'Ноги',
        'Плечи',
        'Корпус'
    ]
    return (
        <div>
            <ul>
                {categories.map((item, i) => (
                    <li onClick={() => setActiveIndex(i)} className={activeIndex === i ? 'active' : ''}>{item}
                        <ul><Exercises /></ul>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Categories;



