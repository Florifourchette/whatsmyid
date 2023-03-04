import React, { useState } from "react";
import Instruction from "./Instructions";
import CountersList from "./CountersList";
import "./index.css";

export default function App() {
  return (
    <>
      <div class="block">
        <Instruction />
      </div>
      <div class="block">
        <em>Put your counters here</em>
        <CountersList />
      </div>
    </>
  );
}
