import yaml from "js-yaml";
import type { LayoutLoad } from "./$types";

export const prerender = true;

export const load: LayoutLoad = async ({ fetch }) => {
  const yamlFile = "/portfolio.yaml";
  const response = await fetch(yamlFile);
  const portfolio = yaml.load(await response.text()) as Portfolio;
  return { portfolio };
};
