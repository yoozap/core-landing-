import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Tokenomics from "../views/Tokenomics.vue";
import Terms from "../views/Terms.vue";
import Technology from "../views/Technology.vue";
import Guideline from "../views/Guideline.vue";
import Roadmap from "../views/Roadmap.vue";
import Privacy from "../views/Privacy.vue";
import Proposals from "../views/Proposals.vue";
import Community from "../views/Community.vue";
import Wiki from "../views/Wiki.vue";
import ResearchAreas from "../views/ResearchAreas.vue";
import Blog from "../views/Blog.vue";
import BugBounty from "../views/BugBounty.vue";
import Support from "../views/Support.vue";
import YourVoice from "../views/YourVoice.vue";
import Academy from "../views/Academy.vue";
import Login from "../views/Login.vue";
import Article from "../views/Article.vue";
import Career from "../views/Career.vue";
import Announcement from "../views/Announcement.vue";
import Faq from "../views/Faq.vue";
import BlogInner from "../views/BlogInner.vue";
import BlogPage from "../views/BlogPage.vue";
import Resources from "../views/Resources.vue";
import Hackathon from "../views/Hackathon.vue";
import Events from "../views/Events.vue";
import Press from "../views/Press.vue";
import Gravity from "../views/Gravity.vue";
import AcademySoon from "../views/AcademySoon.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: { scrollToTop: true }
    },
    {
        path: "/research-areas",
        name: "Researchareas",
        component: ResearchAreas,
        meta: { scrollToTop: true }
    },
    {
        path: "/tokenomics",
        name: "Tokenomics",
        component: Tokenomics,
        meta: { scrollToTop: true }
    },
    {
        path: "/termsofuse",
        name: "Termsofuse",
        component: Terms,
        meta: { scrollToTop: true }
    },
    {
        path: "/technology",
        name: "Technology",
        component: Technology,
        meta: { scrollToTop: true }
    },
    {
        path: "/guidelines",
        name: "Guidelines",
        component: Guideline,
        meta: { scrollToTop: true }
    },
    {
        path: "/roadmap",
        name: "Roadmap",
        component: Roadmap,
        meta: { scrollToTop: true }
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: Privacy,
        meta: { scrollToTop: true }
    },
    {
        path: "/proposals",
        name: "Proposals",
        component: Proposals,
        meta: { scrollToTop: true }
    },
    {
        path: "/community",
        name: "Community",
        component: Community,
        meta: { scrollToTop: true }
    },
    {
        path: "/wiki",
        component: Wiki,
        name: "wikiOut",
        children: [
            {
                path: ":sectionName",
                name: "wiki",
                component: Wiki
            }
        ],
        meta: { scrollToTop: true }
    },
    {
        path: "/blog",
        name: "BlogPage",
        component: BlogPage,
        meta: { scrollToTop: true },
        children: [
            {
                // IMPORTANT - NEEDS TO BE BLANK
                path: "",
                name: "Blog",
                component: Blog
            },
            {   path: ":blogId",
                name: "BlogInner",
                component: BlogInner
            },
            { path: ":blogId", name: "BlogInner", component: BlogInner }
        ]
    },
    {
        path: "/bug-bounty",
        name: "BugBounty",
        component: BugBounty,
        meta: { scrollToTop: true }
    },
    {
        path: "/support",
        name: "Support",
        component: Support,
        meta: { scrollToTop: true }
    },
    {
        path: "/your-voice",
        name: "YourVoice",
        component: YourVoice,
        meta: { scrollToTop: true }
    },
    // {
    //     path: "/academy",
    //     name: "Academy",
    //     component: Academy,
    //     meta: { scrollToTop: true }
    // },
    {
        path: "/article",
        name: "Article",
        component: Article,
        meta: { scrollToTop: true }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            scrollToTop: true,
            requiresAuth: true
        }
    },
    {
        path: "/careers",
        name: "Careers",
        component: Career,
        meta: { scrollToTop: true }
    },
    {
        path: "/announcement",
        name: "Announcement",
        component: Announcement,
        meta: { scrollToTop: true }
    },
    {
        path: "/faq",
        name: "Faq",
        component: Faq,
        meta: { scrollToTop: true }
    },
    {
        path: "/resources",
        name: "Resources",
        component: Resources,
        meta: { scrollToTop: true }
    },
    {
        path: "/hackathon",
        name: "Hackathon",
        component: Hackathon,
        meta: { scrollToTop: true }
    },
    {
        path: "/events",
        name: "Events",
        component: Events,
        meta: { scrollToTop: true }
    },
    {
        path: "/press",
        name: "Press",
        component: Press,
    },
    {
        path: "/gravity",
        name: "Gravity",
        component: Gravity,
        meta: { scrollToTop: true }
    },
    {
        path: "/academy",
        name: "Gravity",
        component: AcademySoon,
        meta: { scrollToTop: true }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                offset: { x: 0, y: 200 }
            };
        } else {
            return { x: 0, y: 0 };
        }
    },
    routes
});

export default router;
