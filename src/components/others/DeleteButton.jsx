import React from "react";
import { database, storage } from "../../firebase";

const DeleteButton = ({ id, downloadUrl }) => {
  function removeFile(id, downloadUrl) {
    const storageRefa = storage.refFromURL(downloadUrl);

    storageRefa
      .delete()
      .then(() => {
        database.shop_item
          .doc(id)
          .delete()
          .then((response) => {
          })
          .catch((error) => {
            console.log("delete error", error);
          });
        var recipient_query = database.recipient.where("item.id", "==", id);
        recipient_query.get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            doc.ref.delete();
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <button
        onClick={() => {
          removeFile(id, downloadUrl);
        }}
      >
        Xoá
      </button>
    </>
  );
};

export default DeleteButton;