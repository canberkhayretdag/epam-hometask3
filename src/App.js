import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:movieId" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
