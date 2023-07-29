import { Palette } from "../interfaces/palette.interface";

export function getJavaColors(palette: Palette) {
  return [
    {
      name: "JAVA Storage modifer text. import, package,etc",
      scope: ["storage.modifier.import.java", "storage.modifier.package.java"],
      settings: {
        foreground: palette.Variable,
      },
    },
    {
      name: "JAVA Storage type",
      scope: ["storage.type.java", "storage.type.object"],
      settings: {
        foreground: palette.Type,
      },
    },
    {
      name: "JAVA Storage type Primitive",
      scope: [
        "storage.type.primitive.java",
        "storage.type.primitive.array.java",
      ],
      settings: {
        foreground: palette.Type_Primitive,
      },
    },
    {
      name: "JAVA functions",
      scope: ["variable.language.java "],
      settings: {
        foreground: palette.Function,
      },
    },
  ];
}
