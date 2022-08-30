
import { useAppDispatch } from '../../redux/store'
import { changeActiveFilter } from '../../redux/products/productSlice'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './style.css';

export default function FilterComponents() {

    const dispatch = useAppDispatch()

    return (
        <Container>
            <Row>
                 <b>Categoray:</b>
                <Col className='mt-3'>
                    <Button className="rounded-4 m-1 filter_button"  onClick={() => dispatch(changeActiveFilter("all"))}>All</Button>
                    <Button className="rounded-4 m-1 filter_button mx-3"  onClick={() => dispatch(changeActiveFilter("men's clothing"))}>Men</Button>
                    <Button className="rounded-4 m-1 filter_button "  onClick={() => dispatch(changeActiveFilter("women's clothing"))}>Women</Button>
                    <Button className="rounded-4 m-1 filter_button "  onClick={() => dispatch(changeActiveFilter('jewelery'))}>Jewelery</Button>
                    <Button className="rounded-4 m-1 filter_button"  onClick={() => dispatch(changeActiveFilter('electronics'))}>Electronics</Button>
                </Col>
            </Row>
        </Container>
    )
}
