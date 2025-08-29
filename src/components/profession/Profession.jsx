import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "ReactJS, Tailwind CSS, JavaScript. Experienced in building responsive UIs, component-based architecture, and state management.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Java Spring MVC/Spring Boot for building RESTful APIs. Knowledge of authentication, authorization, and working with relational databases.",
  },
  {
    id: 3,
    title: "Databases & Tools",
    description:
      "MySQL, MongoDB. Proficient with Git/GitHub for version control, Postman for API testing, and Docker for containerization.",
  },
  {
    id: 4,
    title: "Other Skills",
    description:
      "Understanding of OOP and SOLID principles, teamwork, fast learner, and integrating AI/ML models with Python into web applications.",
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
          Skills & Tech Stack
        </p>

        {/* Career Objective */}
        <div className="mt-6 text-[14px]">
          {/* <p className="text-base sm:text-xl font-semibold text-black mb-2">
            Career Objective
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-6">
            Aspiring to become a <span className="font-medium text-black">software engineer</span>,
            I aim to gain hands-on experience before graduation, learn and
            understand real-world workflows, contribute to company projects,
            and strive to become a <span className="font-medium text-black">full-time employee</span>.
          </p> */}

          {/* Skills */}
          <p className="text-base sm:text-xl font-semibold text-black mb-2">
            Skills & Tech Stack
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Knowledge and experience in full-stack web development, including
            frontend, backend, databases, and developer tools. Focused on
            scalability, performance, and clean coding practices.
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
