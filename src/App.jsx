import profilePic from "./assets/img/Jop.PP.jpg";
export default function App() {
  const data = {
    name: "DICK KHOSA",
    role: "SOFTWARE ENGINEER",
    address: "7106 NONYANI STREET, JHB, GAUTENG, 1685",
    email: "GDICKB101@GMAIL.COM",
    phone: "0792952119",
    objective:
      "Dedicated and detail-oriented Software Developer with over Three years of experience in designing, developing, and maintaining software applications. Proficient in multiple programming languages and frameworks with a strong foundation in software engineering principles. Adept at collaborating with cross-functional teams to deliver high-quality software solutions.",
    skills: [
      "Java", "Python", "JavaScript", "C#", "SQL", "Dart",
      "React", "Angular", "Spring Boot", "Flutter", "Node.js",
      "MySQL", "PostgreSQL", "MongoDB", "SQL Server",
      "Git", "Docker", "Jenkins", "Azure", "Onedev", "Jira", "Aris",
      "Agile", "Scrum", "SDLC",
      "RESTful APIs", "Microservices", "Unit Testing", "Debugging"
    ],
    experience: [
      {
        company: "MYSMARTCASH",
        role: "Software Engineer",
        period: "Jan 2024 - Present",
        bullets: [
          "Developed, Designed, and maintained critical software components within the Microsoft ecosystem.",
          "Collaborated on the development of microservices and Rest APIs.",
          "Contributed to adopting Microsoft SQL Server for efficient data management and analysis, ensuring robust performance and reliability.",
          "Leveraged Microsoft Azure DevOps and Git for version control and efficient code collaboration, facilitating seamless teamwork and streamlined development processes."
        ]
      },
      {
        company: "HASSEM PRAG",
        role: "Full-stack web developer",
        period: "Oct 2022 – Jan 2024",
        bullets: [
          "Developed and maintained web applications using Flutter NextJs frameworks (Dart, React) and backend services with Node.js and Spring Boot.",
          "Collaborated with cross-functional teams to gather requirements and design software solutions, resulting in a 40% increase in project delivery speed.",
          "Implemented RESTful APIs and integrated third-party services to enhance application functionality."
        ]
      },
      {
        company: "MECER INTER ED",
        role: "Software Developer Trainee",
        period: "Feb 2022 - Sep 2022",
        bullets: []
      }
    ],
    education: [
      {
        school: "VAAL UNIVERSITY OF TECHNOLOGY",
        credential: "N Dip Computer Engineering",
        details: "Studied Computer Systems Engineering, which combines coursework in IT and Electronics, including web development, database management, and software engineering"
      }
    ]
  };

  const styles = {
    page: {
      fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, sans-serif",
      background: "linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      display: "flex",
      background: "#fff",
      boxShadow: "0 8px 32px rgba(60, 60, 120, 0.12)",
      borderRadius: 18,
      maxWidth: 980,
      width: "100%",
      minHeight: 680,
      overflow: "hidden",
    },
    sidebar: {
      background: "linear-gradient(120deg, #6366f1 60%, #818cf8 100%)",
      color: "#fff",
      width: 280,
      padding: "40px 28px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18,
    },
    photo: {
      width: 110,
      height: 110,
      objectFit: "cover",
      borderRadius: "50%",
      border: "3px solid #fff",
      boxShadow: "0 2px 12px rgba(60,60,120,0.10)",
      marginBottom: 10,
    },
    name: { fontSize: 32, fontWeight: 700, margin: "10px 0 0" },
    role: { fontSize: 18, fontWeight: 500, margin: "6px 0 0" },
    contact: { fontSize: 15, margin: "10px 0", textAlign: "center" },
    contactIcon: { marginRight: 7, verticalAlign: "middle" },
    main: { flex: 1, padding: "40px 38px" },
    section: { marginBottom: 32 },
    h2: { fontSize: 22, color: "#6366f1", marginBottom: 12, letterSpacing: 1 },
    h3: { fontSize: 17, margin: "0 0 6px", color: "#334155" },
    text: { margin: "4px 0", color: "#334155", fontSize: 15 },
    listRow: { display: "flex", gap: 8, listStyle: "none", padding: 0, flexWrap: "wrap", margin: "10px 0" },
    pill: { background: "#eef2ff", color: "#6366f1", borderRadius: 999, padding: "6px 14px", fontWeight: 500, fontSize: 14, boxShadow: "0 1px 4px rgba(99,102,241,0.07)" },
    listCol: { margin: "6px 0", paddingLeft: 18 },
    card: { background: "#f8fafc", borderRadius: 12, padding: 18, margin: "10px 0", boxShadow: "0 2px 8px rgba(60,60,120,0.06)" },
  };

// ...existing code...
  // Simple SVG icons
  const MailIcon = () => <span style={styles.contactIcon}>&#9993;</span>;
  const PhoneIcon = () => <span style={styles.contactIcon}>&#128222;</span>;
  const LocationIcon = () => <span style={styles.contactIcon}>&#128205;</span>;

  return (
    <div style={{display:'flex',width:'100vw',minHeight:'100vh',background:'linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)',position:'relative'}}>
      <div style={{...styles.container, maxWidth:1100, width:'100%'}}>
        <aside style={styles.sidebar}>
          <img src={profilePic} alt="Profile" style={styles.photo} />
          <div style={styles.name}>{data.name}</div>
          <div style={styles.role}>{data.role}</div>
          <div style={styles.contact}><LocationIcon />{data.address}</div>
          <div style={styles.contact}><MailIcon /><a href={`mailto:${data.email}`} style={{color:'#fff',textDecoration:'underline'}}>{data.email}</a></div>
          <div style={styles.contact}><PhoneIcon />{data.phone}</div>
          <a href="https://github.com/lickuy/dickKhosa" target="_blank" rel="noopener" style={{color:'#fff',textDecoration:'underline',marginTop:10,fontWeight:600,fontSize:15}}>GitHub Profile</a>
          <a href="https://www.linkedin.com/in/dick-khosa/" target="_blank" rel="noopener" style={{color:'#fff',textDecoration:'underline',marginTop:6,fontWeight:600,fontSize:15}}>LinkedIn Profile</a>
        </aside>
        <main style={styles.main}>
          <section style={styles.section}>
            <h2 style={styles.h2}>Objective</h2>
            <p style={styles.text}>{data.objective}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>Skills & Abilities</h2>
            <ul style={styles.listRow}>
              {data.skills.map((s) => (
                <li key={s} style={styles.pill}>{s}</li>
              ))}
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>Experience</h2>
            {data.experience.map((e) => (
              <div key={e.company + e.role} style={styles.card}>
                <h3 style={styles.h3}>{e.role} — {e.company}</h3>
                <p style={styles.text}><strong>{e.period}</strong></p>
                {e.bullets.length > 0 && (
                  <ul style={styles.listCol}>
                    {e.bullets.map((b, i) => <li key={i} style={styles.text}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>Education</h2>
            {data.education.map((ed) => (
              <div key={ed.school} style={styles.card}>
                <h3 style={styles.h3}>{ed.school}</h3>
                <p style={styles.text}>{ed.credential}</p>
                <p style={styles.text}>{ed.details}</p>
              </div>
            ))}
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>References</h2>
            <p style={styles.text}>Available Upon Request.</p>
          </section>
        </main>
      </div>
  {/* Removed right panel with IDE icons and dotted line for mobile compatibility */}
    </div>
  );
}
