import React, { useState } from "react";
import '@animxyz/core'
import { XyzTransition } from '@animxyz/react'
import * as Unicons from '@iconscout/react-unicons';
import './tarjeta.css';

export function Tarjeta() {
    const cards = ['topCard', 'bottomCard']
    const [CardIndex, setCardIndex] = useState(0)

    function toggle() {
		let newCardIndex = CardIndex + 1
		if (newCardIndex === cards.length) {
			newCardIndex = 0
		}
		setCardIndex(newCardIndex)
	}


return (
    <XyzTransition appear mode="out-in">
        {cards[CardIndex] === 'topCard' && (
            <div className="card" xyz="fade down-1 small-100%" key="bottom">
                <div className="header-card">
                    <div>
                        <div className="profile-pic">
                        </div>
                        <div className="person-info">
                            <h2>María</h2>
                            <span>escribió:</span>
                        </div>
                    </div>
                    <div className="options-card">
                        <Unicons.UilBookmarkFull size="30" className="btn-option" />
                        <Unicons.UilShareAlt size="30" className="btn-option" />
                    </div>
                </div>
                <div className="propuesta">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non iaculis diam, ut luctus augue. Ut
                        eleifend justo ac fringilla ornare. Fusce commodo varius commodo.</p>
                    <div className="containerBtn">
                        <img src="" alt="" />
                        <button className="option-button" onClick={toggle} >
                            DE ACUERDO
                        </button></div>
                    <div className="containerBtn"><button className="option-button" >
                            NO DE ACUERDO
                        </button></div>
                    <div className="containerBtn"><button className="option-button" >
                            PASAR / INDECISO
                        </button></div>

                </div>
                <div className="footer-card">
                    <div>
                        <p>Juntaste 30 gotitas de néctar!</p>
                        <a href="#">Registrate para no perderlas</a>
                    </div>
                    <div>
                        <Unicons.UilInfo size="30" className="btn-option info" />
                    </div>
                </div>
            </div> )}

{/* -----------------------------SEGUNDA CARTA------------------------------- */}
            {cards[CardIndex] === 'bottomCard' && (
            <div className="card" xyz="fade down-1 small-100%" key="top">
                <div className="header-card">
                    <div>
                        <div className="profile-pic">
                        </div>
                        <div className="person-info">
                            <h2>Adriana</h2>
                            <span>escribió:</span>
                        </div>
                    </div>
                    <div className="options-card">
                        <Unicons.UilBookmarkFull size="30" className="btn-option" />
                        <Unicons.UilShareAlt size="30" className="btn-option" />
                    </div>
                </div>
                <div className="propuesta">
                    <p>Fusce commodo varius commodo. consectetur adipiscing elit. Proin non iaculis diam, ut luctus augue. Ut
                        eleifend justo ac fringilla ornare. </p>
                    <div className="containerBtn">
                        <img src="" alt="" />
                        <button className="option-button" onClick={toggle} >
                            DE ACUERDO
                        </button></div>
                    <div className="containerBtn"><button className="option-button" >
                            NO DE ACUERDO
                        </button></div>
                    <div className="containerBtn"><button className="option-button" >
                            PASAR / INDECISO
                        </button></div>

                </div>
                <div className="footer-card">
                    <div>
                        <p>Juntaste 30 gotitas de néctar!</p>
                        <a href="#">Registrate para no perderlas</a>
                    </div>
                    <div>
                        <Unicons.UilInfo size="30" className="btn-option info" />
                    </div>
                </div>
            </div> )}
            </XyzTransition>
);
}