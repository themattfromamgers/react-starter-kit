import { useFormik } from 'formik';
import Validations from './validations';

function Signup(){

    const {handleChange, handleSubmit, handleBlur, values, errors, touched} = useFormik({
        initialValues:{
            email: '',
            password:'',
            pasOnay: ''
    
    
        },
        onSubmit: (values)=>{
          console.log(values)
        },
        Validations
      })

    return(
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="email" >Email</label>
                <input
                    name="email"
                    onChange={handleChange}
                    value={values.email} 
                    onBlur={handleBlur}
                    />
                {errors.email && touched.email && (<div>error: {errors.email} </div>)}

                <label htmlFor="password" >Password</label>
                <input
                    name="password"
                    onChange={handleChange}
                    value={values.password} 
                    />
                {errors.password && (<div>error: {errors.password} </div>)}
                <label htmlFor="pasOnay">pasOnay</label>
                <input
                    name="pasOnay"
                    onChange={handleChange}
                    value={values.pasOnay} 
                    />
                    {errors.pasOnay && (<div>error: {errors.pasOnay} </div>)}

                <br />
                <button type="submit">Submit</button>
                <br />

                <code>{JSON.stringify(values)}</code>
            </form>
        </>
    )
}

export default Signup