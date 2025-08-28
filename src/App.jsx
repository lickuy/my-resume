import profilePic from "./assets/img/Jop.PP.jpg";
export default function App() {
  // Responsive layout: stack sidebar above main on small screens
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 700 : false;
  const pageStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    width: '100vw',
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)',
    position: 'relative',
    alignItems: isMobile ? 'stretch' : 'center',
    justifyContent: 'center',
  };
  const containerStyle = {
    ...styles.container,
    maxWidth: 1100,
    width: '100%',
    flexDirection: isMobile ? 'column' : 'row',
    minHeight: isMobile ? 'auto' : 680,
    borderRadius: isMobile ? 0 : 18,
    boxShadow: isMobile ? 'none' : styles.container.boxShadow,
  };
  const sidebarStyle = {
    ...styles.sidebar,
    width: isMobile ? '100%' : 280,
    padding: isMobile ? '24px 12px' : '40px 28px',
    borderRadius: isMobile ? '0 0 18px 18px' : '18px 0 0 18px',
  };
  const mainStyle = {
    ...styles.main,
    padding: isMobile ? '24px 12px' : '40px 38px',
  };
  // Simple SVG icons
  const MailIcon = () => <span style={styles.contactIcon}>&#9993;</span>;
  const PhoneIcon = () => <span style={styles.contactIcon}>&#128222;</span>;
  const LocationIcon = () => <span style={styles.contactIcon}>&#128205;</span>;

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <aside style={sidebarStyle}>
          <img src={profilePic} alt="Profile" style={styles.photo} />
          <div style={styles.name}>{data.name}</div>
          <div style={styles.role}>{data.role}</div>
          <div style={styles.contact}><LocationIcon />{data.address}</div>
          <div style={styles.contact}><MailIcon /><a href={`mailto:${data.email}`} style={{color:'#fff',textDecoration:'underline'}}>{data.email}</a></div>
          <div style={styles.contact}><PhoneIcon />{data.phone}</div>
          <a href="https://github.com/lickuy/dickKhosa" target="_blank" rel="noopener" style={{color:'#fff',textDecoration:'underline',marginTop:10,fontWeight:600,fontSize:15}}>GitHub Profile</a>
          <a href="https://www.linkedin.com/in/dick-khosa/" target="_blank" rel="noopener" style={{color:'#fff',textDecoration:'underline',marginTop:6,fontWeight:600,fontSize:15}}>LinkedIn Profile</a>
        </aside>
        <main style={mainStyle}>
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
    </div>
                </div>
              ))}
            </section>
            <section style={styles.section}>
              <h2 style={styles.h2}>References</h2>
              <p style={styles.text}>Available Upon Request.</p>
            </section>
          </main>
        </div>
      </div>
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
