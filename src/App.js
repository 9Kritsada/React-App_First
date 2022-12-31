import Transaction from './components/Transaction.js';
import Form from './components/Form.js';
import './App.css';
import { useState, useEffect } from 'react';
import DataContext from './data/DataContext.js';
import ReportComponent from './components/ReportComponent.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const initState = [
    {id:1, title: "Hello1", amount: -300},
    {id:2, title: "Hello3", amount: 100},
    {id:3, title: "Hello2", amount: -500},
    {id:3, title: "Hello2", amount: -500},
    {id:3, title: "Hello2", amount: -500},
    {id:3, title: "Hello2", amount: -500},
    {id:3, title: "Hello2", amount: -500},
    {id:3, title: "Hello2", amount: -500},
    {id:3, title: "Hello2", amount: -500},
    {id:3, title: "Hello2", amount: -500},
    {id:3, title: "Hello2", amount: -500},
    {id:3, title: "Hello2", amount: -500},
    {id:3, title: "Hello2", amount: -500},
    {id:3, title: "Hello2", amount: -500},
    {id:3, title: "Hello2", amount: -500},
    {id:4, title: "Hello4", amount: 1000}
  ]

  const [items, setItems] = useState(initState);
  const [reportIncome, SetReportIncome] = useState(0);
  const [reportExpense, SetReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }

  useEffect(() => { 
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element => element > 0).reduce((sum, element)=>sum += element,0)
    const expense = Math.abs(amounts.filter(element => element < 0).reduce((sum, element)=>sum += element,0))

    SetReportIncome(income.toFixed(2))
    SetReportExpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense])


  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
        <h1 className="title">แอพบัญชีรายรับ - รายจ่าย</h1>
        <Router>
          <div class="navbar">
            <ul>
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={ <ReportComponent /> }></Route> 
            <Route path="/insert" element={ 
              <>
                <Form onAddItem={onAddNewItem} />
                <Transaction items={items} />
              </> 
            }></Route> 
          </Routes>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;