import React from "react";

const Student = ({ student }) => {
  return (
    <main>
      <h1>
        {student.name} {student.lastName}
      </h1>
      <img src={student.picture} alt={student.name} />
      <ul>
        <li>Voornaam: {student.name}</li>
        <li>Achternaam: {student.lastName}</li>
        <li>
          Woonplaats: {student.town} - {student.hood}
        </li>
        <li>Email: {student.email}</li>
        <li>Mobiel: {student.telephone}</li>
      </ul>
    </main>
  );
};

export default Student;
