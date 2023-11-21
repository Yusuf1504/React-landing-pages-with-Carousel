import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample() {
  return (
    <div className='empty'>

        <div />
      
      <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTcxfHx8ZW58MHx8fHx8"
          />
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Know more</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTcxfHx8ZW58MHx8fHx8"
          />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>


        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTcxfHx8ZW58MHx8fHx8"
          />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>


        

        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTcxfHx8ZW58MHx8fHx8/100x180p"
          />
          <Card.Body>
            <Card.Title>Card Title 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        
      </div>
    </div>
  );
}

export default BasicExample;