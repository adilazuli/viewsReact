import React from 'react';
import './otherIdea.css'

export function OtherIdea() {
  return (
  <div className='otherIdea'>
    <h1>¿Tenes otra idea?</h1>
    <p>Si su perspectiva no está representada ya, escribe un comentario!</p>
    <p>Qué hace que un comentario sea exitoso?</p>
    <ul>
        <li>Idea única</li>
        <li>Plantear nuevas perspectivas, experiencias o problemas</li>
        <li>Claro y conciso (límite - 280 carácteres)</li>
    </ul>
    <a href="#">Reglas completas</a>

    <div className='inputIdea'>
    {/* no se que va aqui */}
    </div>
    <div className='ideaBtns'>
        <div className='space-bet'>
            <p>Caracteres: 140</p>
            <button className='btnPolis' type="">ENVIAR</button>
        </div>

    </div>
  </div>
  );
}


