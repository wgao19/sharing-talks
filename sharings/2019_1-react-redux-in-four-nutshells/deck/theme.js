// example theme.js
import theme from "mdx-deck/themes";
import jsx from "react-syntax-highlighter/languages/prism/jsx";
import js from "react-syntax-highlighter/languages/prism/javascript";
import style from "react-syntax-highlighter/styles/prism/base16-ateliersulphurpool.light";

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: "Caecilia LT Std",
  monospace: "Fira Mono",
  // custom colors
  colors: {
    codeBackground: "rgba(118, 74, 188, .5)",
    text: "white",
    background: "black",
    link: "#764abc"
  },
  blockquote: {
    fontStyle: "italic",
    fontSize: "1.4rem",
    padding: ".5rem 1rem",
    background: "rgba(118, 74, 188, .5)"
  },
  paragraph: {
    textAlign: "left"
  },
  code: {
    padding: "5px"
  },
  prism: {
    style,
    languages: {
      jsx,
      js
    }
  }
};
