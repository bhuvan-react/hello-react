import { CDN_URL } from "../../utils/constants";


const cardStyle = {
  backgroundColor: "#f0f0f0",
};

export const RestaruantCard = (props) => {
  return (
    <div className="res-card" style={cardStyle}>
      <img
        className="res-logo"
        alt="food-logo"
        src={CDN_URL}
      />
      <h4>{props.name}</h4>
      <h4> {props.cuisines.map(cu => cu).join(',')} </h4>
      <h4> {props.avgRating} </h4>
      <h4> {props.sla.deliveryTime} Mins </h4>
    </div>
  );
};
