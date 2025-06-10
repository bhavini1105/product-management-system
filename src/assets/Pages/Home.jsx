import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import "../../App.css";

function Home() {

  const productRef = useRef();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [textFilter, setTextFilter] = useState("");

  const filteredProducts = products.filter((product) =>
  (product.title || "").toLowerCase().includes(textFilter.toLowerCase()) ||
  String(product.price).includes(textFilter)
);

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

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-4">
          <a className="navbar-brand fw-bold text-primary" href="#">Flipkart <span className="text-warning">Explore Plus</span></a>
          <form className="d-flex mx-auto">
            <input
              className="form-control search-box"
              type="search"
              value={textFilter}
              onChange={(e) => setTextFilter(e.target.value)}
              placeholder="Search for Products, Brands and More"
              aria-label="Search"
            />

          </form>
          <div>
            <a href="#" className="me-4 text-dark text-decoration-none">Login</a>
            <a href="#" className="me-4 text-dark text-decoration-none">Cart</a>
            <a href="#" className="text-dark text-decoration-none">Become a Seller</a>
          </div>
        </div>
      </nav>



      <div className="container mt-4">
        <div className="row">
          {filteredProducts.slice(0, 21).map((product) => (
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
