import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import moviesData from './components/datacart/DataCart'

const Trailer = () => {
    const [movie, Setmovie] = useState({})
    const params = useParams()
    useEffect(() => {
        Setmovie(moviesData.find(movie => movie.id === +params.id))
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={6}>
                        <h1>{movie.title} </h1>
                        <p>{movie.description} </p>
                    </Col>
                    <Col sm={6}>
                        <iframe src={movie.trailer} title='movie' width={'400px'} height={'400px'}></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trailer
