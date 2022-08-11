import React from "react";
import { database, storage } from "../../firebase";

const DeleteButton = ({ id, downloadUrl }) => {
  function removeFile(id, downloadUrl) {
    if (downloadUrl !== "") {
      const storageRefa = storage.refFromURL(downloadUrl);

      storageRefa
        .delete()
        .then(() => {
          database.task
            .doc(id)
            .delete()
            .then((response) => {})
            .catch((error) => {
              console.log("delete error", error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      database.task
        .doc(id)
        .delete()
        .then((response) => {})
        .catch((error) => {
          console.log("delete error", error);
        });
    }
  }
  return (
    <>
      <button
        onClick={() => {
          removeFile(id, downloadUrl);
        }}
      >
        Delete This Quest
      </button>
    </>
  );
};

export default DeleteButton;
