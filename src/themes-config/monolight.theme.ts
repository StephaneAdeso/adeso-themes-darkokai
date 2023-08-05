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
const foreground = "#111111";
const transparent = "#00000000";

export const getTheme = (): Theme => {
  return new Theme("Monolight", ThemeTypes.LIGHT, {
    ui: {
      titleBar: {
        background: background1,
        border: background1,
        foreground: foreground,
        inactiveBackground: background1Darken,
        inactiveForeground: foreground
      },
      activityBar: {
        activeIcon: color1,
        activeIconBorder: color2,
        background: background1,
        inactiveIcons: "#939393",
        border: background1,
        bottomBadgeBackground: '#ff0000',
        bottomBadgeForeground: '#ff0000'
      },
      breadcrumbs: {
        background: '#ff0000',
        foreground: '#ff0000'
      },
      minimap: {
        background: "#ff0000"
      },
      /** trees and list windows */
      sideBar: {
        background: background1,
        border: background1,
        itemsForeground: foreground,
        sectionHeaderForeground: foreground,
        sectionHeaderBackground: background1,
        sectionHeaderLineBorder: background1,
        titleForeground: color1
      },
      statusBar: {
        background: '#ff0000',
        itemsForeground: '#ff0000',
        border: '#ff0000',
        itemsHoverBackground: '#ff0000'
      },
      tabs: {
        activeBackground: color2Alpha,
        activeLeftAndRightBorder: "#ff0000",
        activeBorderTop: color1,
        activeBorderBottom: color1,
        activeForeground: "#ff0000",
        inactiveBackground: background1,
        inactiveForeground: "#ff0000",
        unfocusedActiveForeground: "#ff0000",
        unfocusedInactiveForeground: '#ff0000'
      },
      /** main menus and pop windows like command palette */
      menus: {
        background: background1Darken,
        hoverBackground: color1Alpha,
        inputBackground: background1Lighten,
        foreground: foreground,
        buttonBackground: '#ff0000'
      },
      lists: {
        listActiveSelectionBackground: '#ff0000',
        listActiveSelectionForeground: '#ff0000',
        listFocusOutline: '#ff0000',
        listFocusKeyboardBackground: '#ff0000',
        listItemHoverBackground: '#ff0000',
        quickInputBackground: '#ff0000',
        quickInputForeground: '#ff0000',
        quickInputFocusBackground: '#ff0000',
        treeIndentGuideStroke: '#ff0000'
      },
      editor: {
        inlayHintBackground: background1Darken2,
        lineActiveNumber: color2,
        lineNumbersRulers: "#f7f7f7",
        scrollbarLineSeparator: lineColor1,
        selectedLineBorder: lineColor1,
        background: '#ff0000',
        groupHeaderTabsBackground: '#ff0000',
        lineNumbersColumnBackground: '#ff0000',
        inlayHintForeground: '#ff0000',
        activeIndentGuideColor: color1,
        foreground: '#ff0000',
        indentGuideColor: "#ff0000"

      }
      ,
      panel: {
        background: '#ff0000',
        border: '#ff0000'
      },
      global: {
        scrollbarButtonColor: lineColor1,
        windowResizeline: color1,
        globalForeground: '#ff0000',
        scrollbarShadow: '#ff0000',
        globalFocusBorder: '#ff0000'
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
