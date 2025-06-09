import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const URL = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let res = await axios.get(URL);
    setProducts(res.data);
  };

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <>
      {/* Navbar (simple) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
        <div className="container">
          <a className="navbar-brand text-white" href="/">Flipkart Demo</a>
           <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item text-white">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item text-white">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item text-white">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="ms-auto text-white">
            Cart Items: {cartItems.length}
          </div>
        </div>
      </nav>

      {/* Products Grid */}
      <div className="container mt-4">
        <div className="row">
          {products.slice(0, 21).map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "contain", padding: "10px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title" style={{ minHeight: '3em' }}>{product.title}</h6>
                  <p className="card-text text-truncate" style={{ flexGrow: 1 }}>
                    {product.description}
                  </p>
                  <p className="card-text fw-bold text-success">${product.price}</p>
                  <button 
                    className="btn btn-warning mt-auto"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
