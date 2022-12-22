import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const TrainingLog = () => {
    
    return (
        <div>
            <h1>Журнал тренировок</h1>
            <div>тренровка не найдена</div>
            <Link to='/exercises'><AiFillPlusCircle  /></Link>  
        </div>
    );
}

export default TrainingLog;
