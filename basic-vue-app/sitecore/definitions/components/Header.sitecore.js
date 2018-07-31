import { addComponent, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest) => {
  addComponent(manifest, {
    name: 'Header',
    displayName: 'Header',
    // totally optional, but fun
    icon: SitecoreIcon.EmoticonSmile, 
    fields: [],   
  });
};
