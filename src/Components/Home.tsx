import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CartComponents from './Cart/CartComponents';
import FilterComponents from './Filter/FilterComponents'
import ProductComponents from './Product/ProductComponents'

export default function Home() {
    return (
        <Container className='fluid mt-5'>
            <Row>
                <Col md='3'>
                    <FilterComponents />
                </Col>
                <Col md='8'>
                    <ProductComponents />
                </Col>
                <Col md="1">
                    <CartComponents />
                </Col>
            </Row>
        </Container>

    )
}
