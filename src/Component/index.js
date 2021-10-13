import React, { useState } from 'react'
import Tables from './table';
const Index = () => {
    const [inputs, setInput] =useState([])
    // console.log(inputs)
    const [details, setDetails]= useState(
        {
            course: "",
            score: "",
            id: "",
            scale: "",
            unit: "",
        }
    )

    const userDetails = (e) => {
        let detail = {...details,[e.target.name]: e.target.value};
        setDetails(detail)
    }

    const submitButton = () => {
        if (details.course !== '' && details.score !== '' && details.score <= 100 && details.score >= 0  && details.unit !== "") {
            details.id = inputs.length+1
            setInput([...inputs, details])
            setDetails(
                {
                    course: "",
                    score: "",
                    id: "",
                    scale: "",
                    unit: "",
                }
            )
            document.getElementById('score').innerHTML =``
            document.getElementById('course').innerHTML =``
            document.getElementById('unit').innerHTML =``
            document.getElementById('emptyCourse').value=''
            document.getElementById('emptyScore').value=''
            document.getElementById('emptyUnit').value=''
            
        } else if (details.course === '' && details.score !== '' && details.score <= 100 && details.unit !== "") {
            document.getElementById('score').innerHTML =``
            document.getElementById('course').innerHTML =``
            document.getElementById('unit').innerHTML =``
            document.getElementById('course').innerHTML =
            `
            <small className="text text-danger col-12">Please Input a Course</small>
            `
        } else if (details.course !== '' && details.score === '' && details.score <= 100  && details.unit !== "") {
            document.getElementById('score').innerHTML =``
            document.getElementById('course').innerHTML =``
            document.getElementById('unit').innerHTML =``
            document.getElementById('score').innerHTML =
            `
            <small className="text text-danger col-12">Please Input a Score</small>
            `
        } else if (details.course !== '' && details.score !== '' && (details.score >= 101 || details.score < 0)  && details.unit !== "") {
            document.getElementById('score').innerHTML =``
            document.getElementById('course').innerHTML =``
            document.getElementById('unit').innerHTML =``
            document.getElementById('score').innerHTML =
            `
            <small className="text text-danger col-12">Score must be 0 to 100</small>
            `
        } else if (details.course !== '' && details.score !== ''  && details.unit === "") {
            document.getElementById('score').innerHTML =``
            document.getElementById('course').innerHTML =``
            document.getElementById('unit').innerHTML =``
            document.getElementById('unit').innerHTML =
            `
            <small className="text text-danger col-12">Please Input Unit</small>
            `
        } else if (details.course === '' && details.score !== ''  && details.unit === "") {
            document.getElementById('score').innerHTML =``
            document.getElementById('course').innerHTML =``
            document.getElementById('unit').innerHTML =``
            document.getElementById('course').innerHTML =
            `
            <small className="text text-danger col-12">Please Input a Course</small>
            `
            document.getElementById('unit').innerHTML =
            `
            <small className="text text-danger col-12">Please Input Unit</small>
            `
        } else if (details.course !== '' && details.score === ''  && details.unit === "") {
            document.getElementById('score').innerHTML =``
            document.getElementById('course').innerHTML =``
            document.getElementById('unit').innerHTML =``
            document.getElementById('score').innerHTML =
            `
            <small className="text text-danger col-12">Please Input a Score</small>
            `
            document.getElementById('unit').innerHTML =
            `
            <small className="text text-danger col-12">Please Input Unit</small>
            `
        } else if (details.course === '' && details.score === ''  && details.unit !== "") {
            document.getElementById('score').innerHTML =``
            document.getElementById('course').innerHTML =``
            document.getElementById('unit').innerHTML =``
            document.getElementById('course').innerHTML =
            `
            <small className="text text-danger col-12">Please Input a Course</small>
            `
            document.getElementById('score').innerHTML =
            `
            <small className="text text-danger col-12">Please Input a Score</small>
            `
        }
        else {
            document.getElementById('score').innerHTML =``
            document.getElementById('course').innerHTML =``
            document.getElementById('unit').innerHTML =``
            document.getElementById('course').innerHTML =
            `
            <small className="text text-danger col-12">Please Input a Course</small>
            `
            document.getElementById('score').innerHTML =
            `
            <small className="text text-danger col-12">Please Input a Score</small>
            `
            document.getElementById('unit').innerHTML =
            `
            <small className="text text-danger col-12">Please Input Unit</small>
            `
        }
    } 
    // console.log(inputs)

    const deleteMyGoods =(ind) => {
        let newInput = inputs.filter((details)=> details.id!==ind);;
        setInput(newInput);
    }
    
    return (
        <React.Fragment>
        <body className="container-fluid p-3 bg-dark">
            <section className="row">
                <main className=" col-md-1 col-lg-3 d-none d-sm-block">

                </main>
                <main className="col-12 col-md-10 col-lg-6 bg-light p-2 border shadow">
                    <div className="row">
                        <button className="btn btn-success mx-auto">CGPA CALCULATOR</button>
                    </div>
                    <hr/>
                    <div className="row">
                       <div className="col-6">Set details</div>
                       {/* <div className="col-6">
                            <select className="col-2 form-control" name="scale">
                                <option name="scale">Choose Scale</option>
                                <option name="scale">5.0</option>
                                <option name="scale">4.0</option>
                            </select>
                       </div> */}
                    </div>
                    <hr className="m-0"/>
                    <div className="row m-1">
                        <div className="col-6">
                            <div className=" row">
                                <label className="col-5">Course </label>
                                <div className="col-6">
                                    <div className="row">
                                        <input className="col-6 w-100 form-control" onKeyUp={userDetails} name="course" maxLength="12" id="emptyCourse"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-12" id="course"></div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-6 row">
                            <div className=" row">
                            <label className="col-5">Score </label>
                                <div className="col-6">
                                    <div className="row">
                                    <input className="col-6 w-100 form-control" onKeyUp={userDetails} name="score" type="number" id="emptyScore"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-12" id="score"></div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div className="row m-2">
                    <div className="col-6 row">
                            <div className=" row">
                            <label className="col-5">Unit </label>
                                <div className="col-6">
                                    <div className="row">
                                    <input className="col-6 w-100 form-control" onKeyUp={userDetails} name="unit" type="number" id="emptyUnit"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-12" id="unit"></div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <button className="btn btn-success col-4 mx-auto" onClick={submitButton}>Add</button>
                    </div>
                    <hr/>
                    {inputs.length>0?<Tables inputs={inputs} details={details} deleteMyGoods={deleteMyGoods}/>: <div className="bg-danger text-white text-center">Please enter your course and score</div>}
                </main>
                <main className="col col-md-1 col-lg-3 d-none d-lg-block">

                </main>
            </section>
        </body>
        </React.Fragment>
    );
}

export default Index;