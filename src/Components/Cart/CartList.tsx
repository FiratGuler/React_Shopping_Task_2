import { useAppSelector } from '../../redux/store';
import { Row, Col, Card } from 'react-bootstrap';




export default function CartList() {
    const cart = useAppSelector((state) => state.products.cartArr)
    return (
        <>
            
            <Row>
                {cart.map((cart) => (
                    <Col key={cart.id} className='p-0'>
                        <Card className='w-100 ps-3 border-0 border-top border-dark rounded-0 bg-dark '>
                            <Row>
                                <Col md='2'>
                                    <Card.Img variant="start" src={cart.image} height='100px' width='60px' />
                                </Col>
                                <Col md='10'>
                                    <Card.Body className='mx-auto fs-6'>
                                        <Card.Title>{cart.title}</Card.Title>
                                        <Card.Text className='fs-6'>
                                            {cart.category}
                                            <span className="text-warning float-end">${cart.price}</span>

                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>

    )
}
