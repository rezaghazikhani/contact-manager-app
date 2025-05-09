//Icons
import { FaUser } from "react-icons/fa";
// Colors  
import { PURPLE, BACKGROUND,FOREGROUND } from '../helpers/colors';
//Components
import SearchContact from "./contact/SearchContact";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-sm shadow-lg" style={{ backgroundColor: BACKGROUND }}>
                <div className="container">
                    <div className="row w-100">
                        <div className="col">
                            <div className="Navbar-brand" style={{ color: FOREGROUND }}>
                                <FaUser style={{ color: PURPLE }} />
                                {"    "}    وب اپلیکیشن مدیریت {"     "}
                                <span style={{ color: PURPLE }}>مخاطبین</span>
                            </div>
                        </div>
                        <div className="col">
                            <SearchContact />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;