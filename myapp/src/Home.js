import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTd8fHxlbnwwfHx8fHw%3D"
          alt="First slide"
          height="650px" width= "100%"
        />
        <Carousel.Caption>
        <h2 className='carousel-pass'>Third slide label</h2>
          <p className='carousel-para'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button className='btn btn-primary'>Explore</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.unsplash.com/photo-1505778276668-26b3ff7af103?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODJ8fHxlbnwwfHx8fHw%3D"
          alt="First slide"
          height="650px" width= "100%"
        />
        <Carousel.Caption>
        <h2 className='carousel-pass'>Third slide label</h2>
          <p className='carousel-para'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTI1fHx8ZW58MHx8fHx8"
          alt="First slide"
          height="650px" width= "100%"
        />
        <Carousel.Caption>
          <h2 className='carousel-pass'>Third slide label</h2>
          <p className='carousel-para'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;