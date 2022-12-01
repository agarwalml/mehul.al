import yaml from "js-yaml";
const prerender = true;
const load = async ({ fetch }) => {
  const yamlFile = "/portfolio.yaml";
  const response = await fetch(yamlFile);
  const portfolio = yaml.load(await response.text());
  return { portfolio };
};
export {
  load,
  prerender
};
