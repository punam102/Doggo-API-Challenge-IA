import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Axios from "axios";
// import{CircularProcess} from '@material-ui/core'
function Dogs () {
  const [breed, setBreed] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [images, setImages] = useState([]);
  useEffect(() => {
    var URL = "https://dog.ceo/api/breeds/list/all";

    Axios
    .get(URL)
      .then((res) => {
        for (var a in res.data.message) {
          if (res.data.message[a].length !== 0)
            for (var b of res.data.message[a])
             breed.push(a + "/" + b);
            else breed.push(a);
          setBreed((prev) => [...breed]);
          //    console.log(breed);
        }
      })
      .then((r) => {
        setSelectedBreed(breed[0]);
        loadImages(breed[0]);
      });
    //https://dog.ceo/breeds/sheepdog/english/images
  }, []);
  function loadImages(category) {
    var URL = `https://dog.ceo/api/breed/
    ${category}/images`;

    Axios.get(URL).then((res) => {
      setImages((prev) => [...res.data.message]);
      //   console.log(images.length);
    });
  }
  return (
    <div className="App">
      {/* {selectedBreed} */}
      <Form>
        <Form.Group>
          <Form.Control
            as="select"
            onChange={(e) => {
              setSelectedBreed(e.target.value);
              setImages([])
              loadImages(selectedBreed);
            }}
          >
            {breed.map((b) => {
              return <option key={b}>{b}</option>;
            })}
          </Form.Control>
        </Form.Group>
      </Form>
      {/* {images.length === 0? <CircularProcess/>: */}
      <div className="image-box">
       
        {images.map((i) => {
          console.log(i);
          return <img alt="ab" src={i} />;
        })}
      </div>
{/* } */}
    </div>
  );
};

export default Dogs;
