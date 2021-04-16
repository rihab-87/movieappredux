import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Card,Button } from "react-bootstrap";
import "./moviecard.css";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import {deletmovie} from '../actions/action'

export default function MovieCard({ movie }) {

  const dispatch=useDispatch()
 const  handeldelete=(e)=>{
   console.log(e)
  dispatch(deletmovie(e.target.id))
 }


  return (
    
      <Card
        style={{ width: "18rem", marginTop: "30px", height: "550px" }}
        className="card-style"
      >
        <Card.Img variant="top" src={movie.Img} style={{ height: "320px" }} />
        <Card.Body>
          <Card.Title
            style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: "large",
              fontWeight: 700,
              textAlign: "center",
              color: "black",
            }}
          >
            {movie.title}
          </Card.Title>

          <Card.Text>
            <div style={{ fontSize: 20, textAlign: "center" }}>
              <StarRatingComponent
                name="app4"
                editing={false}
                starCount={5}
                value={movie.rate}
              />
            </div>
          </Card.Text>
          <Card.Text>
          <Link to={`/${movie.id}`}> <h6 style={{color:"black"}}>Description & trailer</h6></Link>
          </Card.Text>
          <Card.Text>
            <div >
              <Button style={{margin:"auto"}} id={movie.id} onClick={handeldelete}>DELETE </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    
  );
}

