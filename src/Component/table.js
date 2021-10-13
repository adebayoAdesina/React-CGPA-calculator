import React from 'react';
import CGPA from './CGPA';
import UserInputs from './userInputs';

const Tables = (props) => {
    let {inputs, details, deleteMyGoods}= props

    let visible = 0;
    const calculate = () => {
        if (visible === 0) {
            document.getElementById('show_CGPA').style.visibility = "visible";
            visible = 1;
        } else {
            document.getElementById('show_CGPA').style.visibility = "hidden";
            visible = 0;
        }
    }

    let score= 0;
    let total = 0;
    let CGPA= 0;
    let totalUnit=0;
    let totalPoint=0;
    for (let index = 0; index < inputs.length; index++) {
        score = eval(score + Number(inputs[index].score))
        total = eval(100 * (index+1))
        totalUnit = eval(totalUnit + Number(inputs[index].unit))
        if (inputs[index].score<= 100 && inputs[index].score>= 70 ) {
            totalPoint = eval(totalPoint + (5 * inputs[index].unit));
        } else if (inputs[index].score>= 60 ) {
            totalPoint = eval(totalPoint + (4 * inputs[index].unit));
        } else if (inputs[index].score>= 50 ) {
            totalPoint = eval(totalPoint + (3 * inputs[index].unit));
        } else if (inputs[index].score>= 45 ) {
            totalPoint = eval(totalPoint + (2 * inputs[index].unit));
        } else if (inputs[index].score>= 40 ) {
            totalPoint = eval(totalPoint + (1 * inputs[index].unit));
        } else {
            totalPoint = eval(totalPoint + (0 * inputs[index].unit));
        }
        CGPA = (eval(totalPoint/totalUnit)).toPrecision(3)
    }
    return (
        <>
        <div className="row" style={{padding: 2}}>
        <table className="text-center border border-2 border-success">
            <tr className="">
                <th className="border text-center border-success rounded"> No</th>
                <th className="border text-center border-success rounded">  Course</th>
                <th className="border text-center border-success rounded">  Unit</th>
                <th className="border text-center border-success rounded">  Score</th>
                <th className="border text-center border-success rounded"> Grade</th>
                <th className="border text-center border-success rounded"> Delete</th>
            </tr>
            {inputs.map((details, i)=>(<UserInputs details={details} i={i} deleteMyGoods={()=>deleteMyGoods(details.id)}/>)) }
            <tr className="" id="show_CGPA" style={{visibility: "hidden"}}>
                <th colSpan="2">Total:</th>
                <th>T.U={totalUnit}</th>
                <th>={score}/{total}</th>
                <th>T.P={totalPoint}</th>
                <th colSpan="2">CGPA={CGPA}</th>
            </tr>
        </table>
        <div className="row mt-1">
            <button className="btn btn-success col-4 mx-auto" onClick={calculate}>Calculate</button>
        </div>
        </div>
        </>
    );
}

export default Tables;