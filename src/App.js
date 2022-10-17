import "./App.css";
import { useState } from "react";
function App() {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [emi, setEmi] = useState("");
  const [div, setDiv] = useState({ display: "none" });
  const [totalpayment, setTotalpayment] = useState("");
  const [totalintrest, setTotalintrest] = useState("");
  const amounthandler = (e) => {
    setAmount(e.target.value);
  };
  const interesthandler = (e) => {
    setInterest(e.target.value);
  };
  const yearhandler = (e) => {
    setYear(e.target.value);
  };
  const monthhandler = (e) => {
    setMonth(e.target.value);
  };
  const calculatehandler = () => {
    let amt = amount;
    let amtint = parseInt(amt);
    let intr = interest;
    let intrint = parseInt(intr);
    let yer = year;
    let yerint = parseInt(yer);
    let mnt = month;
    let mntint = parseInt(mnt);
    let total = mntint + yerint * 12;
    parseFloat(total);
    console.log(total);
    let intrest = intrint / 12 / 100;
    // *******************Validation*******************************
    if (amt === "" && yer === "" && mnt === "" && intr === "") {
      alert("All fields should be filled");
      setEmi();
    } else if (amt === "") {
      alert("please enter amonut");
      setEmi();
    } else if (yer === "") {
      alert("please Enter Year");
      setEmi();
    } else if (mnt === "") {
      alert("please Enter month");
      setEmi();
    } else if (intr === "") {
      alert("please Enter intrest");
      setEmi();
    } 
    else if(amt<0){
      alert("please enter positive value in amount field")
    }
    else if(intr<0){
      alert("please enter positive value in intrest field")
    }
    else if(yer<0){
      alert("please enter positive value in year field")
    }
    else if(mnt<0){
      alert("please enter positive value in month field")
    }else {
      // calculating Emi
      let exp1 = amtint * intrest;
      let exp2 = Math.pow(1 + intrest, total);
      console.log(exp1);
      let res = (exp1 * exp2) / (exp2 - 1);
      parseInt(res);
      setEmi(res);

      // calculating total payment
      let totalpayment1 = res * total;
      setTotalpayment(totalpayment1);
      let totalintrest1 = totalintrest;
      let totalintrest2 = parseInt(totalintrest1);
      // calculating total intrest
      totalintrest2 = (amtint * intrint * (total / 12)) / 100;
      setTotalintrest(totalintrest2);
    }
  };
  const resethandler = () => {
    console.log("reset button clicked");
    setDiv({ display: "none" });
    setAmount("");
    setInterest("");
    setMonth("");
    setYear("");
    
  };

  const detailhandler = () => {
    let amt = amount;
    let intr = interest;
    let yer = year;
    let mnt = month;
    if (amt === "" && yer === "" && mnt === "" && intr === "") {
      alert("All fields should be filled");
      setEmi();
    }
    else if (amt === "") {
      alert("please enter amonut");
      setEmi();
    } else if (yer === "") {
      alert("please Enter Year");
      setEmi();
    } else if (mnt === "") {
      alert("please Enter month");
      setEmi();
    } else if (intr === "") {
      alert("please Enter intrest");
      setEmi();
    }
    else if(amt<0){
      alert("please enter positive value in amount field")
    }
    else if(intr<0){
      alert("please enter positive value in intrest field")
    }
    else if(yer<0){
      alert("please enter positive value in year field")
    }
    else if(mnt<0){
      alert("please enter positive value in month field")
    }
    else {
      setDiv({ display: "block" });
    }
  };
  return (
    <div className="App">
      <div>
        <h2>EMI CALCULATOR</h2>
        <h2>
          {" "}
          <label>Loan Amount:</label>{" "}
          <input type="number" value={amount} onChange={amounthandler} />
        </h2>
        <h2>
          <label>Interest % :</label>{" "}
          <input type="number" value={interest} onChange={interesthandler} />
        </h2>
        <h2>
          <label> Period:</label>{" "}
          <input type="number" value={year} placeholder="In year" onChange={yearhandler} />{" "}
          <input type="number" value={month} placeholder="In month" onChange={monthhandler} />
        </h2>
      </div>
      <button className="button" onClick={calculatehandler}>
        calculate
      </button>
      <button className="button" onClick={resethandler}>
        Reset
      </button>
      <button className="button" onClick={detailhandler}>
        Details
      </button>
      <p>EMI is :{emi}</p>
      <div className="tablediv">
        <table style={div}>
          <tbody>
            <tr>
              <th>Monthly Emi</th>
              <td>{emi}</td>
            </tr>
            <tr>
              <th>Total Intrest</th>
              <td>{totalintrest}</td>
            </tr>
            <tr>
              <th>Total Payment</th>
              <td>{totalpayment}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
