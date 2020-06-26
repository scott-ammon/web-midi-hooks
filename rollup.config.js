import babel from 'rollup-plugin-babel';

const config = {
  input: 'src/index.js',
  external: ['react'],
  plugins: [
    babel({exclude: "node_modules/**"})
  ],
  output: {
      format: 'umd',
      name: 'index',
      globals: {
          react: "React"
      }
  }
}
export default config