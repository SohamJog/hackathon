import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function onClick() {

}

function Cards() {
  return (
    <Card onClick={onClick} style={{ width: '60rem', cursor: "pointer"}}>
      <Card.Body>
        <div>
            <Card.Title>The News Article Title</Card.Title>
        </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;