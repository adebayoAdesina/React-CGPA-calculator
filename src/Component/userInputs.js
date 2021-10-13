import React from 'react';


const UserInputs = (props) => {
    const {details,i, deleteMyGoods}= props;
    
    let grade;
    
    const userGrade = () => {
        if (details.score<= 100 && details.score>= 70 ) {
            grade = 'A';
        } else if (details.score>= 60 ) {
            grade = 'B';
        } else if (details.score>= 50 ) {
            grade = 'C';
        } else if (details.score>= 45 ) {
            grade = 'D';
        } else if (details.score>= 40 ) {
            grade = 'E';
        } else if (details.score>= 0 ) {
            grade = 'F';
        }
    }
    
    userGrade()
    return (
        <>
        <tr className="">
            <td className="border text-center rounded">{i+1}</td>
            <td className="border text-center rounded">{details.course}</td>
            <td className="border text-center rounded">{details.unit}</td>
            <td className="border text-center rounded">{details.score}</td>
            <td className="border text-center rounded">{grade}</td>
            <td className="border text-center rounded">
                <button className="btn btn-danger" onClick={deleteMyGoods}>Delete</button>
            </td>
        </tr>
        </>
    );
}

export default UserInputs;