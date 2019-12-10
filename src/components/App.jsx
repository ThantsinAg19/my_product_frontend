import React from 'react'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {BrowserRouter,Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import { CssBaseline,Box } from '@material-ui/core';
import ProductList from '../containers/ProductList';
const App = ({fetchProduct})=>{
    const isFirstRef = React.useRef(true);

    React.useEffect(()=>{
        if(isFirstRef.current){
            isFirstRef.current = false;
        }
        fetchProduct()
    })

    const contents = (
        <BrowserRouter>
            <CssBaseline/>
            <Box display="flex">
                {/* <Header/> */}
                    <Route exact path="/" render={()=>{
                        return <ProductList/>;
                    }}/>
            </Box>

        </BrowserRouter>
    )

    return (
        <MuiThemeProvider>
            <BrowserRouter>
                <CssBaseline/>
                {contents}
            </BrowserRouter>
        </MuiThemeProvider>
    )
}

App.prototype ={
    fetchProduct : PropTypes.func
}

export default App