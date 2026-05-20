 
import React, {useEffect, useState} from 'react'
import { listProducts, deleteProduct } from '../services/ProductService';

import { useNavigate } from 'react-router-dom';

const ListProductTableComponent = () => {
  const navigator = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();

  }, []);

  const getAllProducts = () => {
    listProducts()
      .then((response) => { 
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      }); 
  }

  const addNewProduct = () => {
    console.log("Add New Product");
    navigator("/add-product");
  }

  const updateProduct = (id) => {
    console.log(`Update Product: ${id}`);
    navigator(`/edit-product/${id}`);
  }

  const removeProduct = (id) => {
    console.log(`Delete Product: ${id}`);
    // You can implement the delete functionality here using the deleteProduct function from ProductService
     deleteProduct(id)
      .then((response) => {
        console.log("Product deleted successfully:", response.data);
        getAllProducts(); // Refresh the product list after deletion
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      }); 


  }

  return (
    <div className='container mt-4'>
      <h2 className="text-center">List of Products</h2>
      <div className='row col-2 d-flex justify-content-left'>
        <button type="button" className="btn btn-primary mb-2 ms-2" onClick={addNewProduct} >Add New Product</button>
      </div>
      <div className='row col-12 d-flex justify-content-center'>
        <table className="table table-striped table-hover table-bordered ms-4">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Description</th>  
            <th>Product Price</th>
            <th>Actions</th>
          </tr>
        </thead>  
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>  
              <td>${product.price.toLocaleString()}</td>
              <td>
                <button className="btn btn-primary" onClick={() => updateProduct(product.id)} >Update</button> { "  " }
                <button className="btn btn-danger ms-2"  onClick={() => removeProduct(product.id)} >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>  
      </div>    
 
    </div>
  )
}

export default ListProductTableComponent