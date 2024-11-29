import { Palette } from "../interfaces/palette.interface";

export function getPythonColors(palette: Palette) {
  return [
    {
      name: "PYTHON keywords. self, etc",
      scope: [
        "variable.parameter.function.language.special.self.python",
        "keyword.operator.logical.python",
      ],
      settings: {
        foreground: palette.code.keyword,
      },
    },

    {
      name: "PYTHON functions",
      scope: [
        "meta.function-call.generic.python",
        "meta.function-call.python support.type.python",
        "support.function.magic.python",
        "support.function.builtin.python",
      ],
      settings: {
        foreground: palette.code.func,
      },
    },
    {
      name: "PYTHON interpolated punctuation",
      scope: [
        "meta.fstring.python punctuation.definition.string string.interpolated.python string.quoted.single.python",
      ],
      settings: {
        foreground: palette.code.punctuation,
      },
    },

    {
      name: "PYTHON strings",
      scope: ["meta.fstring.python"],
      settings: {
        foreground: palette.code.string,
      },
    },
    {
      name: "PYTHON used property",
      scope: ["meta.attribute.python", "constant.other.caps.python", "constant.language.python"],
      settings: {
        foreground: palette.code.usedProperties,
      },
    },
  ];
}
