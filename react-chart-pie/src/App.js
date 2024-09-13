import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Skill", "Hours per Day"],
  ["HTML", 4],
  ["CSS", 4],
  ["JavaScript", 2],
  ["React", 1],  
];

export const options = {
  title: "My Skill Level",
  is3D: true,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}


export default App;
