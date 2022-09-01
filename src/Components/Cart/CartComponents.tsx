import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/store';
import { ShowHide } from '../../redux/products/productSlice';

import { Button, Offcanvas } from 'react-bootstrap';
import {Cart3} from 'react-bootstrap-icons'

import CartList from './CartList';
import CartTotal from './CartTotal';
import CartCount from './CartCount';

import './style.css';

export default function CartComponents() {

    const dispatch = useDispatch()
    const Show = useAppSelector(state => state.products.show)
    const cartCount = useAppSelector((state) => state.products.cartTotalProducts)

    const handleClose = () => dispatch(ShowHide(false));
    const handleShow = () => dispatch(ShowHide(true));

    return (
        <>
            <Button className='position-absolute top-0 end-0 m-1 me-3' variant="dark" onClick={handleShow} >
            <h3><Cart3/></h3>
            <span className="position-absolute top-100 start-100 translate-middle badge border border-warning rounded-circle bg-warning p-2">  {cartCount}</span>

            </Button >

            <Offcanvas show={Show} onHide={handleClose}  placement='end' >
                
                <Offcanvas.Body className='text-bg-dark' data-bs-scroll="true" data-bs-backdrop="false">

                    <CartCount />
                    <CartList />

                    <CartTotal />

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}


