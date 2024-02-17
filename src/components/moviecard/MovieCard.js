import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    return (
        <Card style={{
            width: '19rem', cursor: 'pointer'
        }} onClick={() => navigate(`/trailer/${movie.id}`)} >
            <Card.Img style={{ width: '300px', height: '500px', margin: '2px' }} src={movie.posterUrl} />
            <Card.Body>
                <Card.Title style={{ marginTop: '3px', color: 'red' }}> Title :{movie.title}</Card.Title>
                <Card.Text >
                    Description : {movie.description}
                </Card.Text>
                <Card.Text style={{ color: 'red' }}>
                    Rate : {movie.rate}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieCard
