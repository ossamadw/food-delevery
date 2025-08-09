import { NavLink } from "react-router-dom";

const FoodImage = ({ id, src, alt, className }) => {
  return (
    <div className={`overflow-hidden rounded-2xl bg-slate-50 ${className}`}>
      <NavLink to={`/product/${id}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-48 sm:h-56 md:h-64 lg:h-96 object-cover hover:scale-105 transition-transform duration-300"
        />
      </NavLink>
    </div>
  );
};

export default FoodImage;
