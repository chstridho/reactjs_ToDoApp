import React from 'react'
import TodoTitle from './todoTitle'
import TodoInput from './todoInput'
import TodoListTugas from './todoListTugas'
import TodoHideList from './todoHideList'


function Container() {
    const [tugasBaru, setTugasBaru] = useState("");
    const [daftarTugas, setDaftarTugas] = useState([]);
    const [hideCompleted, setHideCompleted] = useState(false); 

    
return (
    <div className="container">
        <TodoTitle/>
        
        <TodoInput
        tugasBaru={tugasBaru}
        setTugasBaru={setTugasBaru}/>

        <TodoListTugas
        daftarTugas={daftarTugas}
        setDaftarTugas={setDaftarTugas}/>

        <TodoHideList
        hideCompleted={hideCompleted}
        setHideCompleted={setHideCompleted}/>
    </div>
)
}

export default Container