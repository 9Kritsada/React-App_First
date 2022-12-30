import DataContext from "../data/DataContext";
import { useContext } from "react";
import './ReportComponent.css';

function ReportComponent() {
  const {income, expense} = useContext(DataContext)
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <div>
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h2>{formatNumber((income-expense).toFixed(2))}</h2>
      <div className="report-container">
        <div>
          <h4>ยอดรายรับ</h4>  
          <p className="report incomes">{formatNumber(income)}</p>
        </div>
        <div>
          <h4>ยอดรายรับ</h4>  
          <p className="report expenses">{formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  )
}

export default ReportComponent;