import transactions from './transactions.json';
import s from './Transactions.module.css';
const data = transactions;

const TransactionHistory = () => {
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
          {data.map(el => {
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
export default TransactionHistory;
