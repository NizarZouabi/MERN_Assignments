import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom'
import DeleteBtn from '../components/DeleteBtn';
import axios from 'axios'

const PlayerList = (props) => {
    const { players, setPlayers } = props


    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(res => {
                console.log(res.data.AllPlayers)
                setPlayers(res.data.AllPlayers)
            })
            .catch(err => console.log(err))
    }, [setPlayers])
    
    const removeFromDom = (playerId) => {
        setPlayers(players.filter(player => player._id !== playerId))
    }

    return (
        <div className='container bg-white border border-2 p-4'>
            <div className='d-flex flex-row gap-2'>
            <Link to={`/`}><p className='lead fw-bold'>List</p></Link> | <Link to={`/api/players/addplayer`} ><p className='lead fw-bold'>Add Player</p></Link>
            </div>
            <table className='border border-2 table table-striped shadow'>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.length > 0 ? players.map((player, id) => (
                    <tr key={id}>
                        <td>{player.playerName}</td>
                        <td>{player.preferredPosition !== '' ? player.preferredPosition : 'Not Set'}</td>
                        <td>
                            <div className='d-flex flex-row gap-2 justify-content-center'>
                            <DeleteBtn playerId={player._id} successCallback={() => removeFromDom(player._id)}/>
                            </div>
                        </td>
                    </tr>
                    )) : (<tr><td colSpan={3}> Empty. </td></tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default PlayerList;
