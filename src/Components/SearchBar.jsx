import './SearchBar.css';

function SearchBar(){
    return (
        <div className="search">
            <input type="text" placeholder="Search..." className='search-box' />
        </div>
    )
}

export default SearchBar;