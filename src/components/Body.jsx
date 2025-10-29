import { RestaruantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./Shimmerui";
import { useOnlineStatus } from "../../utils/useOnlineStatus";

export const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9699636&lng=77.67227009999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const jsonData = await data.json();
    const list = jsonData?.data?.cards
      ?.filter((dt) => {
        const hasInfo = dt?.card?.card?.info;
        return hasInfo;
      })
      ?.map((dt) => dt.card.card.info);
    setListOfRestaurants(list);
    setListRestos(list);
  };
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listRestos, setListRestos] = useState(listOfRestaurants);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListRestos(filtered);

  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return (
      <h1> looks like you are offline! please check your internet connection..... </h1>
    )
  }

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-container">
       
      <div className="filter  flex items-center">
        <div className="search m-4 p-4 flex items-center">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
          <button  className="px-4 py-2 bg-green-100  m-4 text-green-700 font-medium rounded-xl hover:bg-green-200 transition " onClick={handleSearch}>Search</button>
        </div>

        <button
          className="filter"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listRestos &&
          listRestos.map((res, index) => (
            <RestaruantCard key={index} {...res} />
          ))}
      </div>
    </div>
  );
};
