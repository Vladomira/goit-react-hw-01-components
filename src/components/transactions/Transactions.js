import PropTypes from 'prop-types';
import s from './Transactions.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={s.container}>
      <table className={s.transaction__history}>
        <thead>
          <tr>
            <th className={s.header}>Type</th>
            <th className={s.header}>Amount</th>
            <th className={s.header}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(el => {
            const { id, type, amount, currency } = el;
            return (
              <tr key={id}>
                <td className={s.data}>{type}</td>
                <td className={s.data}>{amount}</td>
                <td className={s.data}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;
