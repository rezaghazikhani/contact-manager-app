// Icons
import { FaSearch } from "react-icons/fa";
// Colors 
import {PURPLE} from '../../helpers/colors';

const SearchContact = () => {
    return (
        <div>
            <div className="input-group mx-2 w-75" dir="ltr">
                <span className="input-group-text" id="basic-addon" style={{ backgroundColor: PURPLE }}>
                    <FaSearch />
                </span>
                <input
                    dir="rtl"
                    type="text"
                    placeholder="جستجوی مخاطب"
                    className="form-control"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                />
            </div>
        </div>
    )
}
export default SearchContact;
