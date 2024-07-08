import SearchBar from "../../Common/SearchBar";
import PreSearchBrand from "../../Common/PreSearchBrand";
import axios from "axios";
import FiguresResults from "./FiguresResults";
import { useState } from "react";

const Figures = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAnyResult, setIsAnyResult] = useState(false);

  
  const handleFiguresSearch = async (searchString) => {
    setLoading(true);
    try{
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/historicalfigures?name=${searchString}`,
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );
      setResults(response.data);
      setIsAnyResult(true);
      console.log(response);
    } catch (e) {
      console.error("Error getting search results: ", e);    
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      {!isAnyResult && <PreSearchBrand title={"Historical Figures"}/>}
      <SearchBar type={"figures"} onSearch={handleFiguresSearch}/>
      <FiguresResults isAnyResult={isAnyResult} isloading={loading} figuresResults={results}/>
    </>
  )
}

export default Figures;