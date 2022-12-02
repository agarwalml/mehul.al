import { c as create_ssr_component, b as subscribe, f as each, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as portfolio } from "../../chunks/stores.js";
import { M as Markdown } from "../../chunks/Markdown.js";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $portfolio, $$unsubscribe_portfolio;
  $$unsubscribe_portfolio = subscribe(portfolio, (value) => $portfolio = value);
  $$unsubscribe_portfolio();
  return `<section id="${"contact"}" class="${"mx-auto w-11/12 max-w-xl space-y-5 my-10"}"><h2 class="${"text-lg text-teal-700 font-bold"}">Contact</h2>
  <ul class="${"space-y-2"}">${each($portfolio.contact, (contact) => {
    return `<li class="${"text-gray-400"}"><span class="${"mr-5"}">\u2014</span>
        <span>${escape(contact.name)}:</span>
        <a class="${"text-teal-600 hover:underline transition-all duration-150"}"${add_attribute("href", contact.link, 0)} target="${"__blank"}" rel="${"noopener"}"><span>${escape(contact.alias)}
          </span></a>
      </li>`;
  })}</ul></section>`;
});
const Graphic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $portfolio, $$unsubscribe_portfolio;
  $$unsubscribe_portfolio = subscribe(portfolio, (value) => $portfolio = value);
  $$unsubscribe_portfolio();
  return `<img${add_attribute("src", $portfolio.meta.graphic.path, 0)}${add_attribute("alt", $portfolio.meta.graphic.alt, 0)} class="${"w-3/4 mx-auto"}">`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css = {
  code: "#hero a{--tw-text-opacity:1;color:rgb(101 163 13 / var(--tw-text-opacity))\n}#hero a:hover{text-decoration-line:underline\n}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $portfolio, $$unsubscribe_portfolio;
  $$unsubscribe_portfolio = subscribe(portfolio, (value) => $portfolio = value);
  const { meta } = $portfolio;
  $$result.css.add(css);
  $$unsubscribe_portfolio();
  return `<section id="${"hero"}" class="${"mx-auto max-w-xl w-11/12 py-10 space-y-10"}"><div class="${"pb-10"}">${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {})}</div>
  <header class="${"space-y-1"}"><h1 class="${"text-2xl text-teal-900 font-bold"}">${escape(meta.name)}</h1>
    <h2 class="${"text-base text-teal-600"}">${escape(meta.title)}</h2></header>
  <div class="${"text-slate-600 space-y-5"}">${validate_component(Markdown, "Markdown").$$render($$result, { text: meta.about }, {}, {})}</div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $portfolio, $$unsubscribe_portfolio;
  $$unsubscribe_portfolio = subscribe(portfolio, (value) => $portfolio = value);
  $$unsubscribe_portfolio();
  return `${$$result.head += `<!-- HEAD_svelte-frs2uh_START -->${$$result.title = `<title>${escape($portfolio.meta.name)}</title>`, ""}<!-- HEAD_svelte-frs2uh_END -->`, ""}

${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}

${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
