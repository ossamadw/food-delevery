import { NavLink } from "react-router-dom";

const FoodImage = ({id , src , alt , className}) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-slate-50">
      <div className={` flex items-center overflow-hidden ${className}`}>
        <NavLink to={`/product/${id}`}>
          <img
            src={src}
            alt={alt}
            className="w-full h-full hover:scale-105 transition-all"
            loading="lazy"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default FoodImage;
