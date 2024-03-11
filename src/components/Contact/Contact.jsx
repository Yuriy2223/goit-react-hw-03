import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={styles.item}>
      <div className={styles.itemConteiner}>
        <div>
          <RiContactsFill />
          {contact.name}
        </div>
        <div>
          <FaPhoneAlt />
          {contact.number}
        </div>
      </div>
      <button
        type="button"
        className={styles.deleteBtn}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
