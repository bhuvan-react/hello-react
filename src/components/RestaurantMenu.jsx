import { useEffect } from "react";

const RestaruantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const dataJson = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=5934&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await dataJson.json();
    console.log(data, "data");
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
