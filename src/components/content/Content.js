import React, { Component } from 'react'
import FilmsList from '../films/FilmsList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Content extends Component {
    render(){
        //console.log(this.props);
        const { films } = this.props;
        return(
            <div className="container">
                  <div className="row">
                        <FilmsList films={films}/>
                  </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        films: state.firestore.ordered.film
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'film'}
    ])
)(Content)