import React from 'react'

function TodoInput({ tugasBaru, setTugasBaru}) {
    
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



return (
    <>
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
    </>
)
}

export default TodoInput