import { Palette } from "../interfaces/palette.interface";

/** colors that affects more than 1 language. Based and checked on
 * typescript files.
 */
export function getGenericColors(palette: Palette) {
  return [
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        fontStyle: "italic",
        foreground: palette.code.comment,
      },
    },
    {
      name: "Storage types. classes ,const ,let etc",
      scope: ["storage.type"],
      settings: {
        foreground: palette.code.keyword,
      },
    },
    {
      name: " Storage modifier. implements",
      scope: ["storage.modifier"],
      settings: {
        foreground: palette.code.keyword,
      },
    },
    {
      name: " keyword. if, this, new ,etc",
      scope: ["keyword", "variable.language", "keyword.operator.new", "keyword.operator.expression"],
      settings: {
        foreground: palette.code.keyword,
      },
    },
    {
      name: " keyword operator. =,etc",
      scope: ["keyword.operator"],
      settings: {
        foreground: palette.code.punctuation,
      },
    },
    {
      name: " puntuacion. {,etc",
      scope: ["punctuation", "constant.language.import-export-all"],
      settings: {
        foreground: palette.code.punctuation,
      },
    },
    {
      name: "escaped chars",
      scope: ["constant.character.escape"],
      settings: {
        foreground: palette.code.punctuation,
      },
    },
    {
      name: "meta.brace. (,etc",
      scope: ["meta.brace"],
      settings: {
        foreground: palette.code.punctuation,
      },
    },
    {
      name: "entity.name .",
      scope: ["entity.name.type", "entity.other"],
      settings: {
        foreground: palette.code.type,
      },
    },
    {
      name: "functions",
      scope: [
        "entity.name.function",
        "meta.method.declaration storage.type",
        "meta.method.declaration meta.block meta.function-call	variable.language.super",
      ],
      settings: {
        foreground: palette.code.func,
      },
    },
    {
      name: "variables",
      scope: ["variable"],
      settings: {
        foreground: palette.code.variable,
      },
    },
    {
      name: "meta.object-literal",
      scope: ["meta.object-literal"],
      settings: {
        foreground: palette.code.variable,
      },
    },
    {
      name: "support.type",
      scope: ["support.type"],
      settings: {
        foreground: palette.code.typePrimitive,
      },
    },
    {
      name: "String",
      scope: ["string"],
      settings: {
        foreground: palette.code.string,
      },
    },
    {
      name: "boolean",
      scope: ["constant.language.boolean", "constant.language"],
      settings: {
        foreground: palette.code.boolean,
      },
    },
    {
      name: "numeric",
      scope: ["constant.numeric"],
      settings: {
        foreground: palette.code.numeric,
      },
    },
    {
      name: "Used properties",
      scope: ["variable.other.property", "variable.other.object.property"],
      settings: {
        foreground: palette.code.usedProperties,
      },
    },
  ];
}
