import React, { useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import Header from '../assets/Pages/Header';
import SidebarComponent from '../assets/Pages/SidebarComponent';

function ProductList({ handleDelete, handleEdit, productList }) {
  const searchRef = useRef();
  const [textFilter, setTextFilter] = useState("");

  const filteredProducts = productList.filter((product) =>
    (product.product_name || "")
      .toLowerCase()
      .includes(textFilter.toLowerCase()) ||
    (product.product_brand || "")
      .toLowerCase()
      .includes(textFilter.toLowerCase())
  );

  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.product_name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.product_price,
      sortable: true,
    },
    {
      name: "Brand",
      selector: (row) => row.product_brand,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => (
        row.product_image?.url ? (
          <img
            src={row.product_image.url}
            alt="Product"
            width="50"
            height="50"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        ) : (
          "No Image"
        )
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            className="btn btn-danger btn-sm me-2"
            onClick={() => handleDelete(row.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => handleEdit(row.id)}
          >
            <i className="fa-solid fa-pen"></i>
          </button>
        </>
      ),
    },
  ];

  return (
    
    <div className="container ">
      <Header/>
    <SidebarComponent/>
     <div className="mt-5">
      <div className="w-75 mx-auto">
       <h2 className="mb-3">Product List</h2>
      <div className="d-flex justify-content-end align-items-center mb-3">
        <i className="fa-solid fa-magnifying-glass fs-5 me-2 text-secondary"></i>
        <input
          ref={searchRef}
          className="form-control w-25"
          type="text"
          placeholder="Search by name or brand"
          onChange={(e) => setTextFilter(e.target.value)}
        />
      </div>

      <DataTable
        title="All Products"
        columns={columns}
        data={filteredProducts}
        pagination
        highlightOnHover
        pointerOnHover
        responsive
        fixedHeader
        fixedHeaderScrollHeight="400px"
        striped
      />
     </div>
     </div>
    </div>
  );
}

export default ProductList;
