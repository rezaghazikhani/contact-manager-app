//Components
import Contact from "./Contact";
import Spinner from "../Spinner";
//Colors
import { CURRENTLINE, ORANGE, PINK } from "../../helpers/colors";
//Images and git
import notFound from "../../assets/no-found.gif";

const Contacts = ({ contacts, loading }) => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <button className="btn mx-2" style={{ backgroundColor: PINK }}>
                  ساخت مخاطب جدید
                  <i className="fa fa-plus-circle mx-2" />
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {
        loading ? <Spinner /> : (
          <section className="container">
            <div className="row">
              {contacts.length > 0 ? (
                contacts.map((c) => (
                  <Contact key={c.id} contact={c} />
                ))
              ) : (
                <div className="text-center py-5" style={{ backgroundColor: CURRENTLINE }}>
                  <p className="h3" style={{ color: ORANGE }}>
                    مخاطب یافت نشد
                  </p>
                  <img src={notFound} alt="پیدا نشد" className="w-25" />
                </div>
              )}
            </div>
          </section>
        )
      }
    </>
  );
};

export default Contacts;
