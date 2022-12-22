import React from 'react';
import Search from './search/Search';


const Header = () => {
    return (
        <div className='header'>
            <div>Упражнения</div>
            <Search />
        </div>
    );
}

export default Header;
