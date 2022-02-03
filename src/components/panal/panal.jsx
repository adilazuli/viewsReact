import React from 'react';
import './panal.css'

export function Panal() {
  return (
  <div className='containerView'>
    <div className='headerView'>
          <h1>PANAL COMÚN</h1>
      </div>
      <div className='space-bet'>
        <h2>Que opina el <br/>enjambre?</h2>
        <a href="#">Que es?</a>
      </div>
      <div className='gridPanal'>
        <div className='row'>
          <h4>2</h4>
          <p>Personas que botaron</p>
        </div>
        <div className='row'>
          <h4>2</h4>
          <p>votes were cast</p>
        </div>
        <div className='row'>
          <h4>1</h4>
          <p>ideas were submitted</p>
        </div>
      </div>
      <div className='gridPanal'>
        <div className='row'>
          <h4>2</h4>
          <p>Personas que botaron</p>
        </div>
        <div className='row'>
          <h4>2</h4>
          <p>votes were cast</p>
        </div>
        <div className='row'>
          <h4>1</h4>
          <p>ideas were submitted</p>
        </div>
      </div>
      <div className='space-bet'>
        <h2>Las ideas en resumen</h2>
        <a href="#">Que es?</a>
      </div>
      <p>Desplácate a lo largo de la línea. Pasa el cursor sobre los puntos para ver el texto de la declaración y las estadísticas en el marco de abajo. Empieza por la extrema derecha para averiguar cuál fue la declaración más divisiva.</p>
      <div className='space-bet'>
        <h2>Opinión mayoritaria</h2>
        <a href="#">Que es?</a>
      </div>
      <p>El 60% o más de todos los participantes votaron de una manera u otra, independientemente de si grandes cantidades de ciertos grupos de opinión minoritarios votaron de otra manera.
      </p>
      <p>Esto es lo en que la mayoría estaba de acuerdo</p>
      <div className='space-bet'>
        <h2>Grupos de opinión</h2>
        <a href="#">Que es?</a>
      </div>
      <p>Entre los 10 participantes en total, surgieron 2 grupos de opinión. </p>
      <p>Hay dos factores que definen un grupo de opinión:</p>
      <p>En primer lugar, cada grupo de opinión está compuesto por los participantes que tendían a votar de manera similar sobre múltiples declaraciones (Ej: La mayoría de los participantes del grupo A están de acuerdo con las ideas 1 y 2 ). </p>
      <p>En segundo lugar, cada grupo de participantes se difiere de los otros grupos por sus votos (Ej: La mayoria de los participantes del grúpo B estan de acuerdo con las ideas 3 y 4, pero no con 1).</p>
      <a href="">Opiniones de los grupos</a>
  </div>
  );
}










