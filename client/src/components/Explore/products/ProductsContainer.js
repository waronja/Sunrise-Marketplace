import React,{useState, useEffect} from 'react'
import Products from './Products'
import Spinner from '../common/spinner/Spinner'

const[products, setProducts] = useState([])
const[isServerSideError, setIsServerSideError] = useState(false)
const[serverSideError, setServerSideError] = useState('')
const[loading, setLoading] = useState(false)

const fetchProducts = () =>{
    fetch('http://localhost:3000/products')
    .then((response)=>response.json())
    .then((data)=>{
        setLoading(true)
        setProducts(data)
    })
}

useEffect(()=>{
    fetchProducts()
},[])

const productList = products.map((product)=>(
    <Products 
    key={product.id}
    product={product}
    />
))

const ProductsContainer = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
                {productList}
            </div>
        </div>

    </div>
  )
}

export default ProductsContainer