import { c as create_ssr_component, e as escape, v as validate_component, b as subscribe, f as each } from "../../../chunks/index.js";
import { p as portfolio } from "../../../chunks/stores.js";
import { M as Markdown } from "../../../chunks/Markdown.js";
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { experience } = $$props;
  if ($$props.experience === void 0 && $$bindings.experience && experience !== void 0)
    $$bindings.experience(experience);
  return `<article class="${"text-gray-700 bg-teal-100 border border-teal-300 rounded-lg p-10"}"><div class="${"space-y-5"}"><header class="${"space-y-1"}"><div class="${"flex items-baseline justify-between gap-5"}"><h2 class="${"text-xl text-teal-900 font-bold"}">${escape(experience.role)}</h2>
        <p class="${"text-sm text-right"}">${escape(experience.dates)}</p></div>
      <div class="${"flex items-baseline justify-between gap-5"}"><h3 class="${"text-lg text-teal-600"}">${escape(experience.name)}</h3>
        <p class="${"text-sm text-right"}">${escape(experience.location)}</p></div></header>
    <div></div>
    <div class="${"space-y-2 text-sm"}">${validate_component(Markdown, "Markdown").$$render($$result, { text: experience.responsibilities }, {}, {})}</div></div></article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $portfolio, $$unsubscribe_portfolio;
  $$unsubscribe_portfolio = subscribe(portfolio, (value) => $portfolio = value);
  $$unsubscribe_portfolio();
  return `${$$result.head += `<!-- HEAD_svelte-1w3i4xd_START -->${$$result.title = `<title>Experience \xB7 ${escape($portfolio.meta.name)}</title>`, ""}<!-- HEAD_svelte-1w3i4xd_END -->`, ""}

<section id="${"experience"}" class="${"max-w-3xl w-11/12 mx-auto my-10 space-y-10"}"><header><h1 class="${"text-2xl text-teal-900 font-bold"}">Experience</h1></header>

  <div class="${"space-y-5"}">${each($portfolio.experience, (experience) => {
    return `${validate_component(Experience, "Experience").$$render($$result, { experience }, {}, {})}`;
  })}</div></section>`;
});
export {
  Page as default
};
