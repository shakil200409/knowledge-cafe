import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 md:mx-4 border-b-2">
      <h1 className="text-2xl md:text-3xl font-semibold">Knowledge Cafe</h1>
      <img className="w-10" src={profile} alt="Profile" />
    </header>
  );
};

export default Header;
