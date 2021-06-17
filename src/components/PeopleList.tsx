import React from "react";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Typography,
  IconButton,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import CloseIcon from "@material-ui/icons/Close";
import { removePerson } from "../state/peopleSlice";

import { IPerson } from "../Interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    red: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500]
    },
    deleteButtonStyles: {
      "& #delete-button": {
        display: "none"
      },
      "&:hover": {
        "& #person-dp": {
          display: "none"
        },
        "& #delete-button": {
          display: "flex"
        }
      }
    }
  })
);

const PeopleList: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const people = useAppSelector((state) => state.people.people);

  const remove = (id: number) => {
    dispatch(removePerson(id));
  };

  const mapPeople = () => {
    return people.map((person: IPerson, index: Number) => {
      const description =
        person.description && person.description.length > 40
          ? person.description.substring(0, 40) + "..."
          : person.description;
      return (
        <React.Fragment key={person.id}>
          <ListItem className={classes.deleteButtonStyles}>
            <ListItemAvatar>
              <div>
                <Avatar
                  id="person-dp"
                  src={`${person.avatar}`}
                  alt={`${person.name}`}
                />
                <Avatar id="delete-button" className={classes.red}>
                  <IconButton
                    aria-label="delete"
                    onClick={() => remove(person.id)}
                  >
                    <CloseIcon />
                  </IconButton>
                </Avatar>
              </div>
            </ListItemAvatar>
            <ListItemText
              primary={`${person.name}`}
              secondary={`${description || "No Description"}`}
              style={{ width: "55%" }}
            />
            <ListItemText
              primary={
                <Typography
                  variant="subtitle2"
                  align="center"
                  color="textSecondary"
                >
                  <em>Age: {person.age}</em>
                </Typography>
              }
            />
          </ListItem>
          {index !== people.length - 1 && <Divider />}
        </React.Fragment>
      );
    });
  };

  return (
    <List>
      {(people && people.length) ? mapPeople() : "No People in the list, Add someone?"}
    </List>
  );
};

export default PeopleList;
