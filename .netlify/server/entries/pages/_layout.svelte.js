import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as each, g as set_store_value, v as validate_component } from "../../chunks/index.js";
import { n as navigating, p as page } from "../../chunks/stores2.js";
import { p as portfolio } from "../../chunks/stores.js";
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_navigating;
  let $portfolio, $$unsubscribe_portfolio;
  let $page, $$unsubscribe_page;
  $$unsubscribe_navigating = subscribe(navigating, (value) => value);
  $$unsubscribe_portfolio = subscribe(portfolio, (value) => $portfolio = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { navigation, meta } = $portfolio;
  $$unsubscribe_navigating();
  $$unsubscribe_portfolio();
  $$unsubscribe_page();
  return `<header class="${"w-11/12 py-5 mx-auto"}"><nav class="${"flex items-center justify-between"}"><a href="${"/"}" class="${"flex items-center gap-5"}"><img${add_attribute("src", meta.logo.path, 0)}${add_attribute("alt", meta.logo.alt, 0)} class="${"w-8 h-8"}">
      ${$page.url.pathname !== "/" ? `<h1>${escape(meta.name)}</h1>` : ``}</a>
    <button class="${"md:hidden"}" aria-label="${"Toggle navigation"}"><svg class="${"w-6 h-6 text-teal-600"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path d="${"M4 6h16M4 12h16M4 18h16"}"${add_attribute("class", "block", 0)}></path><path d="${"M6 18L18 6M6 6l12 12"}"${add_attribute("class", "hidden", 0)}></path></svg></button>
    <ul class="${"gap-5 hidden md:flex"}">${each(navigation, (nav) => {
    return `<li class="${"font-medium hover:text-teal-600 transition-all duration-150 " + escape(
      nav.link === $page.url.pathname ? "text-teal-600" : "text-slate-600",
      true
    )}"><a${add_attribute("href", nav.link, 0)}${add_attribute("target", nav.external ? "__blank" : "", 0)}${add_attribute("rel", nav.external ? "noopener" : "", 0)}>${escape(nav.name)}</a>
        </li>`;
  })}</ul></nav></header>

${``}`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $portfolio, $$unsubscribe_portfolio;
  $$unsubscribe_portfolio = subscribe(portfolio, (value) => $portfolio = value);
  set_store_value(portfolio, $portfolio = $$props.data.portfolio, $portfolio);
  $$unsubscribe_portfolio();
  return `<div class="${"max-w-6xl mx-auto"}">${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}

  <main>${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
