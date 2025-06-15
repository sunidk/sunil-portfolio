import "./Skills.css";

const skills = [
  { name: "Node.js", icon: "nodejs.webp" },
  { name: "Express.js", icon: "expressjs.webp" },
  { name: "NestJS", icon: "nestjs.webp" },
  { name: "PostgreSQL", icon: "postgresql.webp" },
  { name: "Redis", icon: "redis.webp" },
  { name: "JWT Auth", icon: "jwt.webp" },
  { name: "Git", icon: "git.webp" },
  { name: "Keycloak", icon: "keyloack.webp" },
  { name: "Swagger", icon: "swagger.webp" },
  { name: "React.js", icon: "reactjs.webp" },
  { name: "HTML5", icon: "html5.webp" },
  { name: "CSS3", icon: "css3.webp" },
  { name: "JavaScript", icon: "javascript.webp" },
  { name: "Jira", icon: "jira.webp" },
  { name: "Jenkins", icon: "jenkins.webp" },
  { name: "Docker", icon: "docker.webp" },
  { name: "GitLab", icon: "gitlab.webp" },
  { name: "Bitbucket", icon: "bitbucket.webp" },
  { name: "Postman", icon: "postman.webp" },
  { name: "Prisma ORM", icon: "prisma_orm.webp" },
  { name: "AWS", icon: "aws.webp" },
  { name: "GCP", icon: "GCP.webp" },
  { name: "VS Code", icon: "vscode.webp" },
  { name: "Firebase", icon: "firebase.webp" },
];

function Skills() {
  return (
    <div className="skills">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-card"
            style={{ "--delay": `${index * 0.07}s` }}
          >
            <img
              src={require(`../../Images/${skill.icon}`)}
              alt={skill.name}
              className="skill-icon"
              loading="lazy"
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
