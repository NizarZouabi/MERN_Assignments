import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'; 


const PlayerForm = (props) => {

    const { players, setPlayers } = props
    const [player, setPlayer] = useState({
        playerName: '',
        preferredPosition: ''
    })
    const [errors, setErrors] = useState([])
    const Navigate = useNavigate()

    const addPlayer = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/players/addplayer", {
            playerName: player.playerName,
            preferredPosition: player.preferredPosition
        })
            .then(res => {
                console.log(res.data)
                setPlayers([...players, res.data])
                Navigate("/")
            })
            .catch(err => {
                console.log(err)
                setErrors( err.response.data.errors )
        })
    }


    return (
        <div className='container bg-white border border-2 p-4'>
            <div className='d-flex flex-row gap-2'>
            <Link to={`/`}><p className='lead fw-bold'>List</p></Link> | <Link to={`/api/players/addplayer`} ><p className='lead fw-bold'>Add Player</p></Link>
            </div>
            <div className='container bg-white border border-2 p-4'>
                <p className='lead fw-bold'>Add Player</p>
                <div className='d-flex justify-content-center'>
                    <form className='d-flex flex-column form-control p-3 gap-1 shadow' style={{ height: '300px', width: '600px'}} onSubmit={addPlayer}>
                    <label className='form-group mt-3'>Player Name:</label>
                    <input className='form-control' name="playerName" value={player.playerName} onChange={(e) => setPlayer({...player, playerName: e.target.value})} />
                    {errors && Object.keys(errors).map((key) => (
                    <p key={key} className='text-danger'>{errors[key].message}</p>))}
                    <label className='form-group mt-3'>Preferred Position</label>
                    <input className='form-control' name="preferredPosition" value={player.preferredPosition} onChange={(e) => setPlayer({ ...player, preferredPosition: e.target.value })} />
                    <button className='m-5 btn btn-success'>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PlayerForm;
