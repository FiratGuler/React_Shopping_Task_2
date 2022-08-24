
import { useAppDispatch } from '../redux/store'
import { changeActiveFilter } from '../redux/products/productSlice'
import { Button, Container,Row } from 'react-bootstrap';

export default function FilterComponents() {

    const dispatch = useAppDispatch()

    return (
        <Container>
            <Row>
                <b>Categoray:</b>
            
                <Button className="rounded-4 m-1 " variant='secondary' onClick={() => dispatch(changeActiveFilter("all"))}>All</Button>
                <Button className="rounded-4 m-1" variant='secondary' onClick={() => dispatch(changeActiveFilter("men's clothing"))}>Men</Button>
                <Button className="rounded-4 m-1" variant='secondary' onClick={() => dispatch(changeActiveFilter("women's clothing"))}>Women</Button>
                <Button className="rounded-4 m-1" variant='secondary' onClick={() => dispatch(changeActiveFilter('jewelery'))}>Jewelery</Button>
                <Button className="rounded-4 m-1" variant='secondary' onClick={() => dispatch(changeActiveFilter('electronics'))}>Electronics</Button>
            </Row>
        </Container>
    )
}
