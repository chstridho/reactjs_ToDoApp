import React, { useState } from 'react';
import { FaTrashCan } from 'react-icons/fa6';

function TodoApp() {
    const [tugasBaru, setTugasBaru] = useState("");
    const [daftarTugas, setDaftarTugas] = useState([]);
    const [hideCompleted, setHideCompleted] = useState(false); // State to hide completed tasks

    const handleTambahTugas = () => {
        if (tugasBaru.length > 0) {
            const updateTugasBaru = [...daftarTugas, { id: Date.now(), namaTugas: tugasBaru, checked: false }];
            setDaftarTugas(updateTugasBaru);
            setTugasBaru("");
            console.log(updateTugasBaru);
        } else {
            alert("Tugas Harus Di isi");
        }
    };

    const handleToggleChecked = (id) => {
        const updatedTasks = daftarTugas.map(tugas => 
            tugas.id === id ? { ...tugas, checked: !tugas.checked } : tugas
        );
        setDaftarTugas(updatedTasks);
    };

    const handleDeleteTask = (id) => {
        const updatedTasks = daftarTugas.filter(tugas => tugas.id !== id);
        setDaftarTugas(updatedTasks);
    };

    return (
        <div className="container">
            <section id="judul">
                <p className="judul text-center fs-3 fw-bold mt-3" style={{ background: "yellow", border: "1px solid red" }}>
                    My To Do List
                </p>
            </section>

            <section id="input">
                <div className="row justify-content-center align-item center mb-3 ">
                    <div className="col-8">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Masukkan Tugas Baru'
                            value={tugasBaru}
                            onChange={(e) => setTugasBaru(e.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary" onClick={handleTambahTugas}>Tambah</button>
                    </div>
                </div>
            </section>

            <section id="list">
                {daftarTugas
                    .filter(tugas => !hideCompleted || !tugas.checked) 
                    .map((tugas) => {
                        return (
                            <div className="row" key={tugas.id}>
                                <div className="col-8 d-flex align-items-center ms-5">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={tugas.checked}
                                        onChange={() => handleToggleChecked(tugas.id)}
                                    />
                                    <label className={`ms-2 ${tugas.checked ? 'text-decoration-line-through green' : ''}`}>
                                        {tugas.namaTugas}
                                    </label>
                                </div>
                                <div className="col-2 text-center p-0">
                                    <button className="btn" onClick={() => handleDeleteTask(tugas.id)}>
                                        <FaTrashCan />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </section>

                
                <section id="hide">
                {daftarTugas.length > 0 ? (
                    <div className="mb-3 ms-5">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={hideCompleted}
                            onChange={() => setHideCompleted(!hideCompleted)} 
                        />
                        <label className="ms-2">Sembunyikan Tugas Selesai</label>
                    </div>
                ) : null}
            </section>

        </div>
    );
}

export default TodoApp;