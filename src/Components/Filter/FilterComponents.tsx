import { Container } from 'react-bootstrap';
import CategoryFilter from './CategoryFilter';
import RangeFilter from './RangeFilter';

import './style.css';

export default function FilterComponents() {

    return (
        <Container>
            <CategoryFilter />
            <RangeFilter />
        </Container>

    )
}
