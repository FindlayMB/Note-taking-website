import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NoNotes from "./components/NoNotes";
import Layout from "./static/Layout";
import Edit from "./Edit";
import View from "./View";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route 
            path="/" 
            element={<Navigate to="/notes" />}></Route>

          <Route 
            path="/notes" 
            element={<NoNotes />}></Route>

          <Route
            path="/notes/:id/edit"
            element={<Edit />}></Route>

          <Route
            path="/notes/:id"
            element={<View />}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;