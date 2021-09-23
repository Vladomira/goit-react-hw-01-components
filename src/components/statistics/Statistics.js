import statisticalData from './statistics.json';

const data = statisticalData;

const Statistic = (title, stats) => {
  const isExist = true;
  return (
    <section className="statistics">
      <h2 className="title"> {isExist && 'Upload stats'}</h2>

      <ul className="stat-list">
        {data.map(el => {
          const { label, id, percentage } = el;
          return (
            <li className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage"> {percentage}%</span>
            </li>
          );
        })}
        {/* <li className="item">
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li> */}
        {/* <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li> */}
      </ul>
    </section>
  );
};

export default Statistic;
