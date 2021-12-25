import styles from './container.module.css';

export function Section({ children, title }) {
  return (
    <section className={styles.container}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
