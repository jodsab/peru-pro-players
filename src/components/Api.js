import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Api.scss';


export const Api = () => {

    const [ player , setPlayer] = useState([]);

    useEffect( () => {
        obtenerDatos();
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch("https://api.opendota.com/api/proPlayers");
        const user = await data.json();
        const raa = [];

        user.forEach((players) => {
            if(players.loccountrycode === "PE"){
                raa.push(players);
            }
        })
        setPlayer(raa);
        
    }

    return (
        <div className="players_card_container">
            <Router>
                {
                    player.map((e) =>
                            (
                                <Link className="player_card" to={e.name} >
                                    <p>{e.team_tag} {e.name} </p>
                                    <img src={e.avatarfull} alt={e.name} />
                                    <p>{e.account_id} </p>
                                </Link>
                            )
                    )
                }
            </Router>
        </div>
    )
}

export default Api;