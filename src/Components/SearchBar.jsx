import './SearchBar.css';
import { useState } from 'react';
import axios from 'axios';
import config from '../config';

function SearchBar(){
    const [searchString, setSearchString] = useState('');
    const [results, setResults] = useState([]);

    const handleInputChange = (e) => {
        setSearchString(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchString);
        searchUtil();
    }
    const searchUtil = async () => {
        try {
            const apiKey = config.apiKey;
            const response = await axios.get(`https://api.api-ninjas.com/v1/historicalevents?text=${searchString}`, {
                headers: {
                    'X-Api-Key' : apiKey
                }
        });
            setResults(response.data);
            console.log(response)
        } catch (error){
            console.error('Error getting search results: ', error);
        }
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
                    <button type="submit">Search</button>
                </form>
                
            </div>
            <div>
                {results.map((result, index) => (
                    <div key={index}>
                        <h3>Year: {result.year}, Day: {result.day},  Month: {result.month} </h3>
                        <p>{result.event}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchBar;