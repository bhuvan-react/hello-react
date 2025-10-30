import { CDN_URL } from "../../utils/constants";

export const RestaruantCard = (props) => {
  const { name, cuisines, avgRating, sla } = props;

  return (
    <div className="m-4 p-4 w-64 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-40 object-cover rounded-lg"
        alt="restaurant logo"
        src={CDN_URL}
      />
      
      <h3 className="font-bold text-lg mt-3 line-clamp-1">{name}</h3>
      <h4 className="text-sm text-gray-600 line-clamp-1">
        {cuisines.join(", ")}
      </h4>
      <div className="flex justify-between items-center mt-2 text-sm">
        <h4 className="font-medium text-green-600">
          ★ {avgRating}
        </h4>
        <h4 className="text-gray-500">
          {sla.deliveryTime} mins
        </h4>
      </div>
    </div>
  );
};
