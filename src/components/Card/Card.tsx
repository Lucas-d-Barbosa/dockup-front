import styles from "./Card.module.css";
type CardProps = {
  title: string;
  descricao: string;
  icon: React.ReactNode;
};
export function Card({ icon, title, descricao }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p className={styles.description}>{descricao}</p>
    </div>
  );
}
