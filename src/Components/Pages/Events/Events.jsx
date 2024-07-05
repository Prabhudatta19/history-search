import { useState } from "react";
import PreSearchBrand from "../../Common/PreSearchBrand";
import SearchBar from "../../Common/SearchBar";
import EventsResults from "./EventsResults";
import axios from "axios";

const Events = () => {
  const [results, setResults] = useState([]);
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
      setResults(response.data);
      setIsAnyResult(true);
      console.log(response);
    } catch (error) {
      console.error("Error getting search results: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isAnyResult && <PreSearchBrand title={"Historical Events"} />}
      <SearchBar type={"events"} onSearch={handleEventsSearch} />
      <EventsResults isAnyResult={isAnyResult} isLoading={loading} eventResults={results}/>
    </>
  );
};

export default Events;
