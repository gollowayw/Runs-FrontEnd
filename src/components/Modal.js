function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg w-1/2">
        <div class="flex flex-col items-start p-4">
          <h1 className="text-black mb-3 font-medium text-lg">Remove Event?</h1>
          <div className="text-black mb-3">
            Are you sures you would like to remove this event? The action cannot
            be undone.
          </div>

          <div className="ml-auto">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={confirmHandler}
            >
              Confirm
            </button>
            <button
              className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white ml-1 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={cancelHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
