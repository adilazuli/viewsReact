import React from 'react';
import './votar.css'
import { Tarjeta } from './tarjeta'
import { OtherIdea } from './otherIdea'
import ProgressBar from "@ramonak/react-progress-bar";


export function Votar() {
  
  return (
  <div className='containerView'>
    <div className='headerView space-bet'>
      <h1>VOTAR</h1>
      <a href="#"><span>Como funciona?</span></a>
    </div>
    <div className='infoView'>
      <p>Bienvenidx! Aquí tienes el poder de crear tu propia constitución tal y como quieras que fuera. Opiná sobre las propuestas de otros participantes y publicá tus própias ideas!</p>
    </div>
    <div className='votarCards'>
      <div className='space-bet'>
        <p>Filtrar por categoría:</p>
        <span>TODAS</span>
      </div>
      <Tarjeta></Tarjeta>
      <ProgressBar 
      className="wrapper"
      barContainerClassName="containerBar"
      bgColor="#999999"
      completed={"35"} 
      maxCompleted={"45"} 
      animateOnRender="true"
      />
    </div>
    <OtherIdea></OtherIdea>
    <div className='opinionGroup'>
      <h1>GRUPOS DE OPINIÓN</h1>
      <p>Se agrupa toda la gente que vota de manera similar. Haz clic en un grupo para ver los puntos de vista que comparten sus miembros</p>
      <div className='space-bet'>
        <a href="">Detalles</a>
        <button type="" className='btnPolis'>RESUMEN</button>
      </div>
    </div>
    
  </div>
  );
}



