import React, { useState } from "react";
import { database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

const PurchaseRequest = ({ item, owner }) => {
  const [open, setOpen] = useState(false);
  const [place, setPlace] = useState("");
  const [date, setDate] = useState(new Date());
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) navigate("/login");

  const openModal = async () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);

    //create new recipient
    await database.purchase.add({
      place: place,
      custommer: {
        uid: user.uid,
        email: user.email
      },
      seller: item.author,
      item: item,
      date: date,
      status: "Waiting"
    });

    setOpen(false);
    setPlace("");
  };

  return (
    <>
      <button onClick={openModal}>
        Buy
      </button>
      {open ? (
        <div
        style={{maxHeight: "100vh", zIndex: "9999"}}
      >
        <div>
          {item.url !== "" ? <img src={item.url} alt=""></img> : null}
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label>Item's Name: {item.name}</label>
              <br />
              <label>Item's Description: {item.description}</label>
              <br />
              <label>
                Seller's mail: {owner !== null ? owner[0].email : "Unknown"}
              </label>
            </div>
            <div>
              <label>Place for trading:</label>
              <input
                type="text"
                required
                value={place}
                onChange={(event) => setPlace(event.target.value)}
              />
            </div>
            <div>
              <label>Date for trading:</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="Pp"
              />
            </div>
          </div>
          <div>
            <button type="submit">
              Add
            </button>
            <button onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      ) : (
        null
        )}
    </>
  );
};

export default PurchaseRequest;
