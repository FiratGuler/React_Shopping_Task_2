
import { RootState } from '../../redux/store'
import { getProductAsync, AddCartArr, } from '../../redux/products/productSlice'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'

import { Row, Col, Card, CardGroup, Button, Container,Spinner } from 'react-bootstrap'

import './style.css';




export default function ProductComponents() {


  const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProductAsync())
    
      }, [dispatch])
 

  const product = useAppSelector((state: RootState) => state.products)
  const activeFilter = useAppSelector((state: RootState) => state.products.activeFilter)
  
  const filterArr = useAppSelector((state: RootState) => state.products.filteredArr)
  


  let filtered;
  filtered = filterArr
 
   if (activeFilter !== 'all') {
     filtered = filterArr.filter((product) => {
       switch (activeFilter) {
         case "men's clothing":
           return product.category === "men's clothing";
         case "women's clothing":
           return product.category === "women's clothing" ;
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

      {filtered.length} Product(s) found
      <Row >
        {product.loading &&
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>}
        {product.error && product.error}

        {filtered.map((product) => (
          <Col key={product.id} md="3" >

            <CardGroup className='' >
              <Card className="mt-2 border-0 product-card text-center " style={{ width: '18rem' }}>
                <Card.Img className="product-img p-3 product_card_img" src={product.image} height='250px' />
                <Card.Body >
                  <Card.Title>{product.title.substring(0, 12)}</Card.Title>
                  <Card.Text>

                    $ {product.price} <br />
                    <span className='text-muted'>  or 3 x {((product.price) / 3).toFixed(2)}</span>

                  </Card.Text>
                  <Button
                    className="product-btn w-100 text-bg-dark border-dark rounded-0 " 

                    onClick={() => dispatch(AddCartArr({ id: product.id, title: product.title, category: product.category, price: product.price, image: product.image, quantity: 1 }))}>Add to cart</Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>

        ))}
      </Row>
    </Container >
  )
}
