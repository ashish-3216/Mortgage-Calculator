"use client"
import Form from "@/Components/Form";
import InitialState from "@/Components/InitialState";
import ResultState from "@/Components/ResultState";
import { useState } from "react";

export default function Home() {
  const [show,setShow] = useState(false);
  const [result,setResult] = useState(0);
  const [intrest,setInterest] = useState(false);
  return (
    <div className="container">
    <Form setShow={setShow} setResult={setResult} setInterest={setInterest}/>
    {show ? <ResultState result={result} intrest={intrest}/> : <InitialState />}
    </div>
  );
}
