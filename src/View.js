import React, { useEffect, useState } from "react";
import { useOutletContext, useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function View() {
  const { id } = useParams();
  const [notes, setNotes] = useOutletContext();
  const navigate = useNavigate();
  const currrentNote = notes.find((element) => element.id === id);

  function editNote() {
    navigate(`/notes/${id}/edit`, { replace: true });
  }

  function deleteNote(noteId) {
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
      <div id="view-header">
        <div id="view-info">
          <h1>{currrentNote.title}</h1>
          <h5>{currrentNote.dateTime}</h5>
        </div>
        <div className="button-group">
          <button id="edit-button" onClick={editNote}>
            Edit
          </button>
          <button id="delete-button" onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
      <div
        id="view-content"
        dangerouslySetInnerHTML={{ __html: currrentNote.content }}
      />
    </>
  );
}

export default View;
