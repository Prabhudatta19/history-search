import './SearchBar.css';
import { useState } from 'react';

function SearchBar(props){
    const [searchString, setSearchString] = useState('');

    const handleInputChange = (e) => {
        setSearchString(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchString);
        props.onSearch(searchString);
    }

    return (
        <div>
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchString} 
                        onChange={handleInputChange}
                        className='search-box' 
                    />
                    <button type="submit" className='search-button'>🔍</button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;