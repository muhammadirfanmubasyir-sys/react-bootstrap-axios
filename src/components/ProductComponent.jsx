import React from 'react'
import { createProduct } from '../services/ProductService';

import {useNavigate} from 'react-router-dom';

const ProductComponent = () => {

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const navigator = useNavigate();

  const saveProduct = (e) => {
    e.preventDefault();
    const product = { name: name, price: price, description: description };

    console.log(product);

    createProduct(product)
      .then((response) => {
        console.log("Product created successfully:", response.data);
        // Optionally, you can reset the form fields here
        setName("");
        setPrice(0);
        setDescription("");

        navigator("/products");
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      }); 
  }  

  return (
     <div className="container col-md-8 offset-md-2 offset-md-2">
        <div className="row" style={{ display: "flex", justifyContent: "center" }}>
            <div className='card col-md-6'>
              <h2 className='text-center'>Add New Product</h2>
              <div className='card-body'>
                <form>
                  <div className='form-group mb-2'>
                    <label className='form-label d-flex justify-content-left'>Product Name:</label>
                    <input
                      type="text"
                      placeholder='Enter Product Name'
                      name="productName"
                      className='form-control'
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label d-flex justify-content-left'>Product Price:</label>
                    <input
                      type="number"
                      placeholder='Enter Product Price'
                      name="productPrice"
                      className='form-control'
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label d-flex justify-content-left'>Product Description: </label>
                    <textarea
                      placeholder='Enter Product Description'
                      name="productDescription"
                      className='form-control'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <button className='btn btn-success' onClick={(e) => saveProduct(e)}>Save Product</button> 
                </form>
              </div>  
            </div>
        </div>
     </div>    
  )
}

export default ProductComponent