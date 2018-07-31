//import Welcome from './components/Welcome.vue';
import Header from './components/Global/Header.vue';
import Menu from './components/navigation/Menu.vue';
import Banner from './components/Banner.vue';

const components = new Map();
//components.set('Welcome', Welcome);
components.set('Header', Header);
components.set('Menu', Menu);
components.set('Banner', Banner);

const componentFactory = (componentName) => components.get(componentName);

export default componentFactory;