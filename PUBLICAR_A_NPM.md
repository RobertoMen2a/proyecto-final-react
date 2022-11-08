- Instalar

```
"@babel/core": "^7.12.9",
"@rollup/plugin-commonjs": "^17.0.0",
"@rollup/plugin-node-resolve": "^11.0.0",
"babel-loader": "^8.2.2",
"postcss": "^8.2.1",
"rollup": "^2.34.2",
"rollup-plugin-peer-deps-external": "^2.2.4",
"rollup-plugin-postcss": "^4.0.0",
"rollup-plugin-typescript2": "^0.29.0"
```

- Agregar al package.json

```
"main": "lib/index.js",
"module": "lib/index.esm.js",
"types": "lib/index.d.ts"
```

- Crear el archivo rollup.config.js

```
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
        extensions: ['.css']
    })
  ]
};
```

- Cambiar en el package.json

```
"private": false
```

- Agregar en el package.json

```
"scripts": {
  ...
  "buildPackage": "rollup -c"
}
```

- Ejecutar el comando

```
npm run buildPackage
```

- Ejecutar el comando

```
npm login

npm publish --access=public
```

**Luego ejecutar en cualquier proyecto**

```
npm install [tu_nombre_del_paquete]
```

Luego

```
import TU_PAQUETE from '[TU_NOMBRE_EN_NPM]'
```
