import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, b as subscribe, f as each } from "../../../chunks/index.js";
import { p as portfolio } from "../../../chunks/stores.js";
import { M as Markdown } from "../../../chunks/Markdown.js";
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return `<article class="${"grid grid-cols-6 gap-10 bg-teal-100 border border-teal-300 rounded-lg p-10"}"><aside class="${"flex items-center"}"><img class="${"max-w-full"}"${add_attribute("src", project.logo, 0)}${add_attribute("alt", project.name, 0)}></aside>
  <div class="${"col-span-5 space-y-5"}"><header class="${"space-y-1"}"><h2 class="${"text-xl text-teal-900 font-bold"}">${escape(project.name)}</h2>
      ${project.subtitle ? `<h3 class="${"text-base text-teal-600"}">${escape(project.subtitle)}</h3>` : ``}</header>
    <div class="${"space-y-2 text-sm text-gray-700"}">${validate_component(Markdown, "Markdown").$$render($$result, { text: project.description }, {}, {})}</div></div></article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $portfolio, $$unsubscribe_portfolio;
  $$unsubscribe_portfolio = subscribe(portfolio, (value) => $portfolio = value);
  $$unsubscribe_portfolio();
  return `${$$result.head += `<!-- HEAD_svelte-1rii31b_START -->${$$result.title = `<title>Projects \xB7 ${escape($portfolio.meta.name)}</title>`, ""}<!-- HEAD_svelte-1rii31b_END -->`, ""}

<section id="${"projects"}" class="${"max-w-3xl w-11/12 mx-auto my-10 space-y-10"}"><header><h1 class="${"text-2xl text-teal-900 font-bold"}">Projects</h1></header>

  <div class="${"space-y-5"}">${each($portfolio.projects, (project) => {
    return `${validate_component(Project, "Project").$$render($$result, { project }, {}, {})}`;
  })}</div></section>`;
});
export {
  Page as default
};
