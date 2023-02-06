import * as Yup from "yup"

export const employeeSchema = Yup.object({
    fname:Yup.string().required("Fill the First Name"),
    lname:Yup.string().required("Fill the Last Name"),
    email:Yup.string().email("Invalid email format").required("Enter the Email ID"),
    cont:Yup.number().required("Fill the Contact No."),
    dob:Yup.string().required("Fill the Date of Birth"),
    gender:Yup.string().required("Fill the Gender"),
    country:Yup.string().required("Fill the Country"),
    state:Yup.string().required("Fill the State"),
    city:Yup.string().required("Fill the City"),
    address:Yup.string().required("Fill the address"),
    hobbies:Yup.array().required("Fill the Hobbies"),
    accept:Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions.'),
    })