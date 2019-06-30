import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { NavLink } from 'react-router-dom'


const FilmsDetails = (props) => {
  const { film } = props;
  if (film) {
    return (
        <div className="container section">
        <div className="row">
            <div className="col s3">
                <div className="card">
                    <div className="card-image">
                        <img className="responsive-img " src={film.img} alt={film.title}/>
                        <span className="card-title" style={{}}>{film.age}</span>
                    </div>
                    <div className="card-content">
                        <span className="card-title grey-text text-darken-4"><h6>{film.title}</h6></span>
                    </div>
                </div>
            </div>
            <div className="col s9 card-content grey-text text-darken-3">
                <h3>{film.title}</h3>
                <div style={{border: "1px solid red", padding: "20px"}}>{film.content}</div>
                <h4>Выбор сеанса</h4>

                    <div className="row">
                        <div className="col s2">
                          <p className="waves-effect waves-light btn">
                            <li><NavLink to='/hallo'>1400</NavLink></li>
                          </p>
                        </div>
                    </div>
                <div className="video-container">
                <iframe title={film.title} src={film.video} width="640" height="360" frameborder="0" allowfullscreen ></iframe>
                </div>
                </div>

        </div>
    </div>

    )
  } else {
    return (
      <div className="container center">
        <p>Loading films...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const films = state.firestore.data.film;
  const film = films ? films[id] : null
  return {
    film: film
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'film'
  }])
)(FilmsDetails)