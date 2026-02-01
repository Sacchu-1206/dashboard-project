import { useState } from "react";
import { statsData, chartData } from "./data";
import "./App.css";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

function App() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState("Dashboard");

  return (
    <div className={dark ? "app dark" : "app"}>
      <div className="sidebar">
        <h2>Dashboard</h2>
        {["Dashboard", "Reports", "Settings"].map(item => (
          <p
            key={item}
            className={menu === item ? "active" : ""}
            onClick={() => setMenu(item)}
          >
            {item}
          </p>
        ))}
      </div>

      <div className="main">
        <div className="navbar">
          <h3>{menu}</h3>
          <button onClick={() => setDark(!dark)}>
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="cards">
          <div className="card">
            <h4>Total Users</h4>
            <p>{statsData.totalUsers}</p>
          </div>
          <div className="card">
            <h4>Active Sessions</h4>
            <p>{statsData.activeSessions}</p>
          </div>
          <div className="card">
            <h4>Conversion Rate</h4>
            <p>{statsData.conversionRate}%</p>
          </div>
        </div>

        <div className="chart">
          <h4>User Growth</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#4f46e5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
