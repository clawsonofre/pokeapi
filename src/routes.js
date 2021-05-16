// routes.js
import pokedex from './components/pokedex.vue';

const routes = [
    { path: '/', component: pokedex },
    { path: '/pokedex', component: pokedex }
];

export default routes;