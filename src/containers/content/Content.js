import { connect } from 'react-redux';
import {setPoster} from '../../actions/poster';
import Content from '../../components/content/Content';


const mapStateToProps = ({poster}) => ({

    poster: poster.items,
    isReady: poster.isReady,
});

const mapDispatchToProps = dispatch => ({
    setPoster: function (poster) {
        dispatch(setPoster(poster))
    },

});
export default connect(mapStateToProps, mapDispatchToProps)(Content);