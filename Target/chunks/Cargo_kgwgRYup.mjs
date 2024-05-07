import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment } from './astro/server_DWqKzqzf.mjs';
import 'kleur/colors';
import { $ as $$Heading } from './Row_D485p1ue.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Cargo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cargo;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/Cargo.png", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/Cargo.png", "Text": "\u2014\u2001Cargo\u2001\u2014" })}` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/Heading/Cargo.astro", void 0);

export { $$Cargo as $ };
//# sourceMappingURL=Cargo_kgwgRYup.mjs.map