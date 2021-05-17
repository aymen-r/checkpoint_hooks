import React, { useState } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function NewMovie({ addNewMovie }) {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(1);
  const [year, setYear] = useState("");
  const [length, setLength] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = () => {
    const newMovie = {
      title: title,
      posterURL: poster,
      description: description,
      rating: rating,
      year: year,
      length: length,
      type: type,
    };
    console.log(newMovie);
    addNewMovie(newMovie);
    handleClose();
  };

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Add a new movie
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Enter the movie details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup
              className="mb-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              <InputGroup.Prepend>
                <InputGroup.Text>Title</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl />
            </InputGroup>

            <InputGroup
              className="mb-3"
              value={poster}
              onChange={(e) => setPoster(e.target.value)}
            >
              <InputGroup.Prepend>
                <InputGroup.Text>Image URL</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl />
            </InputGroup>

            <InputGroup
              className="mb-3"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <InputGroup.Prepend>
                <InputGroup.Text>Year</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl />
            </InputGroup>

            <InputGroup
              className="mb-3"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            >
              <InputGroup.Prepend>
                <InputGroup.Text>Length</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl />
            </InputGroup>

            <InputGroup
              className="mb-3"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <InputGroup.Prepend>
                <InputGroup.Text>Type</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl />
            </InputGroup>

            <InputGroup
              className="mb-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
              <InputGroup.Prepend>
                <InputGroup.Text>Description</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl />
            </InputGroup>
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
            <InputGroup
              className="mb-3"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <InputGroup.Prepend>
                <InputGroup.Text>Rating</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl type="number" min={0} max={5} />
            </InputGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
