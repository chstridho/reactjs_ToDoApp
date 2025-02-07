import React from 'react'
import { FaTrashCan } from 'react-icons/fa6';

function TodoListTugas({daftarTugas, setDaftarTugas}) {

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
    <>
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
    </>
)
}

export default TodoListTugas