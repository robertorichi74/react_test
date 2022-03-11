import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import "./styles.css";
import "./inputs.css";
import { Container, Result } from "./Blocks/index";
import { GetDefaultValues } from "./Helper";
import { Bar } from "./Components";

export default function App() {
  const [result, setResult] = useState([]);
  const [showBar, setShowBar] = useState(false);
  const settingsLocal = useMemo(() => GetDefaultValues(), []);

  useEffect(() => {
    fetchResultData({
      amount: settingsLocal.minAmount,
      months: settingsLocal.minMonth
    });
  }, []);

  const fetchResultData = async (data) => {
    setShowBar(true);
    try {
      await axios
        .get(
          "https://odoriferous-society.000webhostapp.com/get_data.php?amount=" +
            data.amount +
            "&months=" +
            data.months +
            "&rpsn=" +
            settingsLocal.rpsn
        )
        .then((res) => {
          if (data.insurance) {
            res.data.data = res.data.data + settingsLocal.insurance;
          }
          /** simulation of net lack */
          setTimeout(() => {
            setShowBar(false);
          }, 1000);
          setResult(res.data.data);
        });

      // return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="root-container">
        <div className="calculator-container">
          <Container PassData={fetchResultData} settingsLocal={settingsLocal} />
        </div>
        <div className="result-container">
          <Bar showBar={showBar} />
          <Result amount={result} rpsnValue={settingsLocal.rpsn} />
        </div>
      </div>
    </>
  );
}
