import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { addPerson } from "../state/peopleSlice";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { IPerson, IAddToListForm } from "../Interfaces";

const validationSchema: yup.SchemaOf<IPerson> = yup.object({
  id: yup.number().required("ID is required"),
  name: yup.string().required("Name is required"),
  age: yup.number().required("Age is required"),
  avatar: yup.string().required("Avatar URL is required"),
  description: yup.string()
});

const AddPersonForm: React.FC<IAddToListForm> = ({ handleClose }) => {
  const dispatch = useAppDispatch();
  const people = useAppSelector((state) => state.people.people);

  const formik = useFormik({
    initialValues: {
      id: 3,
      name: "",
      age: NaN,
      avatar: "",
      description: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values: IPerson) => {
      dispatch(addPerson([...people, values]));
      handleClose();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            type="text"
            variant="outlined"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={9}>
          <TextField
            required
            id="avatar"
            name="avatar"
            label="Avatar Image URL"
            type="text"
            variant="outlined"
            fullWidth
            value={formik.values.avatar}
            onChange={formik.handleChange}
            error={formik.touched.avatar && Boolean(formik.errors.avatar)}
            helperText={formik.touched.avatar && formik.errors.avatar}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            type="number"
            variant="outlined"
            fullWidth
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            rows={4}
            id="description"
            name="description"
            label="Description"
            type="text"
            variant="outlined"
            fullWidth
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddPersonForm;
