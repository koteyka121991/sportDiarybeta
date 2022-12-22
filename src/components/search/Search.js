import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';


const Search = () => {
 const[searchOpen, setSearchOpen] = React.useState(false);

    return (
        
        <div>

          <BiSearchAlt onClick={() => setSearchOpen(!searchOpen)} />
     
{searchOpen && (
  <input placeholder='Поиск...'></input>
)}
        </div>
    );
}

export default Search;
