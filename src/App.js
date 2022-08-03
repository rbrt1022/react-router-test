//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  HashRouter,
  matchRoutes,
  useRoutes
} from "react-router-dom";

function App() {
  return (
    //<BrowserRouter>
      <HashRouter basename="/">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* <Routes> */}
        <useRoutes>
          {/* <Route path="/react-router-test/about">
            <About />
          </Route>
          <Route path="/react-router-test/users">
            <Users />
          </Route>
          <Route path="/react-router-test/">
            <Home />
          </Route> */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/users" element={<Users />} />
            
          </Routes>
        {/* </Routes> */}
        </useRoutes>
      </HashRouter>
    //</BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
