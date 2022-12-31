import PropTypes from 'prop-types';
import './Item.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Item({ title, amount }) {
  const status = amount < 0 ? "expense":"income";
  const symbol = amount < 0 ? "-":"+";
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  useEffect(() => {
    AOS.init({duration:2000})
  }, []);
  return (
    <li className={status} data-aos="fade-down">{title} <span>{symbol} {formatNumber(Math.abs(amount))}</span></li>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number
}

export default Item;