import { Linter } from "eslint";
import tseslint from "typescript-eslint";

export async function typescript(): Promise<Linter.Config[]> {
  return [
    {
      plugins: {
        ["@typescript-eslint"]: tseslint.plugin,
      },
    },
  ];
}
