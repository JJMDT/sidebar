import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Estadisticas} from "../pages/Estadisticas";
import {Productos} from "../pages/Productos";
import { Favoritos } from "../pages/Favoritos";
import {Perfil} from "../pages/Perfil";
import {Settings} from "../pages/Settings";

export function MyRoutes() {
  return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/estadisticas" element={<Estadisticas />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
  );
}