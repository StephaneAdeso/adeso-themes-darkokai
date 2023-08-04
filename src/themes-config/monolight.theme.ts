import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background1 = "#d6d6d6";
const background1Darken = Color(background1).darken(0.1).hexa();
const background1Darken2 = Color(background1).darken(0.03).hexa();
const background1Lighten = Color(background1).lighten(0.1).hexa();
const color1 = "#00a2d3";
const color1Alpha = Color(color1).alpha(0.3).hexa();
const color2 = "#cf2c70";
const lineColor1 = "#e7e7e7";
const color2Alpha = Color(color2).alpha(0.1).hexa();
const text1 = "#111111";
const transparent = "#00000000";

export const getTheme = (): Theme => {
  return new Theme("Monolight", ThemeTypes.LIGHT, {
    ui: {
      topMenuBar: {
        background: '#ff0000',
        foreground: '#ff0000'
      },
      activityBar: {
        activeIcon: color1,
        inactiveIcons: "#939393",
      },
      /** trees and list windows */
      sideBar: {
        activeItem: color1Alpha,
        borderLine: color1,
        focusItemBackground: transparent,
        hoverItemBackground: color1Alpha,
        inactiveSelectionBackground: color1Alpha,
      },
      statusBar: {
        barBackground: '#ff0000',
        barForeground: '#ff0000',
        iconBackground: '#ff0000'
      },
      tabs: {
        background: color2Alpha,
        borders: color2,
      },
      /** main menus and pop windows like command palette */
      menus: {
        background: background1Darken,
        hoverBackground: color1Alpha,
        inputBackground: background1Lighten,
        quickInputListBackground: color1Alpha,
        text: text1,
      },
      editorPanel: {
        inlineHintBackground: background1Darken2,
        lineActiveNumber: color2,
        lineNumbersRulers: "#f7f7f7",
        lineSeparator: lineColor1,
        selectedLineBorder: lineColor1

      }
      ,
      terminalPanel: {
        background: '#ff0000',
        Foreground: '#ff0000'
      },
      general: {
        mainBackground: background1,
        scrollbarButtonBackground: lineColor1,
        windowResizeline: color1,
      },
    },
    code: {
      boolean: "#0091A6",
      comment: "#868686",
      func: "#389e08",
      keyword: color2,
      numeric: "#9C00A6",
      punctuation: "#ca7900", // And operators
      string: "#8C7300",
      type: color1,
      typePrimitive: "#0048E2",
      usedProperties: "#9b36ff",
      variable: "#2D2D2D",
    }







    /* -----------------------------
        -       Exclusive UI Colors    -
        ----------------------------- */




  });
};
