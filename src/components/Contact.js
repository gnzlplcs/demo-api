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
      <h2>{name}</h2>
      <button onClick={handleModal}>
        More details <FaChevronRight />
      </button>
      {modal && <Modal contact={contact} onCloseModal={handleModal} />}
    </>
  )
}

export default Contact