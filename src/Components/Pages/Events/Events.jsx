import { useState } from "react";
import PreSearchBrand from "../../Common/PreSearchBrand";
import SearchBar from "../../Common/SearchBar";
import EventsResults from "./EventsResults";
import config from "../../../config";
import axios from "axios";

const Events = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleEventsSearch = async (searchString) => {
    setLoading(true);
    try {
      const apiKey = config.apiKey;
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/historicalevents?text=${searchString}`,
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );
      setResults(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error getting search results: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PreSearchBrand title={"Historical Events"} />
      <SearchBar type={"events"} onSearch={handleEventsSearch} />
      <EventsResults isLoading={loading} results={results}/>
    </>
  );
};

export default Events;
