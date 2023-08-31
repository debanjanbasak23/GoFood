import React, { useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'

export default function Card(props) {

    let dispatch = useDispatchCart();
    let data = useCart();

    let options = props.options;
    let priceOptions = Object.keys(options);

    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")

    const handleAddToCart = async () => {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: props.finalPrice, qty: qty, size: size })
        console.log(data)
    }

    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img className="card-img-top" src={props.foodItem.img} alt="no img" style={{ height: '120px', objectFit: 'fill' }} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <div className="container w-100" >
                        <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className="m-2 h-100 bg-success rounded" onChange={(e) => setSize(e.target.value)}>

                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}

                            {/* <option value="half">Half</option>
                                <option value="full">Full</option> */}

                        </select>
                        <div className="d-inline h-100 fs-5">
                            Total Price
                        </div>
                    </div>
                    <hr></hr>
                    <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart} >Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
