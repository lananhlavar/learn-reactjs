import { Box, Container, Grid, Pagination, Paper } from '@mui/material';
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
    const [pagination,setPagination] = useState({
        total:10, 
        limit:9,
        page:1,
    })

    const [loading,setLoading] = useState(true)
    const [filters,setFilters] = useState({
        _page:1,
         _limit:9,
    })

    useEffect(() => {
        (async () => {
            try {
                const {data,pagination} = await productApi.getAll(filters)
            setProductList(data)
            setPagination(pagination)
            
            } catch (error) {
                console.log('Fail to fetch product list:',error);
                
            }
            setLoading(false)
        })()

    },[filters])
    const handlePageChange =(e, page) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            _page:page,
        }))

    }
    return (
        <Box>
            <Container>
            <Grid container spacing={1}> 
                <Grid className={classes.left} item>
                <Paper elevation={0}>Left Column</Paper>
                </Grid>
                <Grid className={classes.right} item>
                    
                    <Paper elevation={0}>
                        {loading ? <ProductSkeletonList length={9}/> : <ProductList data={productList}/>}
                        <Pagination 
                        count={Math.ceil(pagination.total / pagination.limit)}
                         page={pagination.page} 
                         color="primary"
                         onChange={handlePageChange}
                         ></Pagination>
                    </Paper>
                    
                </Grid>
            </Grid>

            </Container>
        </Box>
    );
}

export default ListPage;