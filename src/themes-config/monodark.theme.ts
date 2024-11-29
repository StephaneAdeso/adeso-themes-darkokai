import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background1 = "#1f1f1f";
const background1Bright = Color(background1).lighten(0.4).hexa();
const foreground = "#b8b8b8";
const color1 = "#22c0f0";
const color1Alpha = Color(color1).alpha(0.3).hexa();
const color2 = "#eb5493";
const color2Alpha = Color(color2).alpha(0.1).hexa();
const lineColor1 = "#343434";
const lineColor1Bright = Color(lineColor1).lighten(0.3).hexa();
const transparent = "#00000000";
const color3 = "#6e6e6e";

export const getTheme = (): Theme => {
  return new Theme("Monodark", ThemeTypes.DARK, {
    ui: {
      titleBar: {
        background: background1,
        border: background1,
        foreground: foreground,
        inactiveBackground: background1Bright,
        inactiveForeground: foreground
      },
      activityBar: {
        activeIcon: color1,
        activeIconBorder: color2,
        background: background1,
        border: background1,
        inactiveIcons: "#dbdbdb7c",
        iconBadgeBackground: color2,
        iconBadgeForeground: background1
      },
      breadcrumbs: {
        background: background1,
        foreground: foreground
      },
      minimap: {
        background: background1
      },
      sideBar: {
        background: background1,
        border: lineColor1,
        itemsForeground: foreground,
        sectionHeaderForeground: foreground,
        sectionHeaderBackground: background1,
        sectionHeaderLineBorder: background1,
        titleForeground: color1
      },
      statusBar: {
        background: background1,
        border: color2,
        debuggingBackground: null,
        debuggingBorder: null,
        debuggingForeground: "#ffffff",
        itemActiveBackground: null,
        itemErrorBackground: null,
        itemErrorForeground: null,
        itemFocusBorder: null,
        itemRemoteBackground: color2,
        ItemRemoteForeground: "#ffffff",
        itemsForeground: color1,
        itemsHoverBackground: null,
        itemWarningBackground: null,
        itemWarningForeground: null,
        noFolderBackground: null,
        noFolderBorder: null,
        noFolderForeground: "#ffffff",
        offlineBackground: null,
        offlineForeground: "#ffffff"
      },
      tabs: {
        activeBackground: color2Alpha,
        activeLeftAndRightBorder: transparent,
        activeBorderTop: color1,
        activeBorderBottom: color1,
        activeForeground: foreground,
        inactiveBackground: background1,
        inactiveForeground: foreground,
        unfocusedActiveForeground: foreground,
        unfocusedInactiveForeground: foreground
      },
      menus: {
        background: background1Bright,
        hoverBackground: color1Alpha,
        inputBackground: background1Bright,
        buttonBackground: color1Alpha,
        foreground: foreground
      },
      lists: {
        listActiveSelectionBackground: color1Alpha,
        listActiveSelectionForeground: foreground,
        listFocusOutline: color1,
        listFocusKeyboardBackground: transparent,
        listItemHoverBackground: color1Alpha,
        quickInputBackground: background1,
        quickInputForeground: foreground,
        quickInputFocusBackground: color1Alpha,
        treeIndentGuideStroke: color1
      },
      editor: {
        inlayHintBackground: background1Bright,
        lineActiveNumber: "#ae5dff",
        lineRulersNumbers: lineColor1Bright,
        scrollbarLineSeparator: background1,
        selectedLineBorder: lineColor1,
        background: background1,
        groupHeaderTabsBackground: background1,
        lineNumbersColumnBackground: background1,
        inlayHintForeground: color3,
        activeIndentGuideColor: color1,
        foreground: "#cfcfcf",
        indentGuideColor: color3,
        groupBorder: lineColor1
      },
      panel: {
        background: background1,
        border: lineColor1
      },
      global: {
        scrollbarButtonColor: lineColor1,
        globalForeground: foreground,
        globalFocusBorder: color1,
        scrollbarShadow: transparent
      }
    },
    code: {
      boolean: "#c09ad9",
      comment: color3,
      func: "#56cc1f",
      keyword: color2,
      numeric: "#a9dff0",
      punctuation: "#f69608", // And operators
      string: "#e6d08e",
      type: color1,
      typePrimitive: "#437fff",
      usedProperties: "#ae5dff",
      variable: "#cfcfcf"
    }
  });
};
