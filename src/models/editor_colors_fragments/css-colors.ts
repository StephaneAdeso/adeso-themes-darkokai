import { Palette } from "../interfaces/palette.interface";

/** SASS files inherit 99% of CSS configs. So check this file before
 * altering the sass-colors.ts file
 */
export function getCssColors(palette: Palette) {
  return [
    {
      name: "CSS functions",
      scope: ["source.css support.function"],
      settings: {
        foreground: palette.editor.function,
      },
    },
    {
      name: "CSS properties",
      scope: ["source.css variable"],
      settings: {
        foreground: palette.editor.usedProperties,
      },
    },
    {
      name: "CSS Entity name ",
      scope: ["entity.name.tag.css"],
      settings: {
        foreground: palette.editor.type,
      },
    },
    {
      name: "CSS keyword ",
      scope: ["support.constant.media.css"],
      settings: {
        foreground: palette.editor.keyword,
      },
    },
    {
      name: "CSS keyword operator ",
      scope: ["source.css keyword.operator"],
      settings: {
        foreground: palette.editor.punctuation,
      },
    },
    /* for Sass files */
    {
      name: "CSS attribute string ",
      scope: ["meta.attribute-selector"],
      settings: {
        foreground: palette.editor.string,
      },
    },
  ];
}
