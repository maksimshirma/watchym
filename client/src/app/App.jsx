import "./index.scss";
import { Routing, routes } from "../pages";
import { Navbar, Modal } from "../widgets";
import ProvidersWrapper from "./providers/index.jsx";
import { LayoutNavbar, Container } from "../shared";

const App = () => (
    <ProvidersWrapper>
        <Container>
            <LayoutNavbar>
                <Navbar routes={routes} />
            </LayoutNavbar>
            <Routing />
        </Container>
        <Modal />
    </ProvidersWrapper>
);

export default App;
