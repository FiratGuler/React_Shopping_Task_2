import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/store';
import { ShowHide } from '../../redux/products/productSlice';

import { Button, Offcanvas } from 'react-bootstrap';

import CartList from './CartList';
import CartTotal from './CartTotal';
import CartCount from './CartCount';

export default function CartComponents() {

    const dispatch = useDispatch()
    const Show = useAppSelector(state => state.products.show)


    const handleClose = () => dispatch(ShowHide(false));
    const handleShow = () => dispatch(ShowHide(true));

    return (
        <>
            <Button className='float-end' variant="dark" onClick={handleShow} >
                Cart
            </Button >

            <Offcanvas show={Show} onHide={handleClose} placement='end'>
                <Offcanvas.Body className='text-bg-dark'>

                    <CartCount />
                    <CartList />
                    <CartTotal />

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}


