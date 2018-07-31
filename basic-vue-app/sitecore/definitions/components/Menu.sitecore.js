import { addComponent, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest) => {
  addComponent(manifest, {
    name: 'Menu',
    displayName: 'Menu',
    // totally optional, but fun
    icon: SitecoreIcon.EmoticonSmile, 
    fields: [],   
  });
};
