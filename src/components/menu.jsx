import React from 'react';
import {
    BrowserRouter as Router,
    Route,Routes, Link
  } from "react-router-dom";
import './menu.css'
import { Votar } from './votar/votar'
import { Opciones } from './opciones/opciones'
import { Panal } from './panal/panal'


export function MenuTest() {
    return (
        <Router>
        <div>
         <ul className="App-header space-bet">
           <li>
             <Link to="/votar">Votar</Link>
           </li>
           <li>
             <Link to="/opciones">Opciones</Link>
           </li>
           <li>
             <Link to="/panal">Panal Comun</Link>
           </li>
         </ul>
        <Routes>
              <Route exact path='/votar' element={< Votar />}></Route>
              <Route exact path='/opciones' element={< Opciones />}></Route>
              <Route exact path='/panal' element={< Panal />}></Route>
       </Routes>
       </div>
    </Router>
    );
}
