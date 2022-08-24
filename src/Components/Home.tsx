import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CartComponents from './Cart/CartComponents';
import FilterComponents from './FilterComponents'
import ProductComponents from './ProductComponents'

export default function Home() {
    return (
        <Container>
            <Row md="1" className='fixed-top'>
                <Col>
                    <CartComponents/>
                </Col>
            </Row>
            <Row className='m-5'>
                <Col md='3'>
                    <FilterComponents />
                </Col>
                <Col md='9'>
                    <ProductComponents />
                </Col>
            </Row>
        </Container>

    )
}
