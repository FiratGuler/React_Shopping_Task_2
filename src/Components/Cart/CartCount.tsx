import { useAppSelector } from '../../redux/store';
import { Row, Col, Container } from 'react-bootstrap';
import { Cart3 } from 'react-bootstrap-icons'


export default function CartCount() {

    const cartCount = useAppSelector((state) => state.products.cartTotalProducts)

    return (
        <Container>
            <Row className='p-5'>
                <Col></Col>
                <Col md='3' >
                    <span className="position-relative">
                        <h2><Cart3 /></h2>
                        <span className="position-absolute top-100 start-100 translate-middle badge border border-warning rounded-circle bg-warning p-2">
                              {cartCount}</span>
                    </span>
                </Col>
                <Col></Col>
            </Row>

        </Container>
    )
}
