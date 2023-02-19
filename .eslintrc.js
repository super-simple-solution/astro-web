module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
     'plugin:astro/recommended',
    'prettier',
    './.eslintrc-auto-import.json',
  ],
  overrides: [
    {
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Enable this plugin
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
      plugins: ["astro", 'prettier'],
      env: {
        // Enables global variables available in Astro components.
        node: true,
        "astro/astro": true,
        es2020: true,
      },
      rules: {
        // Enable recommended rules
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
        "astro/semi": [
          "error", 
          "always", // or "never"
          { "omitLastInOneLineBlock": true }
          // or { "beforeStatementContinuationChars": "any" | "always" | "never" }
        ],

        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        // override/add rules settings here, such as:
        // "no-unused-vars": "error"
    
        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        'prettier/prettier': [
          'error',
          {
            trailingComma: 'all', // 多行使用拖尾逗号（默认none）
            tabWidth: 2, // 每个tab相当于多少个空格（默认2）
            semi: false, // 声明结尾使用分号(默认true)
            singleQuote: true, // 使用单引号（默认false）
            bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
            eslintIntegration: true,
            printWidth: 120, // 每行代码长度（默认80）
            endOfLine: 'auto',
          },
        ],
        quotes: [1, 'single'], //引号类型 `` "" ''
        semi: [2, 'never'], // 语句强制分号结尾
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: false,
          },
        ],
      },
    },
    // ...
  ],
}
