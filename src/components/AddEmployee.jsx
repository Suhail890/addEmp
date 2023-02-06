import React, { useState, useEffect } from "react";
import {
  Radio,
  FormControlLabel,
  RadioGroup,
  Button,
  FormGroup,
  Checkbox,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { useFormik } from "formik";
import { employeeSchema } from "./schemas/index";
import PersonIcon from "@mui/icons-material/Person";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const getLocalData = () => {
  const localData = localStorage.getItem("Emp");
  if (localData) {
    return JSON.parse(localStorage.getItem("Emp"));
  } else {
    return [];
  }
};

const AddEmployee = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [index, setIndex] = useState(null);
  const [isActive, setIsActive] = useState(false);

  let initialValues = {
    fname: "",
    lname: "",
    email: "",
    cont: "",
    dob: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    address: "",
    hobbies:"",
    accept: false,
  };
   
  const onSubmit = (values, action) => {

    if (isActive === true) {
      data.splice(index, 1, values );
      setIndex(null);
      setIsActive(false);
      localStorage.setItem("Emp", JSON.stringify(data));
      
    }else{
    const newData = [...data, values];
    setData(newData);
    localStorage.setItem("Emp", JSON.stringify(newData));
    }
  action.resetForm();
  };

  const { errors, touched, handleSubmit, getFieldProps} = useFormik({
    initialValues:editData || initialValues,
    onSubmit,
    validationSchema: employeeSchema,
    enableReinitialize:true,    
  });
  const handelDelt = (index) => {
    const fil = data.filter((elem, i) => i !== index);
    setData(fil);
    localStorage.setItem("Emp", JSON.stringify(fil));
  };
  const handelEdit = (item, index) => {
    // localStorage.setItem("ind",index)
    setIndex(index);
    setEditData(item);
    setIsActive(true);
  };

  useEffect(() => {
    setData(getLocalData());
  }, []);

  return (
    <div className="form-input">
      <h1>Add Employee</h1>
      <hr />
      <div className="logo">
        <PersonIcon />
      </div>
      <center>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="">First Name: </label>
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              {...getFieldProps("fname")}
            />
            {touched.fname && errors.fname ? (
              <div className="error">{errors.fname}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="">Last Name: </label>
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              {...getFieldProps("lname")}
            />
            {touched.lname && errors.lname ? (
              <div className="error">{errors.lname}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="">Email: </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              {...getFieldProps("email")}
            />
            {touched.email && errors.email ? (
              <div className="error">{errors.email}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="">Contact No: </label>
            <input
              type="number"
              name="cont"
              placeholder="Mobile Number"
              {...getFieldProps("cont")}
            />
            {touched.cont && errors.cont ? (
              <div className="error">{errors.cont}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="">DOB: </label>
            <input type="date" name="dob" {...getFieldProps("dob")} />
            {touched.dob && errors.dob ? (
              <div className="error">{errors.dob}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="">Gender: </label>
            <RadioGroup
              name="gender"
              row
              aria-label="gender"
              {...getFieldProps("gender")}
            >
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
            {touched.gender && errors.gender ? (
              <div className="error">{errors.gender}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="">Country: </label>
            <select name="country" {...getFieldProps("country")}>
              <option value="">Select</option>
              <option value="Australia">India</option>
              <option value="India">Australia</option>
              <option value="USA">USA</option>
            </select>
            {touched.country && errors.country ? (
              <div className="error">{errors.country}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="">State: </label>
            <select name="state" {...getFieldProps("state")}>
              <option value="">Select</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Gujrat">Gujrat</option>
              <option value="AP">AP</option>
            </select>
            {touched.state && errors.state ? (
              <div className="error">{errors.state}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="">City: </label>
            <select name="city" {...getFieldProps("city")}>
              <option value="">Options</option>
              <option value="Nanded">Nanded</option>
              <option value="Ahmadabad">Ahmadabad</option>
              <option value="Hydrabad">Hydrabad</option>
            </select>
            {touched.city && errors.city ? (
              <div className="error">{errors.city}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="">Address: </label>
            <textarea
              name="address"
              cols="55"
              rows="5"
              {...getFieldProps("address")}
            />
            {touched.address && errors.address ? (
              <div className="error">{errors.address}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="">Hobbies: </label>
            <FormGroup name="hobbies" {...getFieldProps("hobies")}>
              <FormControlLabel
                name="hobbies"
                control={<Checkbox />}
                label="Indoor Game"
                value=" Indoor Game"
              />
              <FormControlLabel
                name="hobbies"
                control={<Checkbox />}
                label="Outdoor Game"
                value=" Outdoor Game"
              />
              <FormControlLabel
                name="hobbies"
                control={<Checkbox />}
                label="Waching Movies"
                value=" Waching Movies"
              />
            </FormGroup>
            {errors.hobbies ? (
              <div className="error">{errors.hobbies}</div>
            ) : null}
          </div>
          <div>
            <input type="checkbox" name="accept" {...getFieldProps("accept")} />{" "}
            I Accept Terms & Condition
            {errors.accept ? (
              <div className="error">{errors.accept}</div>
            ) : null}
          </div>
          <br /> <br />
          <div className="btn">
            {!isActive ? (
              <Button variant="contained" type="submit" fullWidth>
                Submit
              </Button>
            ) : (
              <Button variant="contained" color="success" type="submit" fullWidth>
                Update
              </Button>
            )}
          </div>
        </form>
      </center>
      <hr />
      <hr />
      <div>
        <h1>Employee List</h1>
        <TableContainer>
          <Table>
            <TableHead>
              <TableCell align="left" width={20}>
                Sr.No
              </TableCell>
              <TableCell align="left" width={90}>
                Full Name
              </TableCell>
              <TableCell align="left" width={90}>
                Email
              </TableCell>
              <TableCell align="left" width={90}>
                Contact No.
              </TableCell>
              <TableCell align="left" width={90}>
                DOB
              </TableCell>
              <TableCell align="left" width={50}>
                Gender
              </TableCell>
              <TableCell align="left" width={80}>
                State
              </TableCell>
              <TableCell align="left" width={50}>
                City
              </TableCell>
              <TableCell align="left" width={90}>
                Address
              </TableCell>
              <TableCell align="left" width={90}>
                Hobbies
              </TableCell>
              <TableCell align="left" width={20}>
                Action
              </TableCell>
            </TableHead>

            {data.length > 0 &&
              data.map((item, index) => {
                return (
                  <>
                    <TableBody>
                      <TableRow>
                        <TableCell>{index + 1} </TableCell>
                        <TableCell>{`${item.fname} ${item.lname}`} </TableCell>
                        <TableCell> {item.email}</TableCell>
                        <TableCell> {item.cont}</TableCell>
                        <TableCell> {item.dob}</TableCell>
                        <TableCell> {item.gender}</TableCell>
                        <TableCell> {item.state}</TableCell>
                        <TableCell> {item.city}</TableCell>
                        <TableCell> {item.address}</TableCell>
                        <TableCell> {item.hobbies}</TableCell>
                        <TableCell>
                          <DeleteForeverIcon
                            onClick={() => handelDelt(index)}
                          />
                          <EditIcon onClick={() => handelEdit(item, index)} />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </>
                );
              })}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AddEmployee;
