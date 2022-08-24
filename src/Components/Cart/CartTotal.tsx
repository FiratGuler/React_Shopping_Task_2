import { useAppSelector } from '../../redux/store';
import {  Row } from 'react-bootstrap';

export default function CartTotal() {
    const cartTotalPrice = useAppSelector((state) => state.products.cartTotal)

    return (
        <Row className='p-5' md='3'>
            TOTAL: {cartTotalPrice.toFixed(2)}
        </Row>
    )
}
