import React, { useState } from "react";
import SuccessAlert from "../Alert/SuccessAlert";
import { toast } from 'react-toastify'

function PlayListApp() {
    const [playlist, setPlaylist] = useState([
        "Cơn mưa ngang qua",
        "Nắng ấm xa dần",
        "Em của ngày hôm qua"
    ])

    const [music, setMusic] = useState(undefined)
    const [newMusic, setNewMusic] = useState(undefined)

    const [selectIndex, setSelectIndex] = useState(-1)

    // const [showAlert, setShowAlert] = useState(false)

    const handleAddMusic = (e) => {
        e.preventDefault()
        setPlaylist([...playlist, music])
        setMusic(undefined)
        // setShowAlert(true)
        toast.success('Music added success')
    }

    const handleRemoveMusic = (idx, music) => {
        // let newPlaylist = playlist.filter((item, index) => index !== idx)
        // setPlaylist(newPlaylist)
        let confirm = window.confirm(`Are you sure to remove music ${music}?`)
        if (confirm) {
            setPlaylist((prev) => {
                let newPlaylist = prev.filter((item, index) => index !== idx)
                return newPlaylist
            })
        }
    }

    const handleCancelEdit = () => {
        setSelectIndex(-1)
        setNewMusic(undefined)
    }
    const handleUpdateMusic = (idx) => {
        if (newMusic) {
            playlist[idx] = newMusic
        }
        setNewMusic(undefined)
        setSelectIndex(-1)
        setPlaylist(playlist)
        // setShowAlert(true)
        toast.info('Music updated success', { theme: 'dark',  position: 'bottom-right' })
    }

    console.log('newMusic', newMusic);
    console.log('music', music);
    return (
        <div className="container mt-3">
            <h1 className="display-6 text-warning fw-bolder">
                Playlist Music
                <i className="fa-solid fa-music ms-2" />
            </h1>
            {/* <SuccessAlert showAlert={showAlert} setShowAlert= {setShowAlert} content = {"Music update success"} /> */}
            <form onSubmit={handleAddMusic} className="w-75 mt-2">
                <div className="form-group d-flex">
                    <input type="text" className="form-control w-50 me-1"
                        value={music}
                        required
                        onInput={(e) => setMusic(e.target.value)}
                    />
                    <button type="submit" className="btn btn-sm btn-primary">
                        <i className="fa-solid fa-plus me-2" />
                        Add to Playlist
                    </button>
                </div>
            </form>
            <div className="w-50 mt-3">
                <ul className="list-group">
                    {
                        playlist.map((song, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                { console.log('inside map', music)}
                                {
                                    selectIndex == index ?
                                        <input className="form-control" value={newMusic || song || music}
                                            onInput={(e) => setNewMusic(e.target.value || undefined)}
                                        />
                                        : song
                                }
                                <div className="d-flex">
                                    {
                                        selectIndex == index ? (
                                            <>
                                                <span className="d-inline-block" data-bs-toggle="tooltip" title="save">
                                                    <i role="button" className="fa-solid fa-floppy-disk text-warning me-2"
                                                        onClick={() => handleUpdateMusic(index)}
                                                    />
                                                </span>
                                                <span className="d-inline-block" data-bs-toggle="tooltip" title="cancel">
                                                    <i role="button" className="fa-solid fa-rectangle-xmark text-dark"
                                                        onClick={handleCancelEdit}
                                                    />
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="d-inline-block" data-bs-toggle="tooltip" title="edit">
                                                    <i role="button" className="fa-solid fa-pen-to-square text-success me-2"
                                                        onClick={() => setSelectIndex(index)}
                                                    />
                                                </span>
                                                <span className="d-inline-block" data-bs-toggle="tooltip" title="remove">
                                                    <i role="button" className="fa-solid fa-trash text-danger"
                                                        onClick={() => handleRemoveMusic(index, song)}
                                                    />
                                                </span>
                                            </>
                                        )
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul >
            </div >
        </div >
    )
}

export default PlayListApp;