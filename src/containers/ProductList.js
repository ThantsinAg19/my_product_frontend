import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { } from '../modules/products';

export default connect(
    (state) => ({
        products: state.products.rows,
        loading: state.products.loading,
        error: state.products.error
    }),
    (dispatch)=>({

    })
)(ProductList)