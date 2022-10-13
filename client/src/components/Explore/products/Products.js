import React,{useState, useEffect}from 'react'
import box from './schoolbox.png'
import './product.css'
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import { Spinner } from '../spinner/Spinner';

const Products = ({product}) => {

    const[popularity, setPopularity] = useState(0)

    const updatePopularity =()=>{
        setPopularity(popularity +1)
    }


  return (
    <div className='container mt-3'>
        <h5 className='display-4 header'>Latest Products</h5>
        <div className='cat-section bg-dark pt-3'>
        <div className='justify-content-center d-flex mb-3 pb-3'> 
           <button className='btn btn-outline-primary mx-3'>All</button>
           <button className='btn btn-outline-primary mx-2'>Utensils</button>
           <button className='btn btn-outline-primary mx-2'>Gates</button>
         <button className='btn btn-outline-primary mx-2'>Furniture</button>
         <button className='btn btn-outline-primary mx-2'>Kitchen Items</button>
         </div>
        </div>
        <div className='row'>

            <Spinner/>
            
        <div className='col-md-3'>
                <div className='card shadow my-2  mt-5 ml-3' style={{width: "18"}}>
                    <img src={box} class="card-img-top" style={{ height: "250px"}} alt="schoolbox"/>
                    <h3 className='card-title'>School Box</h3>
                    <p className='card-text'>kshs.500</p>
                    <div className='btns'>
                    <button type='button' className='btn btn-success' onClick={updatePopularity}>{popularity} <PermPhoneMsgOutlinedIcon/>Seller</button>

                    <a href='http://localhost:3000' className='btn btn-warning'>view details</a>
                    </div>
                   
                </div>
            </div>

            
            <div className='col-md-3 '>
                <div className='card shadow my-2  mt-5 ml-3' style={{width: "18"}}>
                    <img src={box} class="card-img-top" style={{ height: "250px"}} alt="schoolbox"/>
                    <h3 className='card-title'>School Box</h3>
                    <p className='card-text'>kshs.500</p>
                    <div className='btns'>
                    <button type='button' className='btn btn-success' onClick={updatePopularity}>{popularity} <PermPhoneMsgOutlinedIcon/>Seller</button>

                    <a href='http://localhost:3000' className='btn btn-warning'>view details</a>
                    </div>
                   
                </div>
            </div>

            
            <div className='col-md-3'>
                <div className='card shadow my-2  mt-5 ml-3' style={{width: "18"}}>
                    <img src={box} class="card-img-top" style={{ height: "250px"}} alt="schoolbox"/>
                    <h3 className='card-title'>School Box</h3>
                    <p className='card-text'>kshs.500</p>
                    <div className='btns'>
                    <button type='button' className='btn btn-success' onClick={updatePopularity}>{popularity} <PermPhoneMsgOutlinedIcon/>Seller</button>

                    <a href='http://localhost:3000' className='btn btn-warning'>view details</a>
                    </div>
                   
                </div>
            </div>

            <div className='col-md-3'>
                <div className='card shadow my-2  mt-5 ml-3' style={{width: "18"}}>
                    <img src={box} class="card-img-top" style={{ height: "250px"}} alt="schoolbox"/>
                    <h3 className='card-title'>School Box</h3>
                    <p className='card-text'>kshs.500</p>
                    <div className='btns'>
                    <button type='button' className='btn btn-success' onClick={updatePopularity}>{popularity} <PermPhoneMsgOutlinedIcon/>Seller</button>

                    <a href='http://localhost:3000' className='btn btn-warning'>view details</a>
                    </div>
                   
                </div>
            </div>

            <div className='col-md-3'>
                <div className='card shadow my-2  mt-5 ml-3' style={{width: "18"}}>
                    <img src={box} class="card-img-top" style={{ height: "250px"}} alt="schoolbox"/>
                    <h3 className='card-title'>School Box</h3>
                    <p className='card-text'>kshs.500</p>
                    <div className='btns'>
                    <button type='button' className='btn btn-success' onClick={updatePopularity}>{popularity} <PermPhoneMsgOutlinedIcon/>Seller</button>

                    <a href='http://localhost:3000' className='btn btn-warning'>view details</a>
                    </div>
                   
                </div>
            </div>

            
            <div className='col-md-3 '>
                <div className='card shadow my-2  mt-5 ml-3' style={{width: "18"}}>
                    <img src={box} class="card-img-top" style={{ height: "250px"}} alt="schoolbox"/>
                    <h3 className='card-title'>School Box</h3>
                    <p className='card-text'>kshs.500</p>
                    <div className='btns'>
                    <button type='button' className='btn btn-success' onClick={updatePopularity}>{popularity} <PermPhoneMsgOutlinedIcon/>Seller</button>

                    <a href='http://localhost:3000' className='btn btn-warning'>view details</a>
                    </div>
                   
                </div>
            </div>

            
            <div className='col-md-3'>
                <div className='card shadow my-2  mt-5 ml-3' style={{width: "18"}}>
                    <img src={box} class="card-img-top" style={{ height: "250px"}} alt="schoolbox"/>
                    <h3 className='card-title'>School Box</h3>
                    <p className='card-text'>kshs.500</p>
                    <div className='btns'>
                    <button type='button' className='btn btn-success' onClick={updatePopularity}>{popularity} <PermPhoneMsgOutlinedIcon/>Seller</button>

                    <a href='http://localhost:3000' className='btn btn-warning'>view details</a>
                    </div>
                   
                </div>
            </div>

            <div className='col-md-3'>
                <div className='card shadow my-2  mt-5 ml-3' style={{width: "18"}}>
                    <img src={box} class="card-img-top" style={{ height: "250px"}} alt="schoolbox"/>
                    <h3 className='card-title'>School Box</h3>
                    <p className='card-text'>kshs.500</p>
                    <div className='btns'>
                    <button type='button' className='btn btn-success' onClick={updatePopularity}>{popularity} <PermPhoneMsgOutlinedIcon/>Seller</button>

                    <a href='http://localhost:3000' className='btn btn-warning'>view details</a>
                    </div>
                   
                </div>
            </div>

            


        </div>
    </div>
    // <div className='card shadow'>
    //     <div className='card-body'>
    //         <h3 className='card-title'>{product.title}</h3>
    //         <p className='card-text'>{product.price}</p>
    //         <button type='button' className='btn btn-success' onClick={updatePopularity}>{product.vendor.contact} 0729079809</button>
    //     </div>

    // </div>
  )
}

export default Products