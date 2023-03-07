import { useNavigate } from "react-router-dom";

function NoteSide({ note }) {
  const navigate = useNavigate();
  function changeVisibleNote() {
    navigate(`notes/${note.id}`, { replace: true });
  }
  function getPreview() {
    if (note.content.length > 80) {
      return note.content.substring(0, 80) + "...";
    } else if (note.content === "") {
      return "...";
    } else {
      return note.content.substring(0, 80);
    }
  }

  return (
    <>
      <button className="note-button" onClick={changeVisibleNote}>
        <h2>{note.title}</h2>
        <h5>{note.dateTime}</h5>
        <h4 dangerouslySetInnerHTML={{ __html: getPreview() }}></h4>
      </button>
    </>
  );
}

export default NoteSide;
