import styles from "./styles.module.css";

export default function TeamSection(): React.ReactElement {
  const members = [
    { name: "Fernanda Sousa Campos", role: "Front-End / UI-UX", image: "/img/group/fernanda.jpg" },
    { name: "Pedro Augusto Carreteiro", role: "Back-End / Banco de Dados", image: "/img/group/pedro.jpg" },
    { name: "Pietra Caracco Ruiz", role: "Front-End / UI-UX", image: "/img/group/pietra.jpg" },
    { name: "Samuel Miller Soares", role: "Back-End / Banco de Dados", image: "/img/group/samuel.jpg" },
  ];

  return (
    <section className={styles.teamSection}>
      <div className="container">
        <h2 className="sectionTitle">Time do Projeto</h2>
        <div className={styles.teamGrid}>
          {members.map((m) => (
            <div key={m.name} className={styles.teamCard}>
              <div className={styles.teamAvatar}>
                {m.image ? (
                  <img src={m.image} alt={m.name} />
                ) : (
                  <div className={styles.avatarPlaceholder}>
                    {m.name.charAt(0)}
                  </div>
                )}
              </div>
              <strong>{m.name}</strong>
              <span className={styles.teamRole}>{m.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
