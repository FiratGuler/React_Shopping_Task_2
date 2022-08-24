
import { RootState } from '../redux/store'
import { getProductAsync, AddCartArr } from '../redux/products/productSlice'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'

import { Row, Col, Card, CardGroup, Button, Container } from 'react-bootstrap'



export default function ProductComponents() {


  const dispatch = useAppDispatch()

  useEffect(() => { dispatch(getProductAsync()) }, [dispatch])

  const product = useAppSelector((state: RootState) => state.products)
  const activeFilter = useAppSelector((state: RootState) => state.products.activeFilter)



  let filtered;
  filtered = product.items
  if (activeFilter !== 'all') {
    filtered = product.items.filter((product) => {
      switch (activeFilter) {

        case "men's clothing":
          return product.category === "men's clothing" && product;

        case "women's clothing":
          return product.category === "women's clothing" && product;

        case 'jewelery':
          return product.category === 'jewelery' && product;

        case 'electronics':
          return product.category === 'electronics' && product;

        default:
          return product;
      }
    }
    )
  }

  return (
    <Container>

      {product.items.length} Product(s) found
      <Row className="mt-3">
        {product.loading && "Loading..."}
        {product.error && product.error}

        {filtered.map((product) => (
          <Col key={product.id} md="3">

            <CardGroup >
              <Card className="mt-2 border-0 product-card " style={{ width: '18rem' }}>
                <Card.Img className="product-img p-3" src={product.image} height='250px' />
                <Card.Body >
                  <Card.Title>{product.title.substring(0, 12)}</Card.Title>
                  <Card.Text>

                    $ {product.price} <br />
                    or 3 x {((product.price) / 3).toFixed(2)}

                  </Card.Text>
                  <Button
                    className="product-btn"

                    onClick={() => dispatch(AddCartArr({id: product.id, title: product.title, category: product.category, price: product.price, image: product.image }))}>Add to cart</Button>
              </Card.Body>
            </Card>
          </CardGroup>
          </Col>

        ))}
    </Row>
    </Container >
  )
}