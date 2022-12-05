import React from 'react';
import Exercises from './Exercises';

const Categories = () => {
    const [activeIndex, setActiveIndex]=React.useState(0);
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]
    const onClickCategory =(index)=> {
        // функция клика по категориям
        setActiveIndex(index);
        console.log(index);
    }
    return (
        <div>
            <ul>
                <li className='cat'>Грудь
                    <Exercises />
                </li>
                <li onClick={()=>onClickCategory()} className='cat'>Руки</li>
                <li onClick={()=>onClickCategory()} className='cat'>Спина</li>
                <li onClick={()=>onClickCategory()} className='cat'>Ноги</li>
                <li onClick={()=>onClickCategory()} className='cat'>Плечи</li>
                <li onClick={()=>onClickCategory()} className='cat'>Корпус</li>
            </ul>



        </div>
    );
}

export default Categories;
