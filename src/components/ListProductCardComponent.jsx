import React from 'react'

const ListProductCardComponent = () => {

  const products = [
    {
        "id": "69e72b8d83ff1573a7a0a4a5",
        "name": "IPhone 80",
        "description": "OK",
        "price": 80000
    },
    {
        "id": "69e72bc683ff1573a7a0a4a6",
        "name": "IPhone 81 - BISMILLAH",
        "description": "OK - SABAR",
        "price": 818181
    },
    {
        "id": "69e8275a2b43da9a3e1cc867",
        "name": "IPhone 79",
        "description": "OK",
        "price": 79000
    },
    {
        "id": "77e8275a2b43da9a3e1cc331",
        "name": "IPhone 78",
        "description": "OK",
        "price": 78000
    }
]

  return (
    <div>
      <h2 className="text-center">List of Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-6" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListProductCardComponent