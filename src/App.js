import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
  <ErrorBoundary>
    <Main />
  </ErrorBoundary>
  );
}

export default App;
