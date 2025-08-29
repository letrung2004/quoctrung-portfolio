import person from "../../assets/images/trung.png";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Ảnh hồ sơ */}
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
            Xin chào, tôi là
            <span className="text-nowrap shrink-0 inline-block w-full">
              Lê Quốc Trung
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Tôi là sinh viên Công nghệ Thông tin tại Trường Đại học Mở TP. Hồ Chí Minh,
            chuyên ngành Kỹ thuật Phần mềm.
          </p>
          <p className="text-base sm:text-xl font-semibold text-black mb-2">
            Mục tiêu nghề nghiệp
          </p>
          <p className="text-xs sm:text-lg font-normal text-black-400 mb-6">
            Với mong muốn trở thành một <span className="font-medium text-black">kỹ sư phần mềm</span>,
            tôi đặt mục tiêu tích lũy kinh nghiệm thực tế trước khi tốt nghiệp, học hỏi và
            hiểu rõ các quy trình làm việc thực tế, đóng góp vào các dự án của công ty,
            và phấn đấu trở thành một <span className="font-medium text-black">nhân viên chính thức toàn thời gian</span>.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Profile;
