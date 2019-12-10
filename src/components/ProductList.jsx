import React from 'react';
import { Container,Box } from '@material-ui/core';
import {withRouter} from 'react-router-dom'
const ProductList = ({ products, loading, error }) => {
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                { products.map((product, index) => (
                    <Box key={ index }>
                        Product { index + 1 }
                    </Box>
                )) }
            </Container>
        </React.Fragment>
    )
}

export default withRouter(ProductList);