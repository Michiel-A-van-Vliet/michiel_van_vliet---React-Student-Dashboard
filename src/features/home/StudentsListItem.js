import React from "react";
import { useDispatch } from "react-redux";
import { toggleIsSelected } from "../students/studentsSlice";

const StudentsListItem = ({ id, name, lastName, isSelected }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleIsSelected({ id: id, isSelected: !isSelected }));
  };

  return (
    <li>
      <div>
        <span>
          <input type="checkbox" checked={isSelected} onChange={handleChange} />
        </span>
        {name} {lastName}
      </div>
    </li>
  );
};

export default StudentsListItem;
