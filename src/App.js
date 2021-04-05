import { useState } from "react";
import { User } from "./components/User";
import "./App.css";
import { employees } from "./data";

export const App = () => {
  const [age, setAge] = useState("employees");
  const [country, setCountry] = useState("employees");

  const renderUsers1 = () => { 
    switch (country) {
      case "K":
        let arr5 = employees.map((el) => {
          return el.country == "Kg"
        });
        return arr5.map((el, id) => {
          return <User el={el} key={id}  color="red" />;
        });
       
      case "R":
        let arr6 = employees.map((el) => {
          return el.country == "Ru"
        });
        return arr6.map((el, id) => {
          return <User el={el} key={id} color="red" />;
        });
    }
  }
  
  
  const renderUsers = () => {
    
    switch (age) {
      case "TEENAGER":
        let arr = employees.filter((el) => {
          return el.age == 16
        });
        return <> 
        <div className="KR">
          <button className="kp"
           onClick={() => setCountry("Kg")}
           style={ country == "Kg"
               ? { backgroundColor: "yellow" }
               : { backgroundColor: "none" }
           }
         >K</button> 
          <button className="kp" onClick={() => setCountry("Ru")}
           style={country == "Ru"
               ? { backgroundColor: "yellow" }
               : { backgroundColor: "none" }
           }
          >R</button> 
        </div>
        {
          arr.map((el, id) => {
            return <User el={el} key={id} color="darkred" />  })
        }
          </>
      // 2-render
      case "MIDDLE AGE":
        let arr2 = employees.filter((el) => {
          return el.age < 24
        });
        return arr2.map((el, id) => {
          return <User el={el} key={id} color="darkred" />;
        });
      // 3-render
      case "S":
        let arr3 = employees.filter((el) => {
          return el.age >= 24
        });
        return arr3.map((el, id) => {
          return <User el={el} key={id} color="darkred" />;
        });
     case "All":
        let arr4 = employees.filter((el) => {
          return el.age <=26
        });
        return arr4.map((el, id) => {
          return <User el={el} key={id} color="darkred" />;
        });
       
      default:
        return "";
    }
  };
return (
    <div className="App">
      <div className="btns-group">
        <button
          className="btn"
          onClick={() => setAge("TEENAGER")}
          style={
            age >= 16
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "none" }
          }
        >16</button>
        <button
          className="btn"
          onClick={() => setAge("MIDDLE AGE")}
          style={
            age < 24
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "none" }
          }
        >16-24</button>
        <button
          className="btn"
          onClick={() => setAge("S")}
          style={
            age <= 24
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "none" }
          }
        >24+</button>
        <button
          className="btn"
          onClick={() => setAge("All")}
          style={
            age == 20, 16, 24
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "none" }
          }
        >All</button> 
      </div>
      <div className="container">{renderUsers()}</div>
      <div>{renderUsers1()}</div>
    </div>
  ); 
};