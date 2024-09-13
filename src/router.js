import { createWebHashHistory,createRouter } from "vue-router";
import FormPage from "./pages/FormPage.vue";
import PreviewPage from "./pages/PreviewPage.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', component: FormPage },
        { path: '/preview', component: PreviewPage },
        
    ]
})