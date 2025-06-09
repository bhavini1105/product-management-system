import React from 'react';
import Header from './Header';
import SidebarComponent from './SidebarComponent';

function Form({ handleChange, handleSubmit, productData, error, imgRef }) {
  return (
    <>
    <Header/>
    <SidebarComponent/>
      <div className="container mt-5 ">
        <div className="w-50 mx-auto">
          <h2 className="text-center mb-4">Add / Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">

            {/* Product Name */}
            <div className="col-md-6 mb-3">
              <label htmlFor="product_name" className="form-label fw-bold">
                Product Name
              </label>
              <input
                type="text"
                name="product_name"
                value={productData.product_name || ''}
                onChange={handleChange}
                className="form-control"
                id="product_name"
                placeholder="Enter product name"
              />
              {error.product_name && <span className="text-danger">{error.product_name}</span>}
            </div>

            {/* Product Price */}
            <div className="col-md-6 mb-3">
              <label htmlFor="product_price" className="form-label fw-bold">
                Product Price
              </label>
              <input
                type="text"
                name="product_price"
                value={productData.product_price || ''}
                onChange={handleChange}
                className="form-control"
                id="product_price"
                placeholder="Enter product price"
              />
              {error.product_price && <span className="text-danger">{error.product_price}</span>}
            </div>

            {/* Product Brand */}
            <div className="col-md-6 mb-3">
              <label htmlFor="product_brand" className="form-label fw-bold">
                Product Brand
              </label>
              <input
                type="text"
                name="product_brand"
                value={productData.product_brand || ''}
                onChange={handleChange}
                className="form-control"
                id="product_brand"
                placeholder="Enter brand name"
              />
              {error.product_brand && <span className="text-danger">{error.product_brand}</span>}
            </div>

            {/* Product Image */}
            <div className="col-md-6 mb-3">
              <label htmlFor="product_image" className="form-label fw-bold">
                Product Image
              </label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                ref={imgRef}
                className="form-control"
                id="product_image"
              />
              {error.file && <span className="text-danger">{error.file}</span>}
            </div>

            {/* Description */}
            <div className="col-md-12 mb-3">
              <label htmlFor="description" className="form-label fw-bold">
                Description
              </label>
              <textarea
                name="description"
                value={productData.description || ''}
                onChange={handleChange}
                className="form-control"
                id="description"
                rows="4"
              ></textarea>
              {error.description && <span className="text-danger">{error.description}</span>}
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3 mt-4">
            <button type="submit" className="btn btn-success">Submit</button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                imgRef.current.value = "";
              }}
            >
              Cancel
            </button>
          </div>
        </form>
        </div>
      </div>
    </>
  );
}

export default Form;
