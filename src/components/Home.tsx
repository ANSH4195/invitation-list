import React from "react";
import PeopleList from "./PeopleList";
import AddPerson from "./AddPerson";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  return (
    <Box my={5}>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} sm={12} md={6}>
          <Paper style={{ borderRadius: "20px" }}>
            <PeopleList />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <AddPerson />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
