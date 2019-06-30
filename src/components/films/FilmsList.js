import React from 'react';
import FilmsWrapper from './FilmsWrapper'
import { Link } from 'react-router-dom'


const FilmsList = ({films}) => {
    return(
        <div className="section">
           {films && films.map(film =>{
               return(
                <Link to={'/films/' + film.id} key={film.id}>
                        <FilmsWrapper film={film} key={film.id} />
                    </Link>
               )
           })}
        </div>
    )
}

export default FilmsList