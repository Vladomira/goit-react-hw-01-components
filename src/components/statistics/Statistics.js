import statisticalData from './statistics.json';
import styles from './Statistics.module.css';
const data = statisticalData;

function generateRandomColor() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = '0' + color;
  }
  return '#' + color;
}

const Statistic = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.stat__list}>
          {data.map(el => {
            const { label, id, percentage } = el;
            return (
              <li
                className={styles.item}
                key={id}
                style={{ backgroundColor: generateRandomColor() }}
              >
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}> {percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Statistic;
