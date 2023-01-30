import "./index.scss";
import { Routing, routes } from "../pages";
import { Navbar, Footer } from "../widgets";

function App() {
    return (
        <div className="app">
            <Navbar routes={routes} />
            <Routing />
            <Footer />
        </div>
    );
}

export default App;
