import PreSearchBrand from "../../Common/PreSearchBrand";
import SearchBar from "../../Common/SearchBar";
import EventsResults from "../Events/EventsResults";
import axios from "axios";
import { useState } from "react";
import FiguresResults from "../Figures/FiguresResults";

function Home(){
    const [eventResults, setEventResults] = useState([]);
    const [figuresResults, setFiguresResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isAnyResult, setIsAnyResult] = useState(false);


    const handleEventsSearch = async (searchString) => {
        setLoading(true);
        try {
        const apiKey = import.meta.env.apiKey;
        const response = await axios.get(
            `https://api.api-ninjas.com/v1/historicalevents?text=${searchString}`,
            {
            headers: {
                "X-Api-Key": apiKey,
            },
            }
        );
        setEventResults(response.data);
        setIsAnyResult(true)
        console.log(response);
        } catch (error) {
        console.error("Error getting search results: ", error);
        } 
        try{
            const apiKey = config.apiKey;
            const response = await axios.get(
              `https://api.api-ninjas.com/v1/historicalfigures?name=${searchString}`,
              {
                headers: {
                  "X-Api-Key": apiKey,
                },
              }
            );
            setFiguresResults(response.data);
            setIsAnyResult(true);
            console.log(response);
          } catch (e) {
            console.error("Error getting search results: ", e);    
          } finally {
            setLoading(false)
          }
    };
    return (
        <>
            {!isAnyResult && <PreSearchBrand title={"All History"}/>}
            <SearchBar type={"all"} onSearch={handleEventsSearch}/>
            <EventsResults isAnyResult={isAnyResult} isloading={loading} eventResults={eventResults}/>
            <FiguresResults isAnyResult={isAnyResult} isloading={loading} figuresResults={figuresResults}/>
        </>
    )
}

export default Home;