import React from 'react';
import { formValidators } from '../../validators/formValidators.js'
import { saveForm } from '../../api/saveForm.js'
import { useForm } from "react-hook-form";


import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { CgClose } from 'react-icons/cg';

function Forms(props) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // function that submits form data to saveForm.js and send name/email to parent component
    const submitFormData = (e) => {

        const data = {
            'First Name': e.firstName,
            Surname: e.lastName,
            Email: e.email,
            Password: e.password,
        }
        
        try {
            //call saveForm.js (which saves into the spreadsheet)
            saveForm(data).then(res =>{
                //if successful, send name and email to parent component
                if (res === 'success'){ props.formSubmited(e.firstName, e.email); }
            })
        } catch (err) { console.log(err) }
      
    }



        
        return <>
            
            {/* render form in the about component in another column */}
            <Col className='text-white my-3 d-flex align-items-center justify-content-center' sm={8}>
                <div className='w-100 bg-green shadow px-sm-5 p-3'>
                    {/* close button floating right */}
                    <CgClose 
                        className='text-white d-md-inline-block float-right' 
                        role="button"  
                        size={30} 
                        onClick={() => props.hideForm()}
                    />

                    {/* heading in the middle */}
                    <h1 className='display-4 mb-4'>
                        Register
                    </h1>

                    {/* render form */}
                        
                    
                        <Form 
                            className='w-100' 
                            noValidate 
                            onSubmit={() => handleSubmit(onSubmit)}>
                            
                            {/* email field */}
                            <Form.Group>
                                <Form.Control 
                                    className='shadow border-0 rounded-pill' 
                                    type="email" 
                                    placeholder="Enter e-mail" 
                                    size="sm" 
                                    name="email" 
                                />
                            </Form.Group>

                            <Row className="my-3">
                                {/* first name field */}
                                <Form.Group as={Col}>
                                    <Form.Control 
                                        className='shadow border-0 rounded-pill' 
                                        placeholder="Enter your name" 
                                        size="sm" 
                                        name="firstName" 
                                    />
    
                                </Form.Group>

                                {/* last name field */}
                                <Form.Group as={Col}>
                                    <Form.Control 
                                        className='shadow border-0 rounded-pill' 
                                        placeholder="Enter your surname name" 
                                        size="sm" 
                                        name="lastName" 
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="my-3">
                                {/* password field */}
                                <Form.Group as={Col}>
                                    <Form.Control 
                                        className='shadow border-0 rounded-pill' 
                                        type="password" 
                                        placeholder="Enter a password" 
                                        size="sm" 
                                        name="password" 
                                    />

                                </Form.Group>

                                {/* password confirmation field */}
                                <Form.Group as={Col}>
                                    <Form.Control 
                                        className='shadow border-0 rounded-pill' 
                                        type="password" 
                                        placeholder="Repeat password" 
                                        size="sm" 
                                        name="passwordRepeat" 
                                    />
                                </Form.Group>
                            </Row>

                            <Button variant="outline-light shadow hover rounded-pill" type="submit">
                                Register
                            </Button>
                        </Form>
                </div>
            </Col>
         </>;
}
  
export default Forms;