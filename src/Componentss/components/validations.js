import * as yup from 'yup'

const validations = yup.object().shape({
    email: yup.string().email('HEY Bİİİ GİR').required(),
    password: yup.string().min(5).required(),
    pasOnay: yup.string().oneOf([yup.ref('password')]).required(),
    
})

export default validations