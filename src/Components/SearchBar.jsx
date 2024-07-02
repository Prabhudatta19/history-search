import './SearchBar.css';
import { useState } from 'react';
import axios from 'axios';
import config from '../config';

function SearchBar(){
    const [searchString, setSearchString] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setSearchString(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchString);
        searchUtil();
    }
    const searchUtil = async () => {
        setLoading(true);
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
        } finally {
            setLoading(false);
        }
    }
    const getMonthName = (monthNumber) => {
        const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if(monthNumber > 0 && monthNumber < 13){
            return monthNames[monthNumber];
        }
        else return "Invalid month";
    }
    const handleYear = (year) => {
        if(year < 0) return year*-1 + " BC";
        return year + " AD";
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
            {loading && (
                <h2 className='loading'>Loading...</h2>
            )}
            {results.length > 0 && !loading &&
            (<div >
                <h2 className='result-header'>Results</h2>
                <div className='results-box'>
                    {results.map((result, index) => (
                        <div key={index} className='result-box'>
                            <h4><span className='result-dates'>{result.day}</span>{' '}<span className='result-dates'>{getMonthName(parseInt(result.month))}</span>{' '}<span className='result-dates'>{handleYear(parseInt(result.year))}</span></h4>
                            <p>{result.event}</p>
                        </div>
                    ))}
                </div>
            </div>)}
        </div>
    )
}

export default SearchBar;