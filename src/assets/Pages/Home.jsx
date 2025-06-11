import React, { useEffect, useState } from 'react';
import "../../App.css";
import { Link } from 'react-router';

function Home({ productList = [], cartItems = [], setCartItems }) {
  const [textFilter, setTextFilter] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setSortedData(productList);
  }, [productList]);


  const filteredProducts = sortedData.filter((product) =>
    (product.product_name || "").toLowerCase().includes(textFilter.toLowerCase()) ||
    String(product.product_price).includes(textFilter)
  );

  const cartTotal = cartItems.reduce((total, item) => total + Number(item.product_price), 0);

  const handleSort = (order) => {
    const sorted = [...filteredProducts].sort((a, b) =>
      order === 'asc'
        ? a.product_price - b.product_price
        : b.product_price - a.product_price
    );
    setSortedData(sorted);
  };


  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter(item => item.id !== productId));
  };


  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top" >
        <div className="container-fluid" >
          <a className="navbar-brand" href="#" style={{ fontSize: '20px'  }}>🛍 Shopify</a>
          <form className="d-flex ms-auto me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products"
              value={textFilter}
              onChange={(e) => setTextFilter(e.target.value)}
            />
          </form>
          <button className="btn btn-outline-primary me-2" onClick={() => setShowCart(!showCart)} style={{ fontSize: '18px'  }}>
            🛒 Cart ({cartItems.length})
          </button>
          <button className='btn btn-outline-primary' style={{ fontSize: '18px'  }}><Link to="/login" className='text-none'>Login</Link></button>
        </div>
      </nav>

      <div className="container-fluid mt-4">
        <div className="row">

      
          <div className="col-md-3">
            <div className="sidebar p-3 border rounded shadow-sm bg-light">
              <h5>Sort By</h5>
              <button className="btn btn-outline-primary mb-2 w-100" onClick={() => handleSort('asc')}>Price Low to High</button>
              <button className="btn btn-outline-primary mb-4 w-100" onClick={() => handleSort('desc')}>Price High to Low</button>

              <h5>Categories</h5>
              <ul className="list-group">
                <li className="list-group-item">Men</li>
                <li className="list-group-item">Women</li>
                <li className="list-group-item">Kids</li>
                <li className="list-group-item">Accessories</li>
              </ul>
            </div>
          </div>

      
          <div className="col-md-6">
            <div className="row">
              {filteredProducts.length === 0 ? (
                <p className="text-center text-danger">No products found.</p>
              ) : (
                filteredProducts.map((product) => (
                  <div className="col-md-6 mb-4" key={product.id}>
                    <div className="card h-100 shadow-sm">
                      <img
                        src={product.product_image?.url}
                        alt={product.product_name}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "contain", padding: "10px" }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h6 className="card-title">{product.product_name}</h6>
                        <p className="card-text text-truncate">{product.description}</p>
                        <p className="card-text fw-bold text-success">₹{product.product_price}</p>
                        <button
                          className="btn btn-warning mt-auto"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="col-md-3">
            {showCart && (
              <div className="cart p-3 border rounded shadow-sm bg-white">
                <h5>Your Cart</h5>
                {cartItems.length === 0 ? (
                  <p>No items yet</p>
                ) : (
                  <>
                    <ul className="list-group mb-3">
                      {cartItems.map((item, index) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                          <div>
                            {item.product_name}
                            <br />
                            <small className="text-muted">₹{item.product_price}</small>
                          </div>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
      
                    <h6 className="text-end">
                      Total: <span className="text-success">₹{cartTotal}</span>
                    </h6>
                    <button className="btn btn-success w-100 mt-2">Checkout</button>
                  </>
                )}
              </div>
            )}
          </div>



        </div>
      </div>
    </>
  );
}

export default Home;
