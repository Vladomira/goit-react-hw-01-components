import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import generateRandomColor from './colorGenerator';

const Statistic = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.stat__list}>
          {stats.map(el => {
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

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistic;
