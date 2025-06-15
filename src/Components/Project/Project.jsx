import "./Project.css";

const projects = [
  {
    name: "Portfolio Website",
    image: "portfolio.webp",
    link: "https://sunidk.github.io/sunil-portfolio/",
    github: "https://github.com/sunidk/sunil-portfolio",
  },
  {
    name: "JSON Converter",
    image: "jsonconverter.webp",
    link: "https://sunidk.github.io/json-converter/",
    github: "https://github.com/sunidk/json-converter",
  },
  {
    name: "Shopping App",
    image: "shopping.webp",
    link: "https://sunidk.github.io/shoppingapp/",
    github: "https://github.com/sunidk/shoppingapp",
  },
  {
    name: "Netflix",
    image: "netflix.webp",
    link: "https://sunidk.github.io/netflix/",
    github: "https://github.com/sunidk/netflix",
  },
  {
    name: "JWT Authentication",
    image: "jwt.webp",
    link: "#",
    github: "https://github.com/sunidk/jwt-authentication",
  },
  {
    name: "Redis Caching",
    image: "redis.webp",
    link: "#",
    github: "https://github.com/sunidk/redis-caching",
  },
  {
    name: "Email OTP Verification",
    image: "email_otp.webp",
    link: "#",
    github: "https://github.com/sunidk/email-otp-verification",
  },
  {
    name: "Mobile OTP Verification",
    image: "mobile_otp.webp",
    link: "#",
    github: "https://github.com/sunidk/mobile-otp-verification",
  },
];

function Project() {
  return (
    <div className="projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={require(`../../Images/${project.image}`)}
              alt={project.name}
              className="project-icon"
              loading="lazy"
            />
            <p>{project.name}</p>
            <div className="project-buttons">
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
