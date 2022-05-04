import { FaChevronRight } from 'react-icons/fa';

const Contact = ({ name, phone, email, openModal }) => {
  return (
    <>
      <h2>{name}</h2>
      <button onClick={openModal}>
        More details <FaChevronRight />
      </button>
    </>
  )
}

export default Contact