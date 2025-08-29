import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Phát triển Frontend",
    description:
      "ReactJS, Tailwind CSS, JavaScript. Có kinh nghiệm xây dựng giao diện người dùng responsive, kiến trúc dựa trên component, và quản lý state.",
  },
  {
    id: 2,
    title: "Phát triển Backend",
    description:
      "Java Spring MVC/Spring Boot để xây dựng RESTful APIs. Có kiến thức về xác thực, phân quyền và làm việc với cơ sở dữ liệu quan hệ.",
  },
  {
    id: 3,
    title: "Cơ sở dữ liệu & Công cụ",
    description:
      "MySQL, MongoDB. Thành thạo Git/GitHub để quản lý phiên bản, Postman để kiểm thử API, và Docker để container hóa ứng dụng.",
  },
  {
    id: 4,
    title: "Kỹ năng khác",
    description:
      "Hiểu biết về OOP và nguyên tắc SOLID, làm việc nhóm, khả năng học nhanh, và tích hợp mô hình AI/ML bằng Python vào ứng dụng web.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="skills"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">
          Kỹ năng & Công nghệ
        </p>

        {/* Kỹ năng */}
        <div className="mt-6 text-[14px]">
          <p className="text-base sm:text-xl font-semibold text-black mb-2">
            Kỹ năng & Công nghệ
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Có kiến thức và kinh nghiệm trong phát triển web full-stack, bao gồm
            frontend, backend, cơ sở dữ liệu và các công cụ cho lập trình viên.
            Tập trung vào khả năng mở rộng, hiệu suất và thực hành viết code sạch.
          </p>
        </div>
      </div>

      <div>
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
