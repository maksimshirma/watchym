import PropTypes from "prop-types";
import { Button } from "../../../../shared";

const Account = ({ _id, name, number, amount, onDelete, toggleEdit }) => {
    return (
        <div className="w-full my-1 border-[1px] border-black flex items-center rounded-lg text-xs sm:text-sm lg:text-base">
            <div className="w-1/2 p-2">
                <div>{name}</div>
                <div>Номер: {number}</div>
            </div>
            <div className="w-1/6 ">
                <div className="text-center">{amount} руб.</div>
            </div>
            <div className="w-1/3 text-right text-[10px] sm:text-sm lg:text-base">
                <Button title={"Редактировать"} onClick={() => toggleEdit(_id)} />
                <Button title={"Удалить"} onClick={() => onDelete(_id)} />
            </div>
        </div>
    );
};

Account.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
    amount: PropTypes.number,
    onDelete: PropTypes.func,
    toggleEdit: PropTypes.func,
};

export default Account;
