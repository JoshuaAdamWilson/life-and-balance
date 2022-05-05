import React, { useState, useContext } from "react";
import "./EventAdd.css";
import { Context } from "../../context/Context";
import axios from "axios";

const EventAdd = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [datetime, setDatetime] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      username: user.username,
      title,
      location,
      price,
      dateTime: datetime,
    };
    if (file) {
      const data = new FormData();
      // const filename = Date.now() + file.name;
      // data.append("name", filename);
      data.append("file", file);
      data.append("upload_preset", "h3y9mtdn");
      data.append("cloud_name", "dzxwttjqx");
      await fetch("https://api.cloudinary.com/v1_1/dzxwttjqx/image/upload", {
        method: "post",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          newEvent.photo = data.url;
        })
        .catch((error) => console.log(error));
    } else {
      setError("Photo Required");
      return;
    }
    try {
      const res = await axios.post(
        "https://life-and-balance.herokuapp.com/api/events",
        newEvent,
      );
      window.location.replace("/events");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="event-upload" onSubmit={handleSubmit}>
        <div className="event-input-form">
          <h1>Add Event</h1>
          <label>Add an Image: </label>
          <div className="uploadContainer">
            {file && (
              <img
                className="uploadImage"
                src={URL.createObjectURL(file)}
                alt=""
              />
            )}
            <input
              type="file"
              id="file-input"
              onChange={(e) => setFile(e.target.files[0])}
            />
            
          </div>
          <br />
          <input
            type="text"
            placeholder="Title"
            className="write-input-title"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="write-input-title"
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="write-input-title"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="datetime-local"
            className="write-input-title"
            onChange={(e) => setDatetime(e.target.value)}
          />
          <button className="write-submit" type="submit">
            Publish Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventAdd;
