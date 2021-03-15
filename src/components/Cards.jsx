import React from 'react'

const Cards = (props) => {
    //extraemos todas las props con object Destructuring
    const { imagen, title, texto } = props
    const styles = {
        with: "10rem",
        border: "1px solid red"
    }
    return (
        <div className="card" style={styles}>
            <img className="card-img-top" src={imagen} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title"> {title}</h5>
                <p className="card-text">{texto}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Cards