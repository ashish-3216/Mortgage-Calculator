"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/input.module.css";

const InputComponent = ({ text, image , fun , value}) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.container}>
      <label htmlFor="amount">{text}</label>
      <div
        className={styles["input-div"]}
        style={active ? { border: "2px solid hsl(61, 70%, 52%)" } : {}}
      >
        <div
          className={styles["dollar-sign"]}
          style={
            active
              ? { backgroundColor: "hsl(61, 70%, 52%)" }
              : { backgroundColor: "hsl(203, 41%, 72%)" }
          }
        >
          <Image src={image} alt="Currency" width={20} height={20} />
        </div>
        <input
          id={styles.amount}
          type="text"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={(e)=> fun(+(e.target.value))}
          value={!isNaN(value) ? value : 0}
        />
      </div>
    </div>
  );
};

export default InputComponent;
