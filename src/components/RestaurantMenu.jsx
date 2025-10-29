import { useEffect } from "react";

const RestaruantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=65075&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json, "data");
  };

  return (
    <div className="menu">
      <h2>Name of the Restaurant</h2>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaruantMenu;
