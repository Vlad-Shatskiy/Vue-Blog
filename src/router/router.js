import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";
import PostIdPage from "@/pages/PostIdPage";

import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: PostPage,
  },
  {
    path: "/posts",
    component: PostPage,
  },

  {
    path: "/posts/:id",
    component: PostIdPage,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
  { path: "/composition", component: PostPageCompositionApi },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
