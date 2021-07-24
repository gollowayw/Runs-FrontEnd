import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <tr className="bg-gray-800 border-collapse">
      <td className="p-2">{props.text}</td>
      <td className="p-2">Sample text</td>
      <td className="p-2">
        <button onClick={deleteHandler}>Delete</button>
      </td>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </tr>
  );
}

export default Todo;
