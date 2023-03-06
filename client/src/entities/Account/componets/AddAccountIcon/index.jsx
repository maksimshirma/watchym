import PropTypes from "prop-types";
import { AddIcon } from "../../../../shared";

const AddAccountIcon = ({ onCreate }) => (
    <div
        role={"presentation"}
        className="w-12 h-10 sm:w-16 sm:h-12 bg-inherit border-[1px] border-black rounded-lg flex justify-center items-center cursor-pointer hover:bg-slate-200 hover:backdrop-opacity-5 transition-all"
        onClick={onCreate}
    >
        <div className="w-6 h-6">
            <AddIcon />
        </div>
    </div>
);

AddAccountIcon.propTypes = {
    onCreate: PropTypes.func,
};

export default AddAccountIcon;
