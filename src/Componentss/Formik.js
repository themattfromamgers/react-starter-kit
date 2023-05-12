import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, useFormik } from 'formik';

const FormikPage = ()=> {

  const {handleChange, handleSubmit, values} = useFormik({
    initialValues:{

        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        hobies: [],
        country: ''

    },
    onSubmit: (values)=>{
      console.log(values)
    }
  })

    return(
  <div>
    <h1>Sign Up</h1>      
      <Form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input 
        id="firstName" 
        name="firstName" 
        placeholder="Jane" 
        onChange={handleChange} 
        value={values.firstName} />

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" 
        name="lastName" 
        placeholder="Doe"  
        onChange={handleChange}
        value={values.lastName} />

        <label htmlFor="email" >Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
          value={values.email} 
        />

<br />
<span>mLAE</span>
        <input type="radio" 
        name="gender"
        value='male'
        onChange={handleChange}
        checked={values.gender === 'male'}/>


<span>feamale</span>
        <input type="radio" 
        name="gender"
        value='female'
        onChange={handleChange}
        checked={values.gender === 'female'}
        />
        <br />
        <br />

        <input 
        type="checkbox" 
        name='hobies' 
        value='futbol' 
        onChange={handleChange}/>

        <input type="checkbox" 
        name='hobies'
        value='beyzbol' 
        onChange={handleChange}/>

        <input type="checkbox"
        name='hobies'
        value='basketbol' 
        onChange={handleChange} />



        <br />
        <br />

          <select name='country' value={values.country} onChange={handleChange}>
            <option value="tr">tr</option>
            <option value="en">en</option>
            <option value="uk">uk</option>
          </select>

        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />

        <code>{JSON.stringify(values)}</code>
      </Form>
  </div>
  )
}
export default FormikPage