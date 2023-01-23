/*
  Name: context.js
  Description: Creates the context used by the rest of the app to pass color schemes
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/12/2022
  Date revised: 1/23/2023
  Preconditions: Import react
  Postconditions: Creates a color scheme context to export
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

//Import everything used for the page
import React from "react";

//Create context to import colorschemes across the screens/pages
export const UserContext = React.createContext();
export const LoginContext = React.createContext();
export const ColorSchemeContext = React.createContext();