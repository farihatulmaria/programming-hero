import { Button, Spinner } from "react-bootstrap";
import CardGroupV2 from "./Components/CardGroupV2/CardGroupV2";
// import "./App.css";
// import CardGroup from "./Components/CardGroup/CardGroup";
function App() {
  return (
    <div className="App">
      {/* adding bootstrap by cdn */}
      {/* <CardGroup/> */}
      <Button variant="success">React bootstrap</Button>
      <br />   
      <br />
      <Spinner animation="grow" variant="success"/>
      <Spinner animation="border" variant="success"/>
      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/286px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      <CardGroupV2/>
    </div>
  );
}

export default App;
