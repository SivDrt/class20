import React from 'react';
import Student from "./StudentItem.jsx";

const Dashboard = ({ students }) => {
  return (
    <div className="table-container">
      <h2>Student List</h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Major</th>
            <th>University</th>
            <th>Average Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <Student key={student.id} data={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;