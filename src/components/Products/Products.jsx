import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product'


const Products = ({products, onAddToCart}) => {
  
  if (!products.length) return <p>Loading...</p>;
  return (
        <main>
          <Grid container justify="center" style={{ marginTop: '65px', marginBottom:'45px',width:'97%', marginLeft:'auto', marginRight:'auto'}}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={4}  lg={4}>
              <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
        </main>
      );
    };
    
export default Products;

