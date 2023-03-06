import "./index.scss";
import { Routing, routes } from "../pages";
import { Navbar, Modal } from "../widgets";
import ProvidersWrapper from "./providers/index.jsx";
import { Container } from "../shared";

const App = () => (
    <ProvidersWrapper>
        <Container>
            <Navbar routes={routes} />
            <Routing />
        </Container>
        <Modal />
    </ProvidersWrapper>
);

export default App;
