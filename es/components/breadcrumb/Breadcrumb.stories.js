import * as React from 'react';
import { IntlProvider } from 'react-intl';
import Link from '../link/Link';
import IconHome from '../../icons/general/IconHome';
import Breadcrumb from './Breadcrumb';
import notes from './Breadcrumb.stories.md';
export var regular = function regular() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(Breadcrumb, {
    label: "Breadcrumb"
  }, React.createElement(IconHome, null), React.createElement(Link, {
    href: "#foo"
  }, "Box Engineering")));
};
export var withMultipleCrumbs = function withMultipleCrumbs() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(Breadcrumb, {
    label: "Breadcrumb"
  }, React.createElement(IconHome, null), React.createElement(Link, {
    href: "#foo"
  }, "Box Engineering"), React.createElement(Link, {
    href: "#foo"
  }, "Frameworks"), React.createElement(Link, {
    href: "#foo"
  }, "Front End"), React.createElement(Link, {
    href: "#foo"
  }, "React"), React.createElement(Link, {
    href: "#foo"
  }, "Box React UI")));
};
export default {
  title: 'Components|Breadcrumb',
  component: Breadcrumb,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Breadcrumb.stories.js.map