import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as booksAction from '../action/books';
import {setPoster} from '../actions/poster';
import App from '../components/App';


const mapStateToProps = ({poster}) => ({

    poster: poster.items,
    isReady: poster.isReady,
});

const mapDispatchToProps = dispatch => ({
    setPoster: function (poster) {
        dispatch(setPoster(poster))
    },

});
export default connect(mapStateToProps, mapDispatchToProps)(App);