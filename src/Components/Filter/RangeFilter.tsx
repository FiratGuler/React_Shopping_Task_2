import { Row, Col, Form } from 'react-bootstrap';
import { useEffect } from 'react'
import { filterActions,rangeValue } from '../../redux/products/productSlice'
import { useAppDispatch, useAppSelector, RootState } from '../../redux/store'



export default function RangeFilter() {

    const dispatch = useAppDispatch()

    const price = useAppSelector(state => state.products.rangeFilter)
    const product = useAppSelector((state: RootState) => state.products.items)
    const rangeFilter = useAppSelector((state: RootState) => state.products.rangeFilter)

    useEffect(() => {
        let filtered = product.filter((product) => product.price < rangeFilter)
        dispatch(filterActions(filtered))
    }, [rangeFilter])


    return (
        <Row className='mt-5'>
            <Col>
                <Form.Label>Price: {price} </Form.Label>
                <Form.Range max={1000} defaultValue={1000} onChange={(e)=>dispatch(rangeValue(e.target.value))} />

            </Col>
        </Row>
    )
}
