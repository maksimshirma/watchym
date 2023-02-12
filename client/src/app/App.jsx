import "./index.scss";
import { Routing, routes } from "../pages";
import { Navbar, Footer } from "../widgets";
import ProvidersWrapper from "./providers/index.jsx";
import { Container } from "../shared";

const App = () => (
    <Container>
        <ProvidersWrapper>
            <Navbar routes={routes} />
            <Routing />
            <Footer />
        </ProvidersWrapper>
    </Container>
);

export default App;
