import terms from "../../terms";

const taboos = [
  {
    text: '首页',
    link: '/'
  }
];

export default [
  ...taboos,
  ...terms.map((term=>({
    text: term.name,
    activeMatch:`^/docs\/${term.name}/`,
    items: term.versions.map((version) => ({
      text: version,
      link: `/docs/${term.name}\/${version}/`
    }))
  })))
];
