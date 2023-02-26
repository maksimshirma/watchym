import PropTypes from "prop-types";
import AddIcon from "../add.icon";

const AddAccountIcon = ({ onCreate }) => (
    <div
        role={"presentation"}
        className="w-12 h-10 bg-slate-200 border-[1px] border-black rounded-lg text-white text-xs flex justify-center items-center cursor-pointer hover:bg-slate-100 transition-all"
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
