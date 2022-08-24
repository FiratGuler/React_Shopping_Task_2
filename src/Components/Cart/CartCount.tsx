import { useAppSelector } from '../../redux/store';
import { Row} from 'react-bootstrap';


export default function CartCount() {

    const cart = useAppSelector((state) => state.products.cartArr)

    return (
        <Row className='p-5' md='3'>
            {cart.length} Cart
        </Row>
    )
}
