import "./index.scss";
import { Routing, routes } from "../pages";
import { Navbar, Modal } from "../widgets";
import ProvidersWrapper from "./providers/index.jsx";
import { Container } from "../shared";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
    <ProvidersWrapper>
        <Container>
            <Navbar routes={routes} />
            <Routing />
        </Container>
        <Modal />
        <ToastContainer />
    </ProvidersWrapper>
);

export default App;
