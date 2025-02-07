import React from 'react'

function TodoHideList({hideCompleted, setHideCompleted}) {
return (
    <>
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
</section>  </>
)
}

export default TodoHideList