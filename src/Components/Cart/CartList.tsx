import { useAppSelector, useAppDispatch } from '../../redux/store';
import { Row, Col, Card, Button } from 'react-bootstrap';


import { QuantityIncrease, QuantityDecrease,DeleteCartProduct } from "../../redux/products/productSlice"

export default function CartList() {
    const dispatch = useAppDispatch()

    const cart = useAppSelector((state) => state.products.cartArr)





    return (
        <>
            {cart.length > 0 ? <Row>
                {cart.map((cart) => (
                    <Col key={cart.id} className='p-0'>
                        <Button size='sm' className='float-end' onClick={()=>dispatch(DeleteCartProduct(cart.id))}>x</Button>
                        <Card className='w-100 ps-3 border-0 border-top border-dark rounded-0 bg-dark '>

                            <Row>
                                <Col md='2'>

                                    <Card.Img variant="start" src={cart.image} height='100px' width='60px' />

                                </Col>
                                <Col md='10'>
                                    <Card.Body className='mx-auto fs-6'>
                                        <Card.Title>{cart.title}</Card.Title>
                                        <Card.Text className='fs-6 text-muted'>
                                            {cart.category}<br />
                                            Quantity:{cart.quantity}
                                            <span className="text-warning float-end">
                                                ${cart.price}<br />
                                                <Button size='sm' variant='outline-secondary' onClick={() => dispatch(QuantityDecrease(cart.id))}>-</Button>
                                                <Button size='sm' variant='outline-secondary' onClick={() => dispatch(QuantityIncrease(cart.id))}>+</Button>

                                            </span>

                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
                :
                <div className='text-center'>
                    <span>
                        Add some products in the cart <br /> :) </span>
                </div>}

        </>

    )
}
