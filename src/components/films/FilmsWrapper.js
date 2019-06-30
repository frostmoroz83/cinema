import React from 'react'



const FilmsWrapper = ({film}) => {
    return(
        <div className="col m4 l3 card-content grey-text text-darken-3">
        <div className="card large sticky-action hoverable">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="responsive-img activator" src={film.img} alt={film.title}/>
                <span className="card-title" style={{}}>{film.age}</span>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4"><h6>{film.title}</h6></span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><i
                    className="material-icons right">close</i></span>
                <p>{film.content}</p>
            </div>
            <div className="card-action">
                <div>Купить билет на фильм</div>
            </div>

        </div>
    </div>
    )
}

export default FilmsWrapper





