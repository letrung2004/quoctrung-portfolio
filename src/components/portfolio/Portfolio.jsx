import React, { useState } from 'react';
import { X, ExternalLink, Github, Eye } from 'lucide-react';

const projectData = [

  {
    "id": 2,
    "image": "https://res.cloudinary.com/derx1izam/image/upload/v1756477513/Screenshot_2025-08-29_212448_tn960t.png",
    video: "https://res.cloudinary.com/derx1izam/video/upload/v1756477408/E-Newspaper_-_Google_Chrome_2025-08-29_21-20-27_jbqedf.mp4",
    "title": "Hệ thống báo điện tử thông minh",
    "description": "Một hệ thống báo điện tử có tích hợp trí tuệ nhân tạo hỗ trợ người dùng trong việc nghe báo qua âm thanh và tóm tắt bài báo",
    "fullDescription": "Hệ thống báo điện tử thông minh được thiết kế để tối ưu hóa thời gian đọc báo cho người dùng bận rộn. Ứng dụng sử dụng AI để chuyển đổi văn bản thành giọng nói, tóm tắt nội dung tự động và cung cấp chatbot RAG để người dùng có thể hỏi đáp về nội dung bài báo. Hệ thống được xây dựng theo kiến trúc microservices với giao diện quản trị đầy đủ cho editor và admin.",
    "technologies": ["Java", "Spring Boot", "ReactJS", "TailwindCSS", "MySQL", "Kafka", "RESTful API", "Python", "AI/ML"],
    "features": [
      "Chuyển đổi text-to-speech cho bài báo",
      "Tóm tắt bài báo tự động bằng AI",
      "Chatbot RAG hỏi đáp về nội dung",
      "Editor: đăng bài, quản lý bình luận, danh mục",
      "Admin: quản lý người dùng và toàn hệ thống",
      "Kiến trúc microservices scalable",
      "Giao diện responsive trên mọi thiết bị",
      "Thống kê và analytics chi tiết"
    ],
    "link": "#!",
    "github": "https://github.com/letrung2004/e_newspaper"
  },
  {
    id: 1,
    image: "https://res.cloudinary.com/derx1izam/image/upload/v1756475731/490496425_2060119704462334_1858936691926898598_n_gmvrw4.png",
    // video: "https://res.cloudinary.com/derx1izam/image/upload/v1756475732/494359680_1210604533293194_7044057786479998932_n_gymnqs.png",
    title: "Nền tảng thương mại điện tử",
    description: "Xây dựng website bán hàng online với đầy đủ tính năng như đăng nhập thông qua Google, hỗ trợ người dùng xem tìm kiếm sản phẩm linh hoạt theo nhiều tiêu chí, giỏ hàng, thanh toán qua VnPay và quản lý theo dỏi đơn hàng. Phía người bán phá triển các tính năng như quản lý sản phẩm, đơn hàng xem báo cáo thống kê doanh thu theo tháng, quý năm",
    fullDescription: "Một nền tảng thương mại điện tử hoàn chỉnh được xây dựng phía backend bằng Java với Spring MVC và frontend bằng ReactJS. Hệ thống với đầy đủ tính năng như đăng nhập thông qua Google, hỗ trợ người dùng xem tìm kiếm sản phẩm linh hoạt theo nhiều tiêu chí, giỏ hàng, thanh toán qua VnPay và quản lý theo dỏi đơn hàng. Phía người bán phá triển các tính năng như quản lý sản phẩm, đơn hàng xem báo cáo thống kê doanh thu theo tháng, quý năm với giao diện người dùng thân thiện giúp shop quản lý kinh doanh hiệu quả. Ngoài ra còn có xây dựng các chức năng cho người quản trị của sàn để quản lý người dùng xem các báo cáo thống kê.",
    technologies: ["React", "Java", "Spring MVC", "TailwindCSS", "MySQL", "RESTful API"],
    features: [
      "Đăng nhập/đăng ký người dùng (Có đăng nhập thông qua Google)",
      "Tìm kiếm và lọc sản phẩm linh hoạt theo nhiều tiêu chí",
      "Giỏ hàng",
      "Thanh toán trực tuyến an toàn",
      "Quản lý đơn hàng",
      "Admin và Store dashboard"
    ],
    link: "#!",
    github: "https://github.com/letrung2004/ecommerce-spring-mvc-reactjs"
  },
  {
    "id": 4,
    "image": "https://res.cloudinary.com/derx1izam/image/upload/v1756474322/eba807e7-6830-4d37-83ab-c5f30564e7ec_xrqsam.jpg",
    "video": "https://res.cloudinary.com/derx1izam/video/upload/v1756474418/3449482696548163926_bld2ir.mp4",
    "title": "Hệ thống Quản Lý Học Sinh",
    "description": "Hệ thống hỗ trợ quản lý học sinh trong trường học với các chức năng tiếp nhận học sinh, lập danh sách lớp, nhập/xuất điểm, thống kê báo cáo và thay đổi quy định.",
    "fullDescription": "Dự án Python-Flask-QuanLyHocSinh là một hệ thống quản lý học sinh được phát triển nhằm hỗ trợ các hoạt động quản lý học sinh trong trường học. Dự án được xây dựng bằng ngôn ngữ Python, sử dụng Flask Framework để xử lý backend và MySQL làm cơ sở dữ liệu. Frontend được xây dựng bằng HTML, CSS, tích hợp Bootstrap, và sử dụng template từ ThemeWagon.",
    "technologies": ["Python", "Flask", "MySQL", "HTML", "CSS", "Bootstrap"],
    "features": [
      "Tiếp nhận học sinh với biểu mẫu trực quan",
      "Tự động lập danh sách lớp, hỗ trợ điều chỉnh linh hoạt",
      "Nhập điểm và xuất điểm cho từng môn học",
      "Thống kê báo cáo tổng kết với biểu đồ trực quan bằng Chart.js",
      "Quản trị thay đổi quy định: tuổi, sĩ số, môn học"
    ],
    "link": "#!",
    "github": "https://github.com/letrung2004/python-flask-student-management"
  }
  ,
  {
    "id": 3,
    "image": "https://res.cloudinary.com/derx1izam/image/upload/v1756471507/Screenshot_2025-08-29_194204_rejtbx.png",
    "video": "https://res.cloudinary.com/derx1izam/video/upload/v1756472885/API_Weather_Project_-_VideoDemo_z2ks15.mp4",
    "title": "Website dự báo thời tiết Việt Nam",
    "description": "Website dự báo thời tiết cho các tỉnh thành Việt Nam sử dụng dữ liệu thực từ OpenWeather API",
    "fullDescription": "Đây là website dự báo thời tiết được xây dựng trong quá trình tự học về API và cách tích hợp dữ liệu thực. Website hiển thị thông tin thời tiết chi tiết cho các tỉnh thành tại Việt Nam. Tôi sử dụng OpenWeather API để lấy dữ liệu thực tế, test API qua Postman, lưu dữ liệu vào file JSON và sử dụng Javascript để hiển thị thông tin lên giao diện web một cách trực quan và dễ hiểu.",
    "technologies": ["HTML", "CSS", "JavaScript", "OpenWeather API", "JSON", "Postman"],
    "features": [
      "Dự báo thời tiết cho các tỉnh thành VN",
      "Lấy dữ liệu thực từ OpenWeather API",
      "Test và xử lý API qua Postman",
      "Lưu trữ dữ liệu dạng JSON",
      "Giao diện hiển thị thông tin trực quan",
      "Responsive design cho mọi thiết bị",
      "Cập nhật thông tin thời tiết real-time",
      "Hiển thị nhiệt độ, độ ẩm, tốc độ gió"
    ],
    "link": "#!",
    "github": "https://github.com/letrung2004/weather-forecast-webapp"
  },


];

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
      onClick={() => onClick(project)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 hover:scale-110"
      />

      <div className="relative overflow-hidden">
        <div className="absolute top-3 left-3">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Eye className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300" size={32} />
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-blue-500 font-medium text-sm hover:text-blue-700 transition-colors">
            Xem chi tiết →
          </span>
          <div className="flex space-x-2">
            {project.link !== "#!" && (
              <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                <ExternalLink size={16} />
              </button>
            )}
            {project.github !== "#!" && (
              <button className="p-2 text-gray-400 hover:text-gray-700 transition-colors">
                <Github size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[10000] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>

        <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <X size={20} className="text-gray-500" />
          </button>

          <div >
            {project.video ? (
              <video
                src={project.video}
                controls
                className="w-full h-[70vh] object-cover rounded-t-2xl"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[70vh] object-cover rounded-t-2xl"
              />
            )}
          </div>

          <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              {project.title}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
              {project.fullDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-2 h-6 bg-blue-500 rounded mr-3"></span>
                  Công nghệ sử dụng
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-2 h-6 bg-green-500 rounded mr-3"></span>
                  Tính năng chính
                </h3>
                <ul className="space-y-2">
                  {project.features?.map((feature, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
              {project.link !== "#!" && (
                <button className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center">
                  <ExternalLink size={20} className="mr-2" />
                  Xem Demo
                </button>
              )}
              {project.github !== "#!" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center justify-center"
                >
                  <Github size={20} className="mr-2" />
                  Source Code
                </a>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div
        className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
        id="portfolio"
      >
        <div className="xl:mb-17.5 mb-8">
          <div className="max-sm:px-4 text-center mx-auto max-w-4xl">
            <p className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Dự Án Của Tôi
            </p>
            <p className="font-normal text-base sm:text-lg text-gray-600 leading-relaxed">
              Dưới đây là một số dự án cá nhân và nhóm mà tôi đã thực hiện trong quá trình học tập và tự học,
              thể hiện khả năng ứng dụng kiến thức vào thực tế để tạo ra các sản phẩm hữu ích.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projectData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Portfolio;