import { useAppSelector } from '../../redux/store';
import { Row, Col } from 'react-bootstrap';

export default function CartTotal() {
    const cartTotalPrice = useAppSelector((state) => state.products.cartTotal)

    return (
        <Row className='border border-warning'>
            <Col className='text-muted mt-3'>
                <span>SUBTOTAL</span>
            </Col>
            <Col >
                <span className='text-warning fs-5 float-end '> $ {cartTotalPrice.toFixed(2)}</span>
                <br/>
                <span className='text-muted float-end'>  OR UP TO 3 x {((cartTotalPrice) / 3).toFixed(2)}</span>
            </Col>

        </Row>
    )
}
