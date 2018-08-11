import { addComponent, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest) => {
  addComponent(manifest, {
    name: 'Banner',
    displayName: 'Banner',
    // totally optional, but fun
    icon: SitecoreIcon.EmoticonSmile,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'text', type: CommonFieldTypes.RichText },
      { name: 'link', type: CommonFieldTypes.GeneralLink }
    ],
  });
};
