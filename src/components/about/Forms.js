import React from 'react';
import { formValidators } from '../../validators/formValidators.js'
import { saveForm } from '../../api/saveForm.js'

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { CgClose } from 'react-icons/cg';

class Forms extends React.Component {

    constructor(props) {

        super(props);
        
        this.submitFormData = this.submitFormData.bind(this); // refers to this of Form

    }

    // function that submits form data to saveForm.js and send name/email to parent component
    submitFormData(e){

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
                if (res === 'success'){ this.props.formSubmited(e.firstName, e.email); }
            })
        } catch (err) { console.log(err) }
      
    }

    render() {
        
        return <>
            
            {/* render form in the about component in another column */}
            <Col className='text-white my-3 d-flex align-items-center justify-content-center' sm={8}>
                <div className='w-100 bg-green shadow px-sm-5 p-3'>
                    {/* close button floating right */}
                    <CgClose 
                        className='text-white d-md-inline-block float-right' 
                        role="button"  
                        size={30} 
                        onClick={this.props.hideForm}
                    />

                    {/* heading in the middle */}
                    <h1 className='display-4 mb-4'>
                        Register
                    </h1>

                    {/* render form */}
                        
                    
                        <Form 
                            className='w-100' 
                            noValidate 
                            onSubmit={handleSubmit}>
                            
                            {/* email field */}
                            <Form.Group>
                                <Form.Control 
                                    className='shadow border-0 rounded-pill' 
                                    type="email" 
                                    placeholder="Enter e-mail" 
                                    size="sm" 
                                    name="email" 
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email} //show valid sign if it was touched and there is no error
                                    isInvalid={!!errors.email} //show error sign if there is an error
                                />
                                <Form.Control.Feedback className='text-white text-left' type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Row>
                                {/* first name field */}
                                <Form.Group as={Col}>
                                    <Form.Control 
                                        className='shadow border-0 rounded-pill' 
                                        placeholder="Enter your name" 
                                        size="sm" 
                                        name="firstName" 
                                        value={values.name}
                                        onChange={handleChange}
                                        isValid={touched.firstName && !errors.firstName}
                                        isInvalid={!!errors.firstName}
                                    />
                                    <Form.Control.Feedback className='text-white text-left' type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/* last name field */}
                                <Form.Group as={Col}>
                                    <Form.Control 
                                        className='shadow border-0 rounded-pill' 
                                        placeholder="Enter your surname name" 
                                        size="sm" 
                                        name="lastName" 
                                        value={values.lastName}
                                        onChange={handleChange}
                                        isValid={touched.lastName && !errors.lastName}
                                        isInvalid={!!errors.lastName}
                                    />
                                    <Form.Control.Feedback className='text-white text-left' type="invalid">
                                        {errors.lastName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                {/* password field */}
                                <Form.Group as={Col}>
                                    <Form.Control 
                                        className='shadow border-0 rounded-pill' 
                                        type="password" 
                                        placeholder="Enter a password" 
                                        size="sm" 
                                        name="password" 
                                        value={values.password}
                                        onChange={handleChange}
                                        isValid={touched.password && !errors.password}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback className='text-white text-left' type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/* password confirmation field */}
                                <Form.Group as={Col}>
                                    <Form.Control 
                                        className='shadow border-0 rounded-pill' 
                                        type="password" 
                                        placeholder="Repeat password" 
                                        size="sm" 
                                        name="passwordRepeat" 
                                        value={values.passwordRepeat}
                                        onChange={handleChange}
                                        isValid={touched.passwordRepeat && !errors.passwordRepeat}
                                        isInvalid={!!errors.passwordRepeat}
                                    />
                                    <Form.Control.Feedback className='text-white text-left' type="invalid">
                                        {errors.passwordRepeat}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Button variant="outline-light shadow hover rounded-pill" type="submit">
                                Register
                            </Button>
                        </Form>
                </div>
            </Col>
         </>;
    }
}
  
export default Forms;