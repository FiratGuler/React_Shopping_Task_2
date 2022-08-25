import { useAppSelector } from '../../redux/store';
import { Row, Col, Container, Button } from 'react-bootstrap';


export default function CartTotal() {
    const cartTotalPrice = useAppSelector((state) => state.products.cartTotalPrice)
    const cartw = useAppSelector((state) => state.products.cartArr.map((a) => a.quantity))


    return (
        <Container>
            <Row className='border border-warning'>
                <Col className='text-muted mt-3'>
                    <span>SUBTOTAL</span>
                </Col>
                <Col >
                    <span className='text-warning fs-5 float-end '> $ {cartTotalPrice.toFixed(2)}</span>
                    <br />
                    <span className='text-muted float-end'>  OR UP TO 3 x {((cartTotalPrice) / 3).toFixed(2)}</span>
                </Col>
            </Row>
            <Row>
                <Button onClick={()=>window.alert(`Checkout - Subtotal : ${cartTotalPrice.toFixed(2)}` )}>CHECKOUT</Button>
            </Row>
        </Container>
    )
}
