import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { boolean, color } from '@storybook/addon-knobs';
import noop from 'lodash/noop'; // eslint-disable-next-line import/named

import { createTheme } from '../../utils/createTheme';
import CollapsibleSidebar from './CollapsibleSidebar';
import CollapsibleSidebarLogo from './CollapsibleSidebarLogo';
import CollapsibleSidebarFooter from './CollapsibleSidebarFooter';
import CollapsibleSidebarNav from './CollapsibleSidebarNav';
import CollapsibleSidebarItem from './CollapsibleSidebarItem';
import CollapsibleSidebarMenuItem from './CollapsibleSidebarMenuItem';
import notes from './CollapsibleSidebar.stories.md';
import Link from '../../components/link/Link';
import IconPlusRound from '../../icons/general/IconPlusRound';
import { BetaBadge, TrialBadge } from '../../components/badge';
import Folder16 from '../../icon/fill/Folder16';
import ClockBadge16 from '../../icon/fill/ClockBadge16';
import Code16 from '../../icon/fill/Code16';
import Trash16 from '../../icon/fill/Trash16';
import FileDefault16 from '../../icon/fill/FileDefault16';
import CheckmarkBadge16 from '../../icon/fill/CheckmarkBadge16';

var renderFiles = function renderFiles() {
  var items = [];

  for (var i = 0; i < 5; i += 1) {
    items.push(React.createElement("li", {
      key: "djb-leftnav-menu-item-all-file-".concat(i)
    }, React.createElement(CollapsibleSidebarItem, {
      collapsedElement: React.createElement(CollapsibleSidebarMenuItem, {
        as: Link,
        href: "/",
        icon: React.createElement(FileDefault16, {
          height: 20,
          width: 20
        })
      }),
      expanded: boolean('isExpanded', true),
      expandedElement: React.createElement(CollapsibleSidebarMenuItem, {
        as: Link,
        href: "/",
        icon: React.createElement(FileDefault16, {
          height: 20,
          width: 20
        }),
        text: "File ".concat(i)
      }),
      tooltipMessage: "File Link"
    })));
  }

  return items;
};

