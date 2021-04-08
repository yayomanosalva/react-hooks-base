import React, { useState } from 'react'
import uniqid from 'uniqid'

const ListadoNombres = () => {

    const [nombre, setNombre] = useState('')
    const [listnombres, setListnombres] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const addNombre = (e) => {
        e.preventDefault()
        if (!nombre.trim()) { setError('Campo vacío'); return }
        const nuevoNombre = {
            id: uniqid(),
            tituloNombre: nombre
        }
        setListnombres([...listnombres, nuevoNombre])
        setNombre('')
        setError(null)
    }

    const deleteNombre = (id) => {
        const nuevoArray = listnombres.filter(item => item.id !== id)
        setListnombres(nuevoArray)
    }

    const editar = (item) => {
        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }

    const editNombre = (e) => {
        e.preventDefault()
        const nuevoArray = listnombres.map(item => item.id === id ? { id: id, tituloNombre: nombre } : item)
        setListnombres(nuevoArray)
        setModoEdicion(false)
        setNombre('')
    }
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h2>Listado de Nombres </h2>
                    <ul className="list-group">
                        {
                            listnombres.map(
                                item => <li key="{item.id}" className="list-group-item">{item.tituloNombre}
                                    <button className="btn btn-danger float-right" onClick={() => { deleteNombre(item.id) }}>Borrar</button>
                                    <button className="btn btn-info float-right" onClick={() => { editar(item) }}>Editar</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir Nombres</h2>
                    <form onSubmit={modoEdicion ? (e) => editNombre(e) : (e) => addNombre(e)} className="form-group">
                        {error != null ? <div className="alert alert-danger"> {error} </div> : <div></div>}
                        <input type="text"
                            className="form-control mb-3"
                            onChange={(e) => { setNombre(e.target.value) }}
                            placeholder="introduce el nombre"
                            value={nombre}
                        />

                        <input type="submit"
                            className="btn btn-info btn-block"
                            value={modoEdicion ? 'Editar Nombre' : 'Regitrar Nombre'} />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ListadoNombres