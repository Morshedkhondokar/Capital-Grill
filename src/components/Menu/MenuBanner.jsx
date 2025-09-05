const MenuBanner = () => {
  return (
    <div className="h-[400px] bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5)),url('https://img.freepik.com/free-photo/mini-burgers-plate-served-plate-amidst-lively-gathering-friends_157027-3151.jpg?semt=ais_hybrid&w=740')]">
      <div className=" flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl md:text-7xl font-bold text-center heading-font  animate__animated animate__slideInLeft">Explore Our </h1>
        <h2 className="text-6xl md:text-7xl font-bold text-center heading-font text-yellow-500  animate__animated animate__slideInRight">Delicious Menu</h2>
      </div>
    </div>
  );
};

export default MenuBanner;
