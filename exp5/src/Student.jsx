function Student(props) {
    return (
        <div className="card">
            <h3>Name: {props.name}</h3>
            <p>Roll No: {props.rollNo}</p>
            <p>Branch: {props.branch}</p>
            <p>
                Status: <strong>{props.isPassed ? "Passed":"Failed"}</strong>
            </p>
        </div>
    )
}

export default Student;
