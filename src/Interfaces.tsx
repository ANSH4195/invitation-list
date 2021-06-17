import React from "react";

interface ITheme {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IPerson {
  id: number;
  name: string;
  age: number;
  avatar: string;
  description?: string;
}

interface IList {
  people: {
    id: number;
    name: string;
    age: number;
    avatar: string;
    description?: string;
  }[];
}

interface IAddToListForm {
  handleClose: () => void;
}

export { ITheme, IPerson, IList, IAddToListForm };
