import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import AdminPanel from './assets/Pages/AdminPanel'
import Home from './assets/Pages/Home'
import Form from './assets/Pages/Form'
import axios from 'axios'
import ProductList from './Components/ProductList'
import Header from './assets/Pages/Header'
import SidebarComponent from './assets/Pages/SidebarComponent'


function App() {

  let URL = "http://localhost:5001/product"

  const [productData, setProductData] = useState({});
  const [productList, setProductList] = useState([]);
  const [editId, setEditId] = useState("");
  const [error, setError] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const imgRef = useRef();


  const navigate = useNavigate()

  useEffect(() => {
    handleFetch();
  }, [])

  const handleFetch = async () => {
    let res = await axios.get(URL);
    setProductList(res.data);
    setEditId("");
    setProductData({});
  };


  const validation = () => {
    let errors = {};
    if (!productData.product_name)
      errors.product_name = "*Product Name is required";
    if (!productData.product_price)
      errors.product_price = "*Product Price is required";
    if (!productData.description) errors.description = "*Description is required";

    setError(errors);
    return Object.keys(errors).length === 0;
  };


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const product_image = {
            name: file.name,
            type: file.type,
            url: reader.result,
          };
          setProductData((prev) => ({ ...prev, product_image }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setProductData((prev) => ({ ...prev, [name]: value }));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validation()) return;

    if (editId === "") {
      await axios.post(URL, { ...productData, id: String(Date.now()) });
    } else {
      let res = await axios.put(`${URL}/${editId}`, { ...productData });
    }
    handleFetch();

    setProductData({});
    setEditId("");
    imgRef.current.value = "";
    navigate('/product');

  }

  const handleDelete = async (id) => {
    await axios.delete(`${URL}/${id}`);
    handleFetch();
  };

  const handleEdit = (id) => {
    let user = productList.find((item) => item.id === id);
    if (!user) return;

    setEditId(id);
    setProductData(user);
    navigate('/form');
  };

  return (
    <>


      <Routes>

        <Route path='/'
          element={
            <Home
              productList={productList}
              cartItems={cartItems}        
              setCartItems={setCartItems}
            />
          }
        />


        <Route path='/dashboard'
          element={<AdminPanel />}
        />

        <Route path='/form'
          element={<Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            productData={productData}
            error={error}
            imgRef={imgRef}
          />}
        />

        <Route path='/product'
          element={
            <ProductList
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              productList={productList}
            />
          }
        />


      </Routes>


    </>
  )
}

export default App
