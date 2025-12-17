/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import 'solid-devtools';

import type { ParentComponent } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { getPages } from "./pages";


const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const Layout: ParentComponent = (props) => {
  return (
    <div class="flex flex-col items-center w-full">
      <div class="flex flex-col gap-3 mt-3 container md:max-w-sm px-2">
        {props.children}
      </div>
      <div class="mt-2">
        (c) parcel_ch 2025
      </div>
    </div>
  );
}

const preload = (args) => {
  const pages = getPages();
  const page = pages.find((p) => {
    return p.path === args.location.pathname;
  });

  if (args.intent === "navigate") {
    if (!!page.pageTitle) {
      document.title = "pyon.moe - " + page.pageTitle;
    } else {
      document.title = "pyon.moe";
    }
  }
};

render(() => {
  const pages = getPages();
  return (
      <Router root={Layout}>
        <Index each={pages}>
          {(item) => {
            return <Route
              path={item().path}
              component={item().rootComponent}
              preload={preload}
            />
          }}
        </Index>
      </Router>
    );
  },
  root);
