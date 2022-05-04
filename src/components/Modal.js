import { FaRegWindowClose } from "react-icons/fa";

const Modal = ({ contact, onCloseModal }) => {
  const { name, phone, email, address, company } = contact;

  return (
    <div className="modal">
      <header>
        <h1>{name}</h1>
        <button onClick={onCloseModal}>
          <FaRegWindowClose />
        </button>
      </header>
      <section className="modal__contact">
        <p>Phone: {phone}</p>
        <p>Mail: {email}</p>
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
