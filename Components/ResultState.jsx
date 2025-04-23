import React from "react";
import styles from "@/styles/result.module.css";

const ResultState = ({ result, intrest }) => {
  const { monthlyRepayment, totalRepayment, totalInterest } = result;
  return (
    <div className={styles["result-section"]}>
      <div className={styles["result-text"]}>
        <h3>Your Results</h3>
        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "Calculate Repayments"
          again.
        </p>
      </div>

      <div className={styles.payment}>
        <div className={styles.money}>
          <p>Your Monthly Repayments</p>
          <h1 style={{ color: "hsl(61, 70%, 52%)" }}>${monthlyRepayment}</h1>
        </div>

        <div className={styles.total}>
          {intrest ? (
            <>
              <p style={{ marginBottom: "5px" }}>Total interest you'll pay</p>
              <h2>${totalInterest}</h2>
            </>
          ) : (
            <>
              <p style={{ marginBottom: "5px" }}>
                Total you'll repay over the term
              </p>
              <h2>${totalRepayment}</h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultState;
