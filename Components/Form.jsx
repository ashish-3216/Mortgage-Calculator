"use client";
import React, { act, useState } from "react";
import Image from "next/image";
import InputComponent from "./InputComponent";
import styles from "@/styles/form.module.css";
import SecondInput from "./SecondInput";
const Form = ({ setShow, setResult , setInterest}) => {
  const [active, setActive] = useState("repayment");
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);

  function calculateMonthlyRepayment(principal, annualRate, years) {
    if(!principal || !annualRate || !years){ alert('Empty fields'); setShow(false); return;}
    if (isNaN(principal) || isNaN(annualRate) || isNaN(years)) {
      alert("Please enter valid numeric values.");
      setShow(false);
      return;
    }
    
    if (principal <= 0 || annualRate <= 0 || years <= 0) {
      alert("Values must be greater than zero.");
      setShow(false);
      return;
    }
    const r = annualRate / 100 / 12;
    const n = years * 12;

    if (r === 0) return principal / n;

    const monthly =
      (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    const totalRepayment = monthly * n;
    const totalInterest = totalRepayment - principal;
    setShow(true);
    return {
      monthlyRepayment: monthly.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Mortgage Calculator</h2>
        <div
          id={styles.clear}
          onClick={() => {
            setPrinciple(0);
            setRate(0);
            setTime(0);
            setShow(false);
          }}
        >
          Clear All
        </div>
      </div>
      <InputComponent
        text={"Mortgage Amount"}
        image={"/currency_pound.svg"}
        fun={setPrinciple}
        value={principle}
      />
      <div className={styles.form_flex}>
        <SecondInput
          text={"Mortgage Term"}
          image={"/scale.svg"}
          value={time}
          fun={setTime}
        />
        <SecondInput
          text={"Interest Rate"}
          image={"/percent.svg"}
          value={rate}
          fun={setRate}
        />
      </div>
      <div>
        <p id={styles.type}>Mortgage Type</p>
        <div
          className={styles.input_button}
          style={
            active === "repayment"
              ? { backgroundColor: "hsl(61, 73.80%, 74.50%)" }
              : {}
          }
          onClick={() => {setActive("repayment"); setInterest(false);}}
        >
          <input
            type="radio"
            id="repayment"
            name="mortgageType"
            checked={active === "repayment"}
            onChange={() => setActive("repayment")}
          />
          <label htmlFor="repayment">Repayment</label>
        </div>
        <div
          className={styles.input_button}
          style={
            active === "interest"
              ? { backgroundColor: "hsl(61, 73.80%, 74.50%)" }
              : {}
          }
          onClick={() => {setActive("interest"); setInterest(true);}}
        >
          <input
            type="radio"
            id="interestOnly"
            name="mortgageType"
            checked={active === "interest"}
            onChange={() => setActive("interest")}
            
          />
          <label htmlFor="interestOnly">Interest Only</label>
        </div>
      </div>
      <div
        className={styles.calculate_btn}
        onClick={() => {
          setResult(calculateMonthlyRepayment(principle, rate, time));
        }}
      >
        <Image
          src="/icon-calculator.svg"
          width={30}
          height={30}
          alt="Calculator"
        />
        <p>Calculate Repayments</p>
      </div>
    </div>
  );
};

export default Form;
