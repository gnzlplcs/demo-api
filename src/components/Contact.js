import { useState } from 'react';
import Modal from './Modal';
import { FaChevronRight } from 'react-icons/fa';

const Contact = ({ contact, onCloseModal }) => {
  const [ modal, setModal ] = useState(false)

  const { name } = contact;

  const handleModal = () => {
    setModal(prev => !prev)
  }

  return (
    <>
      <div className="container card p-3 mb-2 bg-light text-dark bg-gradient d-flex flex-row justify-content-between">
        <h2 className='display-3'>{name}</h2>
        <button className="align-self-center btn btn-primary" onClick={handleModal}>
          More details <FaChevronRight />
        </button>
      </div>
      {modal && <Modal contact={contact} onCloseModal={handleModal} />}
    </>
  )
}

export default Contact