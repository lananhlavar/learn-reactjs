import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { STATIC_HOST } from 'constants/index';
import { THUMBNAIL_PLACEHOLDER } from 'constants/index';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;

  return (
    <Box padding={1}>
      <Box padding={1}>
        <img width=" 100%" src={thumbnailUrl} alt={product.name} />
      </Box>
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1} >
          
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
            </Box>
        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%`:''}
      </Typography>
    </Box>
  );
}

export default Product;
