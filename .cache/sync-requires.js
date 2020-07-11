const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/albert/_proj/jinyus/prod-forum-jinyus/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/albert/_proj/jinyus/prod-forum-jinyus/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/albert/_proj/jinyus/prod-forum-jinyus/src/pages/about.js"))),
  "component---src-pages-admin-js": hot(preferDefault(require("/Users/albert/_proj/jinyus/prod-forum-jinyus/src/pages/admin.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/albert/_proj/jinyus/prod-forum-jinyus/src/pages/index.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/albert/_proj/jinyus/prod-forum-jinyus/src/templates/post.js")))
}

