import person from "../../assets/images/trung.png";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src="https://res.cloudinary.com/derx1izam/image/upload/v1756471507/trung_xuwhmy.png"
              alt=""
            />
          </div>

          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Le Quoc Trung
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a Computer Science student at Ho Chi Minh City Open University,
            specializing in Software Engineering.
          </p>
          <p className="text-base sm:text-xl font-semibold text-black mb-2">
            My Career Objective
          </p>
          <p className="text-xs sm:text-lg font-normal text-black-400 mb-6">
            Aspiring to become a <span className="font-medium text-black">software engineer</span>,
            I aim to gain hands-on experience before graduation, learn and
            understand real-world workflows, contribute to company projects,
            and strive to become a <span className="font-medium text-black">full-time employee</span>.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Profile;
