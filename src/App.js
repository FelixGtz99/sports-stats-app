import { Routes, Route, NavLink } from "react-router-dom";

import { NextUIProvider } from '@nextui-org/react';
import logo from './logo.svg';
import './App.css';
import MainMenu from "./views/main_menu";
import TeamsPerDivision from "./views/mlb/teams_per_division";
import TeamDetails from "./views/mlb/team_details";

function App() {
  return(
    <NextUIProvider>
      <Rutas />
      </NextUIProvider>
  ) 
}
const Rutas = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainMenu/>} />
        <Route exact path="/mlb/teams" element={<TeamsPerDivision/>} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/mlb/team/:id" element={<TeamDetails/>} />
        <Route path="*" element={<h1>Página no encontrada 404</h1>} /> 
      </Routes>
    </div>
  );
};
export default App;
