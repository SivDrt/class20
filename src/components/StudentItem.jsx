import React from 'react';

const Student = ({ data }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.major}</td>
      <td>{data.university}</td>
      <td>{data.averageGrade}</td>
    </tr>
  );
};

export default Student;