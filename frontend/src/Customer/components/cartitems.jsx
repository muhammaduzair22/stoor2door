import { useState, useEffect, useContext } from "react";
import "./menuitems.css";
import { Modal } from 'react-bootstrap';
import { CartContext } from '../screen/cartContext';

export default function Cartitem({ menuitem }) {
    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { removeFromCart } = useContext(CartContext);
    const handleRemoveItem = (itemId) => {
        removeFromCart(itemId);
    };
    return (
        <div>
            <h1 className="abc">{menuitem.itemName}</h1>
            <hr />
            <div className="zoom" onClick={handleShow}>
                <img src={menuitem.itemImg} className="img-fluid" style={{ height: '200px', width: '200px' }} />
            </div>
            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <p ><b>Price:</b></p>
                    <h1 className="pr">{menuitem.itemPrice * quantity} Rs/-</h1>
                </div>

                <div className='w-100'>
                    <p><b>Quantity:</b></p>
                    <select className="form-control" value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="m-1 w-100 butt">
                <button className="btn" onClick={() => handleRemoveItem(menuitem.itemName)} >Delete</button>
            </div>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>{menuitem.itemName}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={menuitem.itemImg} className="img-fluid" style={{ height: '200px', width: '200px' }} />
                    <br />
                    <p>{menuitem.itemDescription}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>

        </div>

    );
};
