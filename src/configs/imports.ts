import { Linter } from "eslint";
import { pluginImport } from "../plugins";
import { pluginSimpleImport } from "../plugins";

export async function imports(): Promise<Linter.Config[]> {
  return [
    {
      plugins: {
        ["import"]: pluginImport,
        ["simple-import-sort"]: pluginSimpleImport,
      },
      rules: {
        "import/consistent-type-specifier-style": "error",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-absolute-path": "error",
        "import/no-amd": "error",
        "import/no-default-export": "error",
        "import/no-duplicates": "error",
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
            peerDependencies: true,
            optionalDependencies: false,
          },
        ],
        "import/no-mutable-exports": "error",
        "import/no-named-default": "error",
        "import/no-named-export": "off",
        "import/no-self-import": "error",
        "import/prefer-default-export": "off",
        "simple-import-sort/imports": "error",
      },
    },
  ];
}
