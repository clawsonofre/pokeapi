// routes.js
import App from './App.vue';
import pokedex from './components/pokedex.vue';

const routes = [
    { path: '/', component: pokedex },
    { path: '/pokedex', component: pokedex }
];

export default routes;