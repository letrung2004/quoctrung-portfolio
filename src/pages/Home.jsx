import Profile from "../components/profile/Profile";
import Portfolio from "../components/portfolio/Portfolio";
import Profession from "../components/profession/Profession";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <Portfolio />
        <Profession />
      </div>
    </div>
  );
};

export default Home;
