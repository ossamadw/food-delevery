import { NavLink } from "react-router-dom";

const Home = () => {

  
  return (
    <section className="p-2 md:p-10 bg-backgroundColor">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 ">
        {/* Text Content */}
        <div className="space-y-6 order-2 lg:order-1 text-start ">
          <div className="space-y-1 md:space-y-2">
            <span className="font-semibold text-accentColor">
              Your Hunger, Our Mission
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-secondaryColor">
              Fast. Fresh. Delivered.
            </h1>
          </div>
          <p className="md:text-lg text-textColor">
            Delicious meals ready to go when hunger strikes.
          </p>

          <NavLink
            to="/menu"
            className="inline-block w-fit px-6 py-2 border-2 border-primaryColor hover:bg-primaryColor text-primaryColor hover:text-white font-semibold rounded transition duration-200"
          >
            View Menu
          </NavLink>
        </div>

        {/* Image */}
        <figure className="order-1 lg:order-2 overflow-hidden rounded">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/067/750/083/small_2x/cheerful-african-american-guy-posing-with-burger-gesturing-okay-sign-smiling-to-camera-standing-on-yellow-studio-background-black-man-approving-junk-food-taste-photo.jpg"
            alt="Delicious food delivery illustration"
            className="w-full rounded hover:scale-105 transition-all"
          />
        </figure>
      </div>
    </section>
  );
};

export default Home;
