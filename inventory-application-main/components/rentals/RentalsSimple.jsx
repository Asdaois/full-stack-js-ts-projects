import React from "react";

function RentalsSimple({ rental }) {
  return (
    <div className="">
      <div className="">
        <div>
          <strong>{`${rental.user?.company}:`} </strong>
          <p>
            {rental.user.last_name}, {rental.user.first_name}
          </p>
        </div>
        <div className="">
          <p>Machines rented: {rental.machinery_rented.length}</p>
        </div>
      </div>
    </div>
  );
}

export default RentalsSimple;
