import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
        component: null,
    },
    reducers: {
        modalOpened: (state, payload) => {
            state.isOpen = true;
            state.component = payload.payload;
        },
        modalClosed: (state) => {
            state.isOpen = false;
            state.component = null;
        },
    },
});

const { actions } = modalSlice;
const { modalOpened, modalClosed } = actions;

export const handleOpenModal = (component) => (dispatch) => {
    dispatch(modalOpened(component));
};

export const handleCloseModal = () => (dispatch) => {
    dispatch(modalClosed());
};

export const getIsModalOpen = () => (state) => state.modal.isOpen;
export const getModalComponent = () => (state) => state.modal.component;

export const reducer = modalSlice.reducer;
