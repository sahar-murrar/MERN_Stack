import React from 'react'
import './styles/style.css'
import { Link } from '@reach/router';
const ProductList=(props) => {
    return (
        <div>
                {/* // return <div><p key={product._id}>Title: {product.title}, Price: {product.price} and Description: {product.description}</p><hr></hr></div> */}
             <table >
                <tr>
                  <th>Product Title</th>
                  <th>Price</th>
                  <th>Description</th>
                </tr>
                {props.products.map((product)=>{
               return <tr>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td><Link to={`/api/product/${product._id}`}>{product.description}</Link></td>
                </tr>
             
            })}
             </table>
        </div>
    )
}
export default ProductList;
