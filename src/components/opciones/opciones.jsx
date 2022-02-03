import React from 'react';
import './opciones.css'
import { UilTwitterAlt,UilFacebookF,UilGoogle,UilGitlab,UilSquareFull } from '@iconscout/react-unicons'


export  function Opciones() {
  return (
  <div className='containerView'>
      <div className='headerView'>
          <h1>OPCIONES</h1>
      </div>
      <div className='UserAvatar'>
        <div>
            <div className='Avatar'/>
        </div>
        <div className='editAvatar'>
            <div className='containerBtn2'>
                <a href="#">Volver a tu alveolo</a>
            </div>
            <h1>Avatar</h1>
            <div className='deleteChange'>
                <a>cambiar</a>
                <a>borrar</a>
            </div>
        </div>
      </div>
      {/* ----------------Datos personales-------------- */}
      <div>
            <h2>DATOS PERSONALES</h2>
        <div className='PersonalInfo'> 
            <div className='field'>
                <div className='fieldheader'>
                <p>username:</p>
                <a href="#">cambiar</a>
                </div>
                <h4>hormiguita</h4>
            </div>
            <div className='field'>
                <div className='fieldheader'>
                <p>Nombre (opcional):</p>
                <a href="#">cambiar</a>
                <a href="#">borrar</a>
                </div>
                <h4>Joaquin Lautaro</h4>
            </div>
            <div className='field'>
                <div className='fieldheader'>
                <p>correo:</p>
                <a href="#">cambiar</a>
                <a href="#">borrar</a>
                </div>
                <h4>christian.smolarski@uni-wuppertal.com</h4>
            </div>
            <div className='field'>
                <div className='fieldheader'>
                <p>clave:</p>
                <a href="#">cambiar</a>
                <a href="#">borrar</a>
                </div>
                <h4>****************</h4>
            </div>            
        </div>
{/* ---------------CONECTAR REDES --------------*/}
        <h2>CONECTAR REDES</h2>   
        <div className='socialC'>
            <UilFacebookF/>
            <UilTwitterAlt/>
            <UilGoogle/>
            <UilGitlab/> 
        </div>
      </div>
      <p>Conéctate para ver a tus amigos y a la gente que sigues en la visualización y en otras partes de la plataforma. No publicaremos en tu línea de tiempo.</p>
{/* ------------Opciones--------------------- */}
    <div className='opConfig'>
        <div className='config'>
            <div><UilSquareFull/><h4>Quiero recibir correos de notificación</h4></div>
        </div>
        <div className='config'>
            <div><UilSquareFull/><h4>Quiero que mis ideas sean publicadas de forma anónima</h4></div>
        </div>
        <div className='config'>
            <div><UilSquareFull/><h4>No quiero aparecer en la vizualización de mis amigos, aunque tenga mis redes conectadas</h4></div>
        </div>
        <div className='config'>
            <div><UilSquareFull/><h4>Quiero activar el tutorial de nuevo (?)</h4></div>
        </div>
        <div className='config'>
            <div><UilSquareFull/><h4>Quiero hacer mi constitución privada invisible para los demás</h4></div>
        </div>
    </div>
{/* ---------------Borrar cuenta--------------- */}
    <div className='space-bet'>
        <button className='btnPolis' type="">Borrar cuenta</button>
        <button className='btnPolis' type="">Volver a tu alveolo</button>
    </div>
  </div>
  );
}
