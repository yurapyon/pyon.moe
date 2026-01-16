import { Page } from "./types/page";

import { Home } from "./Home";
import { Code } from "./Code";
import { Blog } from "./Blog";
import { Works3d } from "./Works3d";
import { Works2d } from "./Works2d";

interface PageInfo {
  path: string;
  bgColor: string;
  fgColor?: string;
  rootComponent: Component;
  linkText: string;
  pageTitle?: string;
}

const pageInfo: Record<Page, PageInfo> = {
  [Page.HOME]: {
    path: "/",
    bgColor: "",
    rootComponent: Home,
    linkText: "home",
  },
  [Page.BLOG]: {
    path: "/blog",
    bgColor: "hover:bg-lmn-yellow",
    fgColor: "hover:text-lmn-red",
    rootComponent: Blog,
    linkText: "blog",
    pageTitle: "blog",
  },
  /*
  [Page.ABOUT]: {
    path: "/about",
    bgColor: "hover:bg-lmn-pink",
    fgColor: "hover:text-lmn-yellow",
    rootComponent: Works2d,
    linkText: "2d art",
    pageTitle: "2d art",
  },
  */
  [Page.CODE]: {
    path: "/code",
    bgColor: "hover:bg-lmn-blue",
    rootComponent: Code,
    linkText: "code",
    pageTitle: "code",
  },
  [Page.WORKS_3D]: {
    path: "/works_3d",
    bgColor: "hover:bg-lmn-green",
    fgColor: "hover:text-lmn-slate",
    rootComponent: Works3d,
    linkText: "3d art",
    pageTitle: "3d art",
  },
  [Page.WORKS_2D]: {
    path: "/works_2d",
    bgColor: "hover:bg-lmn-pink",
    fgColor: "hover:text-lmn-yellow",
    rootComponent: Works2d,
    linkText: "2d art",
    pageTitle: "2d art",
  },
} as const;

export const getPages = (ignore: Page[] = []) => {
  const pages = Object.entries(pageInfo).map(([key, value])=>{
    const nkey = Number(key);
    if (ignore.includes(nkey)) {
      return null;
    } else {
      return { page: key, ...value };
    }
  });

  return pages.filter((p)=>!!p);
}
