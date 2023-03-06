import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const ModalContext = React.createContext();

export const useModal = () => {
    return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
    const [component, setComponent] = useState(null);
    const [isOpen, setOpen] = useState(false);

    const openModal = (component) => {
        setComponent(component);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setComponent(null);
    };

    return (
        <ModalContext.Provider
            value={{
                component,
                isOpen,
                openModal,
                closeModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

ModalProvider.propTypes = {
    children: PropTypes.oneOfType(PropTypes.arrayOf(PropTypes.node), PropTypes.node),
};
