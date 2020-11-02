import React from "react";
import { Link } from "react-router-dom";
import { InputGroup, Input, Button } from "reactstrap";

export default function SearchSection(props) {
  const { onChangeSearchValue, onKeyPressSearchValue, onClickSearch } = props;

  return (
    <section className="search-section">
      <InputGroup>
        <Input
          placeholder=" Search movie name..."
          onChange={onChangeSearchValue}
          onKeyPress={onKeyPressSearchValue}
        />
        &nbsp;
        <Button color="success" onClick={onClickSearch}>
          Search
        </Button>
        &nbsp;
        <Link to={`/booking-page/add-movie`} className="btn btn-warning">
          Add a Movie
        </Link>
      </InputGroup>
    </section>
  );
}
