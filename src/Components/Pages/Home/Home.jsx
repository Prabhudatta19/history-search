import PreSearchBrand from "../../Common/PreSearchBrand";
import SearchBar from "../../Common/SearchBar";

function Home(){
    return (
        <>
            <PreSearchBrand title={"All History"}/>
            <SearchBar type={"all"}/>
        </>
    )
}

export default Home;