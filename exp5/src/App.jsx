import Student from './Student';

function App() {
  const studentList = [
    {id: 101, name:"Amit", branch:"CSE", passed: true},
    {id: 102, name:"Priyal", branch:"IT", passed: true},
    {id: 103, name:"Rahul", branch:"ECE", passed: false}
  ];

  return (
    <div>
      <h1>College Student Roster</h1>
      <div>
        {studentList.map((student)=>{
          return (
            <Student 
              key={student.id}
              name={student.name}
              rollNo={student.id}
              branch={student.branch}
              isPassed={student.passed}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
