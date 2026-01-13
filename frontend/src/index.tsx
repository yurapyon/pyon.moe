/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import 'solid-devtools';

import type { ParentComponent } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { getPages } from "./pages";
import { BlogPerma } from "./BlogPerma";
import { Error404 } from "./404";

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
        made with SolidJS (c) pyondotmoe 2026
      </div>
    </div>
  );
}

render(() => {
  const pages = getPages();
  return (
      <Router root={Layout}>
        <Index each={pages}>
          {(item) => {
            return <Route
              path={item().path}
              component={() => {
                if (!!item().pageTitle) {
                  document.title = "pyon.moe - " + item().pageTitle;
                } else {
                  document.title = "pyon.moe";
                }
                return item().rootComponent;
              }}
            />
          }}
        </Index>
        <Route path="/post/:title" component={BlogPerma}/>
        <Route path="*404" component={Error404}/>
      </Router>
    );
  },
  root);
