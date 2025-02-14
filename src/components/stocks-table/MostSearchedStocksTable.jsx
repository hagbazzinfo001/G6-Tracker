import { useEffect, useState } from "react";
import "./MostSearchedStocksTable.css";

import axios from "axios";

function MostSearchedStocksTable() {
  // API has more than 84k responses
  // const [tableData, setTableData] = useState([]);
  // useEffect(() => {
  //   const fetchStocks = async () => {
  //     const data =  await axios.get(
  //       "https://financialmodelingprep.com/api/v3/stock/list?limit=1&apikey=cw26HLnCGp22OWvkOV1jVNjrwjyUqXFA"
  //     );
  //     console.log(data.data);
  //   }
  //   fetchStocks();
  // }, [])
  const tableData = [
    {
      symbol: "NSSC",
      name: "Napco Security Technologies, Inc.",
      price: 25.05,
      change: -0.79,
      changePct: -3.06,
      marketCap: "911.855M",
      lastTrade: "21 hours ago",
    },
    {
      symbol: "NVDA",
      name: "NVIDIA Corporation",
      price: 131.14,
      change: -1.66,
      changePct: -1.25,
      marketCap: "3.212T",
      lastTrade: "20 hours ago",
    },
    {
      symbol: "NVO",
      name: "Novo Nordisk A/S",
      price: 81.79,
      change: -1.95,
      changePct: -2.33,
      marketCap: "368.63B",
      lastTrade: "20 hours ago",
    },
    {
      symbol: "NXT",
      name: "Nextracker Inc.",
      price: 45.31,
      change: 0.19,
      changePct: 0.42,
      marketCap: "6.508B",
      lastTrade: "20 hours ago",
    },
    {
      symbol: "OIH",
      name: "VanEck Oil Services ETF",
      price: 279.76,
      change: -5.37,
      changePct: -1.88,
      marketCap: "1.489B",
      lastTrade: "1 day ago",
    },
  ];
  return (
    <div className="stocks-table-container">
      <h2>Most Searched Stocks</h2>
      {/* Responsive container for the table */}
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Market Cap</th>
              <th>Last Trade</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((stock, index) => {
              const isPositive = stock.change > 0;
              return (
                <tr key={index}>
                  <td>{stock.symbol}</td>
                  <td>{stock.name}</td>
                  <td>${stock.price.toFixed(2)}</td>
                  <td
                    className={
                      isPositive ? "change-positive" : "change-negative"
                    }
                  >
                    {stock.change.toFixed(2)} ({stock.changePct.toFixed(2)}%)
                  </td>
                  <td>{stock.marketCap}</td>
                  <td className="last-trade">{stock.lastTrade}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MostSearchedStocksTable;
