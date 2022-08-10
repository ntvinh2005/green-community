import React from 'react'
import { database } from '../../firebase';

const AcceptButton = ({request}) => {
    const accept = () => {
        database.purchase.doc(request.id).update({
            status: "Accepted",
          });
    }

  return (
    <button onClick = {accept}>Accept</button>
  )
}

export default AcceptButton