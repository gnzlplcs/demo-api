import './Modal.css';

const Modal = ({ contact, onCloseModal }) => {
  const { name, phone, email, address, company } = contact;

  return (
    <div className="card card-modal bg-warning text-dark">
      <header className="card-body d-flex justify-content-between">
        <h1 className="card-title">{name}</h1>
        <button onClick={onCloseModal} className="btn btn-close" />
      </header>
      <section className="card-body">
        <h2 className="card-title">Contact</h2>
        <p className="card-text">Phone: {phone}</p>
        <p className="card-text">Mail: {email}</p>
        <p className="card-text">
          Address: {address.street}, {address.suite}, {address.city}
        </p>
      </section>
      <section className="card-body">
        <h2 className="card-title">Company</h2>
        <p className="card-text">{company.name}</p>
      </section>
    </div>
  );
};

export default Modal;
