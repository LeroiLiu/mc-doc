import path from "path";
import terms from "../../terms";
export default terms.reduce((termSidebars,term)=>({
  ...termSidebars,
  ...term.versions.reduce(
    (sidebars, version) => ({
      ...sidebars,
      [`/docs/${term.name}\/${version}/`]: require(path.join(__dirname,`../../../src/docs/${term.name}/${version}/sidebar`))
    }),
    {}
  )
}),{});
