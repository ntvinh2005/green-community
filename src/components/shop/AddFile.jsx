import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { database, storage } from "../../firebase";

const AddFile = ({ item, type }) => {
  const { user } = useAuth();
  const handleUpload = async (event) => {
    const file = event.target.files[0];

    if (type === "quest") {
      let filePath = user.uid + "/quest/" + file.name;
      const uploadTask = storage.ref(filePath).put(file);

      uploadTask.then(() => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          database.task.doc(item.id).update({
            url: url,
          });
        });
      });
    } else if (type === "item") {
      let filePath = user.uid + "/item/" + file.name;
      const uploadTask = storage.ref(filePath).put(file);

      uploadTask.then(() => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          database.shop_item.doc(item.id).update({
            url: url,
          });
        });
      });
    }
  };
  return (
    <div>
      {item.url === "" ? (
        <label>
          +
          <input
            type="file"
            onChange={handleUpload}
            style={{ opacity: 0, position: "absolute" }}
          />
        </label>
      ) : (
        <img src={item.url} alt=""></img>
      )}
    </div>
  );
};

export default AddFile;
