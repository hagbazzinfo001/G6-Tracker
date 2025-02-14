import "../assets/css/dashboard.css";
import trend from "../assets/images/trend.svg";
import track from "../assets/images/track.svg";
import history from "../assets/images/history.svg";
import price from "../assets/images/price.svg";
import menu from "../assets/images/menu.svg";
import notificate from "../assets/images/notificate.svg";
import hambegr from "../assets/images/hambegr.svg";
import sail from "../assets/images/sail.svg";
import setting from "../assets/images/setting.svg";
import { Link } from "react-router-dom";

import MostSearchedStocksTable from "./stocks-table/MostSearchedStocksTable";

function Dashboard() {
  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  // Capitalized component name
  return (
    <>
      <div className="dashboard">
        <div className="sail-header">
          <div className="sail">
            <img src={sail} alt="Sail Logo" />
            <span>
              Stock <br /> Tracker
            </span>
          </div>
          <img src={hambegr} alt="" id="hamg" />
        </div>
        <div className="mobile-menu"></div>
        <div className="header">
          <div className="logo">
            <img src={hambegr} alt="" />
            <p>Dashboard</p>
          </div>

          <div className="icon">
            <img src={notificate} alt="" className="not" />
            <img src={setting} alt="" className="setting" />
          </div>
        </div>
        <div className="header2">
          <div className="">
            <h1>Hi, Welcome Back Jude</h1>

            <h4 className="header-text">{getCurrentDate()}</h4>
          </div>
          <div id="buttons">
            <Link to="/signup">
              {" "}
              <button className="primary">Get Started</button>
            </Link>
            {/* <button className="primary">Get Started</button> */}
            <button className="secondary">Deposit</button>
            <img src={menu} alt="hsd" id="menu" />
          </div>
        </div>
        <br /> <br />
        <div className="">
          <div className="stock1">
            <div className="stock-trends tt">
              <section>
                <img src={trend} alt="Trend Icon" />
                <h4>Explore Stock Trends</h4>
              </section>
            </div>
            <div className="price-alert tt">
              <section>
                <img src={price} alt="price alert" />
                <h4>Price Alert</h4>
              </section>
            </div>
          </div>
          <div className="stock2 tt">
            <section>
              <img src={track} alt="Trend Icon" />
              <h4>Track Your Stocks</h4>
            </section>
          </div>
          {/* History trend */}
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <img
                src={history}
                alt="Trend Icon"
                style={{
                  width: 30,
                }}
              />
              <h4>History Trend</h4>
            </div>
            <MostSearchedStocksTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
