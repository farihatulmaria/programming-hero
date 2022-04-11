import React from 'react';
import { Container, Row } from 'react-bootstrap';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import SingleExpert from '../SingleExpert/SingleExpert';

const experts = [
    {id: 1, name: 'Will Smith', img: expert1},
    {id: 2, name: 'Chris Rock', img: expert2},
    {id: 3, name: 'Dwayne Rock', img: expert3},
    {id: 4, name: 'Messy Vai', img: expert4},
    {id: 5, name: 'Ronaldo Bro', img: expert5},
    {id: 6, name: 'Stachy Jhonson', img: expert6},
]
const Experts = () => {

    return (
        <div>
           <h1 className='text-center fw-bold text-primary my-5'>Our Experts</h1>
           <Container>
                <Row lg={3} md={2} xs={1} className='g-5'>
                    {
                        experts.map(expert => <SingleExpert key={expert.id} expert={expert}/>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Experts;