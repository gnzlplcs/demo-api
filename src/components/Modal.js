import { FaRegWindowClose } from "react-icons/fa";

const Modal = ({ name, phone, mail, address, company }) => {
  return (
    <div className="modal">
      <header>
        <h1>{name}</h1>
        <FaRegWindowClose />
      </header>
      <section className="modal__contact">
        <p>Phone: {phone}</p>
        <p>Mail: {mail}</p>
        <p>
          Address: {address.street}, {address.suite}, {address.city}
        </p>
      </section>
      <section className="modal__company">
        <p>Company: {company.name}</p>
      </section>
    </div>
  );
};

export default Modal;
