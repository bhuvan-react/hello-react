import { RestaruantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./Shimmerui";

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
  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-container">
       
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
          <button onClick={handleSearch}>Search</button>
        </div>

        <button
          className="filter-btn"
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
