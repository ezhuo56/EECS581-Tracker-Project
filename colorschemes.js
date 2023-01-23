/*
  Name: colorschemes.js
  Description: A list of color scheme objects to be exported
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/12/2022
  Date revised: 1/23/2023
  Preconditions: None
  Postconditions: Creates color scheme objects to export
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

//Lightmode
export const lightColorScheme = {
      name: 'light',
      darkMode: false,
      backgroundColor: 'white',
      textColor: 'black',
      primaryColor: "crimson",
      secondaryColor: 'darkred',
      selectColor: "lightskyblue",
      navBar: 'white',
}

//Darkmode
export const darkColorScheme = {
      name: 'dark',
      darkMode: true,
      backgroundColor: 'slategray',
      textColor: 'white',
      primaryColor: "crimson",
      secondaryColor: 'darkred',
      selectColor: "lightskyblue",
      navBar: 'white',
}

//Bluemode
export const blueColorScheme = {
      name: "blue",
      darkMode: false,
      backgroundColor: 'mintcream',
      textColor: 'darkslategray',
      primaryColor: "midnightblue",
      secondaryColor: 'royalblue',
      selectColor: "steelblue",
      navBar: 'lightcyan',
}
