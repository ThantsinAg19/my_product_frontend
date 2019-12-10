import { connect } from 'react-redux'
import App from '../components/App';
import { fetchProduct } from '../modules/products';

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        fetchProduct: () => dispatch(fetchProduct()),
    })
)(App)