import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useHistory } from 'react-router-dom'

export default function AddMovie(){
    const [formValues, setFormValues] = useState({});
    const history = useHistory();

    const handleMovieTitleChange = (e) => {
        let name = e.target.value;
        let newFormValues = formValues;
        newFormValues.title = name;
        setFormValues(newFormValues);
    }

    const handleMovieImdbIdChange = (e) => {
        let imdbId = e.target.value;
        let newFormValues = formValues;
        newFormValues.imdbId = imdbId;
        setFormValues(newFormValues);
    }

    const handleMoviePosterChange = (e) => {
        let poster = e.target.value;
        let newFormValues = formValues;
        newFormValues.poster = poster;
        setFormValues(newFormValues);
    }

    const handleMovieYearChange = (e) => {
        let year = e.target.value;
        let newFormValues = formValues;
        newFormValues.year = year;
        setFormValues(newFormValues);
    }

    const addMovie = () => {
        let data = formValues;

        fetch("http://localhost:5000/addMovie", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });

          alert("Movie Inserted!");
    }

    return (
    <div className="container">
        <h1>Adding a movie</h1>
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Movie Title</Label>
                <Input type="email" onChange={handleMovieTitleChange} name="email" id="exampleEmail" placeholder="Enter movie title here..." />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">ImdbID</Label>
                <Input type="email" onChange={handleMovieImdbIdChange} name="email" id="exampleEmail" placeholder="Enter movie imdbID here..." />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Movie Poster</Label>
                <Input type="email" onChange={handleMoviePosterChange} name="email" id="exampleEmail" placeholder="Enter movie Poster Link here..." />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Movie Year</Label>
                <Input type="email" onChange={handleMovieYearChange} name="email" id="exampleEmail" placeholder="Enter movie year here..." />
            </FormGroup>
            <Button color="success" onClick={addMovie}>Submit</Button>
            &nbsp;
            <Button onClick={()=> history.goBack()} color="info">
                Back to Search Page
            </Button>
        </Form>
    </div>
    );
}
