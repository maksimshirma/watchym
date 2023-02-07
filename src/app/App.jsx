import "./index.scss";
import { Routing, routes } from "../pages";
import { Navbar, Footer } from "../widgets";
import ProvidersWrapper from "./providers/index.jsx";

const App = () => (
    <div className="app">
        <ProvidersWrapper>
            <Navbar routes={routes} />
            <Routing />
            <Footer />
        </ProvidersWrapper>
    </div>
);

export default App;
