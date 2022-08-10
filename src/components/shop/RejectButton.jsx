import React from 'react'
import { database } from '../../firebase';

const RejectButton = ({request}) => {
    const reject = () => {
        database.purchase.doc(request.id).update({
            status: "Rejected",
          });
    }

  return (
    <button onClick = {reject}>Reject</button>
  )
}

export default RejectButton