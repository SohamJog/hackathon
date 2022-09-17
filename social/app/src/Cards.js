import React, { useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import Post from "./Post";

function Cards(props) {
  const navigate = useNavigate();
  const handleOnClick = useNavigate();
  // const handleOnClick = useCallback(() => navigate('/post', { replace: true }), [navigate]);
  const [counter, setCounter] = useState(0);
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
  const decrease = () => {
    setCounter(count => count - 1);
  };
  return (
    <>
      <div class="mt-2">
        <Card onClick={handleOnClick} style={{ width: '60rem', cursor: "pointer" }}>
          <Card.Body>
            <div>
              <Card.Title>{props.title}</Card.Title>
            </div>
            <Card.Text>
              {props.title}
            </Card.Text>
            <div class="mr-2">
              <Button variant="btn btn-success" onClick={increase}>Upvote</Button>
              <Button variant="btn btn-danger" onClick={decrease}>Downvote</Button>
            </div>
            <div>
              <h5>Score: </h5>
              <span className="counter__output">{counter}</span>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Cards;