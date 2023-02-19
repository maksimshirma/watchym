import "./index.scss";
import { Routing, routes } from "../pages";
import { Navbar, Modal, Accounts } from "../widgets";
import ProvidersWrapper from "./providers/index.jsx";
import { LayoutMain, LayoutNavbar, Container } from "../shared";

const App = () => (
    <ProvidersWrapper>
        <Container>
            <LayoutNavbar>
                <Navbar routes={routes} />
            </LayoutNavbar>
            <LayoutMain>
                <Accounts />
                <Routing />
            </LayoutMain>
        </Container>
        <Modal />
    </ProvidersWrapper>
);

export default App;
