import React from "react";
import { database, storage } from "../../firebase";

const CloseQuest = ({ id, downloadUrl }) => {
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
        Mark this quest as completed
      </button>
    </>
  );
};

export default CloseQuest;