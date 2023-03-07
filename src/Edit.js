import React, { useEffect, useState } from "react";
import { useOutletContext, useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [notes, setNotes] = useOutletContext();
  const currrentNote = notes.find((element) => element.id === id);

  const [title, setTitle] = useState(currrentNote.title);
  const [date, setDate] = useState(currrentNote.dateTime);
  const [content, setContent] = useState(currrentNote.content);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
      return "";
    }
    return formatted;
  };

  //   useEffect(() => {
  //     console.log(value);
  //   }, [value]);

  function save() {
    //console.log(formatDate(date));
    currrentNote.title = title;
    currrentNote.dateTime = formatDate(date);
    currrentNote.content = content;
    localStorage.setItem("noteMenu.notes", JSON.stringify(notes));
    navigate(`/notes/${id}`, { replace: true });
  }

  function deleteNote() {
    const index = notes.indexOf(currrentNote);
    if (index > -1) notes.splice(index, 1);
    localStorage.setItem("noteMenu.notes", JSON.stringify(notes));
  }

  function handleDelete() {
    const answer = window.confirm("Are you sure?");
    if (answer) deleteNote();
    if (!notes[0]) {
      navigate("/notes", { replace: true });
    } else {
      navigate(`/notes/${notes[0].id}`, { replace: true });
    }
  }

  return (
    <>
      <div id="edit-header">
        <div id="edit-info">
          <input
            className="edit-note-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="date-input"
            type="datetime-local"
            value={currrentNote.dateTime}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button id="save-button" onClick={save}>
            Save
          </button>
          <button id="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <ReactQuill
        id="edit-box"
        theme="snow"
        value={content}
        onChange={setContent}
      />
    </>
  );
}

export default Edit;
