import Item from './Item.js';
import './Transaction.css';

function Transaction(props) {
  const {items} = props;
  return (
    <div>
      <ul className="item_list">
        {items.map((element) => {
          return <Item title={element.title} amount={element.amount} key={element.id}/>
        })}
      </ul>
    </div>
  );
}

export default Transaction;
