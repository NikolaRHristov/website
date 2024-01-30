import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_DpUtOiSY.mjs';
import 'clsx';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroBiome/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/astrobiome","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/AstroBiome\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"AstroBiome","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/AstroBiome/index.astro","pathname":"/Raw/Readme/AstroBiome","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroCompress/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/astrocompress","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/AstroCompress\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"AstroCompress","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/AstroCompress/index.astro","pathname":"/Raw/Readme/AstroCompress","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroCritters/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/astrocritters","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/AstroCritters\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"AstroCritters","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/AstroCritters/index.astro","pathname":"/Raw/Readme/AstroCritters","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/codeeditorland","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/CodeEditorLand\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"CodeEditorLand","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/CodeEditorLand/index.astro","pathname":"/Raw/Readme/CodeEditorLand","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand/Cargo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/codeeditorland/cargo","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/CodeEditorLand\\/Cargo\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"CodeEditorLand","dynamic":false,"spread":false}],[{"content":"Cargo","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/CodeEditorLand/Cargo/index.astro","pathname":"/Raw/Readme/CodeEditorLand/Cargo","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/NikolaRHristov/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/nikolarhristov","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/NikolaRHristov\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"NikolaRHristov","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/NikolaRHristov/index.astro","pathname":"/Raw/Readme/NikolaRHristov","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"Source/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroRome/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/astrorome","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/AstroRome\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"AstroRome","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/AstroRome/index.astro","pathname":"/Raw/Readme/AstroRome","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand/Environment/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/codeeditorland/environment","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/CodeEditorLand\\/Environment\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"CodeEditorLand","dynamic":false,"spread":false}],[{"content":"Environment","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/CodeEditorLand/Environment/index.astro","pathname":"/Raw/Readme/CodeEditorLand/Environment","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand/NPM/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/codeeditorland/npm","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/CodeEditorLand\\/NPM\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"CodeEditorLand","dynamic":false,"spread":false}],[{"content":"NPM","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/CodeEditorLand/NPM/index.astro","pathname":"/Raw/Readme/CodeEditorLand/NPM","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/RoundedCorners/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/roundedcorners","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/RoundedCorners\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"RoundedCorners","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/RoundedCorners/index.astro","pathname":"/Raw/Readme/RoundedCorners","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://nikolahristov.tech/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:Source/pages/Raw/Readme/AstroBiome/index@_@astro":"pages/raw/readme/astrobiome.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/AstroCompress/index@_@astro":"pages/raw/readme/astrocompress.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/AstroCritters/index@_@astro":"pages/raw/readme/astrocritters.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/CodeEditorLand/index@_@astro":"pages/raw/readme/codeeditorland.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/CodeEditorLand/Cargo/index@_@astro":"pages/raw/readme/codeeditorland/cargo.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/NikolaRHristov/index@_@astro":"pages/raw/readme/nikolarhristov.astro.mjs","\u0000@astro-page:Source/pages/Readme/[...Slug]@_@astro":"pages/readme/_---slug_.astro.mjs","\u0000@astro-page:Source/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:Source/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/AstroRome/index@_@astro":"pages/raw/readme/astrorome.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/CodeEditorLand/Environment/index@_@astro":"pages/raw/readme/codeeditorland/environment.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/CodeEditorLand/NPM/index@_@astro":"pages/raw/readme/codeeditorland/npm.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/RoundedCorners/index@_@astro":"pages/raw/readme/roundedcorners.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_HgoAOedJ.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Option/Icon.ts":"chunks/Icon_ImOQ8Jnz.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Library/Bytes.ts":"chunks/Bytes_3XqT_1lA.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Library/Chunks.ts":"chunks/Chunks_n4Msk03f.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Library/Environment.ts":"chunks/Environment_KSxVypBH.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightCSS3.svg":"chunks/LightCSS3_Cr5aBD_b.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkCSS3.svg":"chunks/DarkCSS3_IX7FkIaz.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightGNUBash.svg":"chunks/LightGNUBash_4HOYAtGI.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkGNUBash.svg":"chunks/DarkGNUBash_DzuZYq9G.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightGo.svg":"chunks/LightGo_YdlcnKcf.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkGo.svg":"chunks/DarkGo_pUNOpBuC.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightJavaScript.svg":"chunks/LightJavaScript_7ylFrq56.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkJavaScript.svg":"chunks/DarkJavaScript_weeYk7mN.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightLua.svg":"chunks/LightLua_sl6F5mJY.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkLua.svg":"chunks/DarkLua_XHn6G7JL.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightMDX.svg":"chunks/LightMDX_UDIQ6SIy.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkMDX.svg":"chunks/DarkMDX_RMa4UrM7.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightPowershell.svg":"chunks/LightPowershell_4Q1uqgel.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkPowershell.svg":"chunks/DarkPowershell_Jb6EB54C.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightPython.svg":"chunks/LightPython_IKRlzWDg.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkPython.svg":"chunks/DarkPython_uOoTEgV4.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightRust.svg":"chunks/LightRust_9R_6QSRR.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkRust.svg":"chunks/DarkRust_kRT7TifX.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightTypeScript.svg":"chunks/LightTypeScript_l1buArTs.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkTypeScript.svg":"chunks/DarkTypeScript_AirBjB5Q.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightWindowsTerminal.svg":"chunks/LightWindowsTerminal_jFFOC_i9.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkWindowsTerminal.svg":"chunks/DarkWindowsTerminal_2PY_Q-F6.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightAstro.svg":"chunks/LightAstro_bWv5FJbh.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkAstro.svg":"chunks/DarkAstro_834_2mmi.mjs","D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/overlay-theme/dist/index.modern.js":"_astro/index.modern.grwuNUiy.js","D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/body-class-plugin/dist/index.modern.js":"_astro/index.modern.krbs8bWt.js","D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/preload-plugin/dist/index.modern.js":"_astro/index.modern.Nfo0UNRS.js","astro:scripts/page.js":"_astro/page.9Vx75qD_.js","D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/scroll-plugin/dist/index.modern.js":"_astro/index.modern.WIeSBCNr.js","D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/head-plugin/dist/index.modern.js":"_astro/index.modern.cx1mZwdG.js","/astro/hoisted.js?q=0":"_astro/hoisted.s1ZzqfOQ.js","D:/Developer/Application/NikolaRHristov/Website/node_modules/swup/dist/Swup.modern.js":"_astro/Swup.modern.uAVexcQX.js","D:/Developer/Application/NikolaRHristov/Website/node_modules/firebase/app/dist/esm/index.esm.js":"_astro/index.esm.tpJNcZxi.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/page.9Vx75qD_.js","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroBiome/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroCompress/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroCritters/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand/Cargo/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/NikolaRHristov/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/404.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroRome/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand/Environment/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand/NPM/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/RoundedCorners/index.html"],"buildFormat":"directory"});

export { manifest };
//# sourceMappingURL=manifest_HgoAOedJ.mjs.map