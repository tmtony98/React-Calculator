import {useState} from 'react';
import './App.css';

function App() { //
    const [val, setVal] = useState("")
    //
    const backspace = () => {
        try {
            setVal(val.slice(0, -1))

        } catch (err) {
            setVal("error")

        }
    }
    //
    const calculate = () => {
        try {
            console.log(val);
            setVal(eval(val))
        } catch (error) {
            setVal("error")
        }
    }
    //
    const delData = () => {
        setVal("")
    }


    return (
        <>
            <div className='container-fluid '>
                <div className='row d-flex  justify-content-center '>
                    <div className='col-lg-5 px-5 py-3 align-items-center  col-md-12'>
                        <div class="card p-1 bg-black rounded"
                            style={
                                {
                                    width: "19rem",
                                    height: "475px",
                                    marginTop: "15%"
                                }
                        }>
                            <div class="card-body ">
                                <input type='text'
                                    value={val}
                                    className='form-control mt-2 fs-4 text-end fw-bold form-control-md mb-4 p-4'/>
                                <div class="container  text-center">
                                    <div class="row row-cols-4">
                                        <div class="col">
                                            <button onClick={delData}
                                                style={
                                                    {
                                                        paddingBottom: "8px",
                                                        paddingTop: "7px",
                                                        height: "48px"
                                                    }
                                                }
                                                className='btn mb-3 fw-bold   btn-secondary'>AC</button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value="("
                                                className='btn px-3  text-light   fs-4  btn-secondary '>(</button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value=")"
                                                className='btn px-3  text-light  fs-4   btn-secondary '>)</button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                style={
                                                    {
                                                        height: "50px",
                                                        width: "45px"
                                                    }
                                                }
                                                value="/"
                                                className='btn fw-bold  btn-primary text-light'>
                                                <i class="fa-solid fa-divide"></i>
                                            </button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value="7"
                                                className='btn px-3 mb-3 text-light btn-dark fs-4  '>7</button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value="8"
                                                className='btn px-3  text-light fs-4 btn-dark '>8</button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value={9}
                                                className='btn px-3  text-light btn-dark  fs-4 '>9</button>
                                        </div>
                                        <div class="col">
                                            <button style={
                                                    {
                                                        height: "46px",
                                                        width: "46px"
                                                    }
                                                }
                                             onClick={
                                                    (e) => {
                                                        console.log(e.target);
                                                        setVal(val + e.target.value)
                                                    }
                                                }
                                                value="*"
                                                className='btn  px-3  fs-4 text-light  btn-primary'>
                                                x
                                            </button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value={4}
                                                className='btn px-3 text-light  mb-3 fs-4  btn-dark '>4</button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value="5"
                                                className='btn px-3 text-light fs-4  btn-dark '>5</button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value={6}
                                                className='btn  px-3 mb-3 text-light  fs-4 btn-dark '>6</button>
                                        </div>

                                        <div class="col">
                                            <button style={
                                                    {
                                                        height: "46px",
                                                        width: "46px"
                                                    }
                                                }
                                            onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value='-'
                                                className='btn  px-3 mb-3  text-light   fs-4 btn-primary'>
                                               -
                                            </button>
                                        </div>

                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value={1}
                                                className='btn  px-3 mb-3  text-light  fs-4 btn-dark'>1</button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value={2}
                                                className='btn  px-3  fs-4  text-light  btn-dark '>2</button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value={3}
                                                className='btn  px-3  fs-4  text-light  btn-dark '>3</button>
                                        </div>
                                        <div class="col">
                                            <button style={
                                                    {
                                                        height: "46px",
                                                        width: "46px"
                                                    }
                                                } onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value='+'
                                                className='btn  px-3  text-light  fs-4 btn-primary'>
                                                +
                                            </button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value={0}
                                                className='btn  px-3   text-light fs-4 btn-dark '>0</button>
                                        </div>
                                        <div class="col">
                                            <button onClick={
                                                    (e) => setVal(val + e.target.value)
                                                }
                                                value='.'
                                                style={
                                                    {
                                                        height: "50px",
                                                        width: "45px"
                                                    }
                                                }
                                                className='btn px-3  text-light  fw-bold   btn-dark '>.</button>
                                        </div>
                                        <div class="col">
                                            <button 
                                            onClick={backspace}
                                                className='btn px-2.5  fs-4  text-light  btn-danger'>
                                                <i class="fa-solid fa-delete-left fa-xs"></i>
                                            </button>
                                        </div>
                                        <div class="col">
                                            <button onClick={calculate}
                                                style={
                                                    {
                                                        height: "50px",
                                                        width: "50px"
                                                    }
                                                }
                                                className='btn   text-light  btn-success'>
                                                <i class="fa-solid fa-equals"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default App;
