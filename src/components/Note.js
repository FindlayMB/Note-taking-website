import { useNavigate, useParams } from "react-router-dom";

function Note({ note, current, formatDate }) {
  const navigate = useNavigate();

  function changeVisibleNote() {
    navigate(`notes/${note.ID}`, { replace: true });
  }
  function getPreview() {
    if (note.content.length > 80) {
      var temp = note.content.substring(0, 80) + "...";
      temp = temp.split("</p>");
      if (temp.length >= 3) {
        var output = temp[0] + "</p>" + temp[1] + "</p>" + temp[2] + "</p>";
        return output;
      } else if (temp.length == 2) {
        var output = temp[0] + "</p>" + temp[1] + "</p>";
        return output;
      } else {
        var output = temp[0] + "</p>";
        return output;
      }
    } else if (note.content === "") {
      return "...";
    } else {
      var temp = note.content.split("</p>");
      if (temp.length >= 3) {
        var output = temp[0] + "</p>" + temp[1] + "</p>" + temp[2] + "</p>";
        return output;
      } else if (temp.length == 2) {
        var output = temp[0] + "</p>" + temp[1] + "</p>";
        return output;
      } else {
        var output = temp[0] + "</p>";
        return output;
      }
    }
  }

  return (
    <>
      <button className={"note-button" + current} onClick={changeVisibleNote}>
        <h2>{note.title}</h2>
        <h5>{formatDate(note.dateTime)}</h5>
        <div
          id="note-preview"
          dangerouslySetInnerHTML={{ __html: getPreview() }}
        ></div>
      </button>
    </>
  );
}

export default Note;
