<!DOCTYPE html><html lang="en" data-theme="dark"><head><!--remix-island-start--><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta property="og:type" content="object"/><meta property="og:site_name" content="bolt.new"/><meta property="og:title" content="Professional Resume Application"/><meta property="og:image" content="https://social-img.staticblitz.com/bolt-projects/sb1-taq1iw"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="Professional Resume Application"/><meta name="twitter:description" content="Starter project for Node.js, a JavaScript runtime built on Chrome&#x27;s V8 JavaScript engine."/><meta name="twitter:image" content="https://social-img.staticblitz.com/bolt-projects/sb1-taq1iw"/><meta name="twitter:site" content="@StackBlitz"/><link rel="stylesheet" href="/assets/root-BNH5ZxaL.css"/><link rel="icon" href="/favicon.svg" type="image/svg+xml"/><link rel="stylesheet" href="/assets/ReactToastify-CYivYX3d.css"/><link rel="stylesheet" href="/assets/tailwind-compat-CC20SAMN.css"/><link rel="stylesheet" href="/assets/index-BbSugHb2.css"/><link rel="stylesheet" href="/assets/xterm-lQO2bNqs.css"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap"/><link rel="stylesheet" href="/assets/_index-CtUOshGJ.css"/><script>setTutorialKitTheme();

function setTutorialKitTheme() {
  let theme = localStorage.getItem('bolt_theme');

  if (!theme) {
    theme = "dark";
  } else if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme =  prefersDark ? 'dark' : 'light';
  }

  document.querySelector('html')?.setAttribute('data-theme', theme);
}</script><script async="" src="https://www.googletagmanager.com/gtag/js?id=AW-16735431429"></script><script>window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'AW-16735431429');</script><!--remix-island-end--></head><body><div id="root" class="w-full h-full"><div class="flex flex-col h-full w-full bg-bolt-elements-background-depth-1"><header class="flex select-none selection-accent items-center bg-bolt-elements-background-depth-1 pl-5 pr-4 border-b h-[var(--header-height)] border-transparent"><div class="flex grow-1 basis-60 items-center gap-2 z-logo text-bolt-elements-textPrimary cursor-pointer"><a href="/" class="text-2xl font-semibold text-accent flex items-center"><span class="i-bolt:logos-bolt?mask w-[46px] inline-block"></span></a></div><div class="flex-1 select-text px-4 text-sm text-center text-bolt-elements-textPrimary"></div></header></div><script>((STORAGE_KEY2, restoreKey) => {
    if (!window.history.state || !window.history.state.key) {
      let key2 = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key: key2
      }, "");
    }
    try {
      let positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY2) || "{}");
      let storedY = positions[restoreKey || window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem(STORAGE_KEY2);
    }
  })("positions", null)</script><link rel="modulepreload" href="/assets/manifest-96147c18.js"/><link rel="modulepreload" href="/assets/entry.client-Cbkoy4E7.js"/><link rel="modulepreload" href="/assets/index-fw5NnR3n.js"/><link rel="modulepreload" href="/assets/components-B64jh5hJ.js"/><link rel="modulepreload" href="/assets/stripIndent-xeVYIX4Z.js"/><link rel="modulepreload" href="/assets/analytics-C_2IBEbg.js"/><link rel="modulepreload" href="/assets/root-DN_QF0uM.js"/><link rel="modulepreload" href="/assets/_index-DUw9tnv8.js"/><link rel="modulepreload" href="/assets/login-BXOJNBun.js"/><link rel="modulepreload" href="/assets/tslib.es6-DnbLsO0i.js"/><link rel="modulepreload" href="/assets/LoadingDots-C83QcpuT.js"/><link rel="modulepreload" href="/assets/~._slug-DqTvlIW3.js"/><script>window.__remixContext = {"basename":"/","future":{"v3_fetcherPersist":true,"v3_relativeSplatPath":true,"v3_throwAbortReason":true,"v3_singleFetch":false,"v3_lazyRouteDiscovery":false,"unstable_optimizeDeps":false},"isSpaMode":false,"state":{"loaderData":{"routes/~.$slug":{"user":{"avatar":"https://ghavatars.staticblitz.com/Rajathbharadwaj.png","bio":"\r\nMS in CS | Prev DL Engineer |\r\nI teach people NVIDIA DGX, NGC Containers, and Jetson Nano |\r\nExploring #Web3","email":"rajathrajath940@gmail.com","externalAccount":{"username":"Rajathbharadwaj","url":"https://github.com/Rajathbharadwaj"},"kind":"USER","location":"Windsor, Canada","membership":{"paid":true,"subscription":{"currentMonthStart":"2024-11-17","currentMonthStartTimestamp":1731874090000,"currentPeriodEnd":1734466090000,"currentPeriodStart":1731874090000,"freeTrial":false,"interval":"monthly","nextMonthStart":"2024-12-17","nextMonthStartTimestamp":1734466090000,"planCost":2000,"quantity":1,"status":"active"},"tier":1},"membershipLevel":1,"name":"Rajath Bharadwaj","site":"","teamsPlan":false,"totalBoltTokenPurchases":0,"username":"Rajathbharadwaj","wcAPIMembership":null,"wcAPIStripeAccount":null},"slug":"sb1-taq1iw","projectId":33622244,"projectInfo":{"id":33622244,"slug":"sb1-taq1iw","title":"Professional Resume Application","description":"Starter project for Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine."},"tokenStats":{"totalToday":526730,"totalThisMonth":371723,"maxPerDay":10000000,"maxPerMonth":10000000,"nextTier":{"type":"pro","limits":{"perDay":26000000,"perMonth":26000000},"level":2},"overflow":{"available":0,"used":0},"billingPeriod":{"from":1731874090000,"to":1734466090000}},"loggedIn":true},"root":null},"actionData":null,"errors":null}};</script><script type="module" async="">import "/assets/manifest-96147c18.js";
import * as route0 from "/assets/root-DN_QF0uM.js";
import * as route1 from "/assets/~._slug-DqTvlIW3.js";

window.__remixRouteModules = {"root":route0,"routes/~.$slug":route1};

import("/assets/entry.client-Cbkoy4E7.js");</script></div></body></html>