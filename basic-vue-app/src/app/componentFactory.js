import Welcome from './components/Welcome.vue';
import Banner from './components/Banner.vue';

const components = new Map();
components.set('Welcome', Welcome);
components.set('Banner', Banner);


const componentFactory = (componentName) => components.get(componentName);

export default componentFactory;