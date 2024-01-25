import React, { Component, useState, useRef, useEffect } from 'react';
import { ReactDOM } from 'react-dom';
import { Container } from 'react-bootstrap';
import RndNumber from '../../../service/RndNumber';
import { Helmet } from 'react-helmet';


function useInputWithValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value)
    }
    const validateInput = () => {
        return value.search(/\d/) >= 0
    }
    return { value: value, onChange: onChange, validateInput }
}

const BootForm = () => {
    // const [text, setText] = useState('');
    // const[textArea, setTextArea] = useState('');
    const [number, setNumber] = useState('');
    const myRef = useRef(1);
    const input = useInputWithValidate('');
    const textArea = useInputWithValidate('');



    const validateInput = (text) => {
        return text.search(/\d/) >= 0
    }

    useEffect(() => {
        updateNumber();


    })

    const rndNumber = new RndNumber();

    const updateNumber = () => {
        rndNumber.getRndNumber()

            .then(response => console.log(response))
            .catch(err => console.log(err))
    }


    // const color = input.validateInput() ? 'text-danger' : null;
    const color = input.validateInput() ? 'text-danger' : null;


    return (
        <Container>
            <Helmet>
                    <meta
                        name="description"
                        content={`form`}
                    />
                    <title>Form</title>
                </Helmet>
            <form className="w-50 border mt-5 p-3 m-auto"
                style={{
                    'overflow': 'hidden',
                    'position': 'relative'
                }}
            >
                
                <div className="mb-3">
                    <input
                        // value={`${input.value} / ${textArea.value}`}
                        value={`${input.value} / ${textArea}`}
                        type="text"
                        className='form-control  mt-3'
                        readOnly />
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input

                        // onChange={input.onChange}
                        onChange={input.onChange}
                        type="email"
                        value={input.value}
                        className={`form-control ${color}`}
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea

                        onChange={textArea.onChange}
                        value={textArea.value}
                        onClick={() => myRef.current + 1}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
                {/* <button onSubmit={this.focusFirst} className='btn btn-primary'>send</button> */}

            </form>
        </Container>
    )

}




export default BootForm;