export var basic = function basic() {
  var hexColor = color('Theme Color', '#0061d5');
  var theme = createTheme(hexColor);
  var linkProps = {
    href: '/?path=/story/components-tooltip--top-center',
    'data-resin-target': 'resinTarget'
  };
  var menuItemContent = React.createElement(React.Fragment, null, React.createElement(BetaBadge, {
    style: {
      marginLeft: 8
    }
  }), React.createElement(TrialBadge, {
    style: {
      marginLeft: 8
    }
  }));
  return React.createElement(ThemeProvider, {
    theme: theme
  }, React.createElement(CollapsibleSidebar, {
    expanded: boolean('isExpanded', true)
  }, React.createElement(CollapsibleSidebarLogo, {
    canEndTrial: false,
    linkProps: linkProps,
    onToggle: noop,
    expanded: boolean('isExpanded', true)
  }), React.createElement(CollapsibleSidebarNav, null, React.createElement("ul", null, React.createElement("li", {
    key: "djb-leftnav-menu-item-all-files"
  }, React.createElement(CollapsibleSidebarItem, {
    collapsedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      }),
      linkClassName: "is-currentPage"
    }),
    expanded: boolean('isExpanded', true),
    expandedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      }),
      linkClassName: "is-currentPage",
      text: "All Files"
    }),
    tooltipMessage: "All Files Link"
  })), React.createElement("li", {
    key: "djb-leftnav-menu-item-all-recents"
  }, React.createElement(CollapsibleSidebarItem, {
    collapsedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      })
    }),
    expanded: boolean('isExpanded', true),
    expandedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(ClockBadge16, {
        height: 20,
        width: 20
      }),
      text: "Recents"
    }),
    tooltipMessage: "Recents Link"
  })), React.createElement("li", {
    key: "djb-leftnav-menu-item-synced"
  }, React.createElement(CollapsibleSidebarItem, {
    collapsedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(CheckmarkBadge16, {
        height: 20,
        width: 20
      })
    }),
    expanded: boolean('isExpanded', true),
    expandedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      content: menuItemContent,
      icon: React.createElement(CheckmarkBadge16, {
        height: 20,
        width: 20
      }),
      text: "Really really long synced link name synced Link"
    }),
    tooltipMessage: "Synced Link"
  })), React.createElement("li", {
    key: "djb-leftnav-menu-item-all-trash"
  }, React.createElement(CollapsibleSidebarItem, {
    collapsedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Trash16, {
        height: 20,
        width: 20
      })
    }),
    expanded: boolean('isExpanded', true),
    expandedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Trash16, {
        height: 20,
        width: 20
      }),
      text: "Really really long trash link name Trash Link"
    }),
    tooltipMessage: "Trash Link"
  })), React.createElement("li", {
    key: "djb-leftnav-menu-item-all-file-overflow"
  }, React.createElement(CollapsibleSidebarItem, {
    collapsedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      })
    }),
    expanded: boolean('isExpanded', true),
    expandedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      }),
      overflowAction: React.createElement(Link, {
        href: "/"
      }, React.createElement(IconPlusRound, {
        color: "white"
      })),
      text: "Overflow"
    }),
    tooltipMessage: "Overflow Link"
  })), React.createElement("li", {
    key: "djb-leftnav-menu-item-all-file-overflow-long"
  }, React.createElement(CollapsibleSidebarItem, {
    collapsedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      })
    }),
    expanded: boolean('isExpanded', true),
    expandedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      }),
      overflowAction: React.createElement(Link, {
        href: "/"
      }, React.createElement(IconPlusRound, {
        color: "white"
      })),
      text: "Really really long overflow action name Overflow"
    }),
    tooltipMessage: "Overflow Long Link"
  })), React.createElement("li", {
    key: "djb-leftnav-menu-item-all-file-overflow-hover"
  }, React.createElement(CollapsibleSidebarItem, {
    collapsedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      })
    }),
    expanded: boolean('isExpanded', true),
    expandedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      }),
      overflowAction: React.createElement(Link, {
        href: "/"
      }, React.createElement(IconPlusRound, {
        color: "white"
      })),
      showOverflowAction: "hover",
      text: "Overflow Hover"
    }),
    tooltipMessage: "Overflow Hover Link"
  })), React.createElement("li", {
    key: "djb-leftnav-menu-item-all-file-overflow-hover-long"
  }, React.createElement(CollapsibleSidebarItem, {
    collapsedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      })
    }),
    expanded: boolean('isExpanded', true),
    expandedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      }),
      overflowAction: React.createElement(Link, {
        href: "/"
      }, React.createElement(IconPlusRound, {
        color: "white"
      })),
      showOverflowAction: "hover",
      text: "Really really long overflow action name Overflow Hover"
    }),
    tooltipMessage: "Overflow Hover Long Link"
  })), React.createElement("li", {
    key: "djb-leftnav-menu-item-all-file-disabled-tooltip"
  }, React.createElement(CollapsibleSidebarItem, {
    collapsedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      shouldHideTooltip: true,
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      })
    }),
    expanded: boolean('isExpanded', true),
    expandedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      href: "/",
      shouldHideTooltip: true,
      icon: React.createElement(Folder16, {
        height: 20,
        width: 20
      }),
      overflowAction: React.createElement(Link, {
        href: "/"
      }, React.createElement(IconPlusRound, {
        color: "white"
      })),
      showOverflowAction: "hover",
      text: "Should Hide Tooltip"
    }),
    tooltipMessage: ""
  })), renderFiles())), React.createElement(CollapsibleSidebarFooter, null, React.createElement("ul", null, React.createElement("li", {
    key: "djb-leftnav-menu-item-all-files"
  }, React.createElement(CollapsibleSidebarItem, {
    collapsedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      icon: React.createElement(Code16, {
        height: 20,
        width: 20
      })
    }),
    expanded: boolean('isExpanded', true),
    expandedElement: React.createElement(CollapsibleSidebarMenuItem, {
      as: Link,
      icon: React.createElement(Code16, {
        height: 20,
        width: 20
      }),
      text: "Developer Console super duper long"
    }),
    tooltipMessage: "Developer Console Link supder duper long"
  }))))));
};
basic.story = {
  name: 'Basic Usage'
};
export default {
  title: 'Features|CollapsibleSidebar',
  component: CollapsibleSidebar,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=CollapsibleSidebar.stories.js.map