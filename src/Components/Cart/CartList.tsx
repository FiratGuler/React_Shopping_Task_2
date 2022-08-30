import { useAppSelector, useAppDispatch } from '../../redux/store';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import {XLg,Dash,PlusLg} from 'react-bootstrap-icons'

import { QuantityIncrease, QuantityDecrease, DeleteCartProduct } from "../../redux/products/productSlice"

export default function CartList() {
    const dispatch = useAppDispatch()

    const cart = useAppSelector((state) => state.products.cartArr)





    return (
        <>

            {cart.length > 0 ?

                <Container>
                    {cart.map((cart) => (

                        <Row key={cart.id} className='mb-4'>
                            <Col sm='3'>
                                <Card.Img variant="start" src={cart.image} height='100px' width='60px' />
                            </Col>
                            <Col sm='9'>
                                <Row>
                                    <Col sm='9' className='p-0'>
                                        <Card className='border-0 border-top border-dark rounded-0 bg-dark '>

                                            <Card.Body className='p-0 fs-6'>
                                                <Card.Title>{cart.title.substring(0, 12)}</Card.Title>
                                                <Card.Text className='fs-6 text-muted'>
                                                    {cart.category}<br />
                                                    Quantity:{cart.quantity}
                                                </Card.Text>
                                            </Card.Body>


                                        </Card>
                                    </Col>

                                    <Col sm='3' className='p-0'>
                                        <Row>
                                            <Col><Button size='sm' variant='bacground-dark text-black' className='border-dark float-end'  onClick={() => dispatch(DeleteCartProduct(cart.id))}><XLg/></Button></Col>

                                            <Col> <p  className='float-end text-warning mb-2 mt-2'>${cart.price}</p></Col>
                                            <Col>
                                                <Button size='sm' variant='bacground-dark text-white' className='float-end p-1 border-dark'  onClick={() => dispatch(QuantityIncrease(cart.id))}><PlusLg/></Button>
                                                <Button size='sm' variant='bacground-dark text-white' 
                                                className={cart.quantity === 0 ? 'float-end disabled p-1 border-dark' : 'float-end p-1 border-dark'}  
                                                onClick={() => dispatch(QuantityDecrease(cart.id))}><Dash/></Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                           
                        </Row>
                    ))}
                </Container>
                :
                <div className='text-center'>
                    <span>
                        Add some products in the cart <br /> :) </span>
                </div>}


        </>

    )
}
