import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Add.css'

const AddMovie = ({ AddM }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rate, setRate] = useState('')

    const [posterUrl, setPosterUrl] = useState('')

    const handleAddMovie = (e) => {
        let newMovie = { title, description, rate, posterUrl }
        AddM(newMovie)
        handleClose()
    }

    return (
        <div className='add'>
            <Button variant="warning" onClick={handleShow} style={{ marginTop: '3rem' }}>
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className='form'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />

                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} />

                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number" value={rate} onChange={e => setRate(e.target.value)} />

                        <Form.Label>Url</Form.Label>
                        <Form.Control type="text" value={posterUrl} onChange={e => setPosterUrl(e.target.value)} />
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddMovie}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMovie;