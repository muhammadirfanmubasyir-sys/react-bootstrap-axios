import React from 'react'
import { createProduct } from '../services/ProductService';

import {useNavigate} from 'react-router-dom';

const ProductComponent = () => {

  const [errors, setErrors] = React.useState({
    name: "",
    price: "",
    description: "" 
  });

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const navigator = useNavigate();

  const saveProduct = (e) => {
    e.preventDefault();
    const product = { name: name, price: price, description: description };
    console.log(product);

    if (!validateForm()) {
     // alert("Please fill in all required fields correctly.");
      return;
    }

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

  const validateForm = () => {
      let isValid = true;
      const errorsCopy = {... errors};

      if (!name.trim()) {
        errorsCopy.name = "Product name is required";
        isValid = false;
      }

      if (!price || price <= 0) {
        errorsCopy.price = "Product price is required";
        isValid = false;
      }

      if (!description.trim()) {
        errorsCopy.description = "Product description is required";
        isValid = false;
      }

      setErrors(errorsCopy);

      return isValid;
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
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                    />{errors.name && <div className="invalid-feedback d-flex justify-content-left">{errors.name}</div>}
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label d-flex justify-content-left'>Product Price:</label>
                    <input
                      type="number"
                      placeholder='Enter Product Price'
                      name="productPrice"
                      className={`form-control ${errors.price ? "is-invalid" : ""}`}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />{errors.price && <div className="invalid-feedback d-flex justify-content-left">{errors.price}</div>}
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label d-flex justify-content-left'>Product Description: </label>
                    <textarea
                      placeholder='Enter Product Description'
                      name="productDescription"
                      className={`form-control ${errors.description ? "is-invalid" : ""}`}  
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />{errors.description && <div className="invalid-feedback d-flex justify-content-left">{errors.description}</div>}  
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