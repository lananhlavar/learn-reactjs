import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import productApi from './../../../api/productApi';
const useStyles = makeStyles(theme => ({
    root:{},
    left: {
        width:'250px'
    },
    right: {
        flex: ' 1 1 0'
    },
}))




function ListPage(props) {
    const classes = useStyles()
    const [productList, setProductList] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const {data} = await productApi.getAll({_page:1, _limit:10})
            setProductList(data)
            } catch (error) {
                console.log('Fail to fetch product list:',error);
                
            }
            setLoading(false)
        })()

    },[])
    return (
        <Box>
            <Container>
            <Grid container spacing={1}> 
                <Grid className={classes.left} item>
                <Paper elevation={0}>Left Column</Paper>
                </Grid>
                <Grid className={classes.right} item>
                    
                    <Paper elevation={0}>
                        {loading ? <ProductSkeletonList/> : <ProductList data={productList}/>}
                    </Paper>
                    
                </Grid>
            </Grid>

            </Container>
        </Box>
    );
}

export default ListPage;