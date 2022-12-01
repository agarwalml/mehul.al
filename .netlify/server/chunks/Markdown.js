import { c as create_ssr_component, f as each } from "./index.js";
import snarkdown from "snarkdown";
const Markdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  const htmls = [];
  if (typeof text === "string") {
    htmls.push(snarkdown(text));
  } else {
    text.forEach((t) => {
      htmls.push(snarkdown(t));
    });
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `${each(htmls, (html) => {
    return `<p><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END -->
  </p>`;
  })}`;
});
export {
  Markdown as M
};
