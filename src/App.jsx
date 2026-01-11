import { useState } from 'react';
import initialStudentsData from './data/Student';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  const [students, setStudents] = useState(initialStudentsData);

  const addStudent = (newStudent) => {
    const studentWithId = { 
      ...newStudent, 
      id: students.length + 1 
    };
    setStudents([...students, studentWithId]);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Dashboard students={students} />
        <AddStudent handleAddStudent={addStudent} />
      </main>
      <Footer />
    </div>
  );
}

export default App;