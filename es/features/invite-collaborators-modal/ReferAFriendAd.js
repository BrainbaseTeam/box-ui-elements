import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Badge from '../../components/badge';
import { Link } from '../../components/link';
import messages from './messages';
import './ReferAFriendAd.scss';

var ReferAFriendAd = function ReferAFriendAd() {
  return React.createElement("div", null, React.createElement(Badge, {
    type: "success"
  }, React.createElement(FormattedMessage, messages.referAFriendBadgeText)), "\xA0\xA0", React.createElement(FormattedMessage, messages.referAFriendText), "\xA0", React.createElement(Link, {
    className: "refer-a-friend-reward-center-link",
    href: "/master/settings/rewardCenter",
    rel: "noopener noreferrer",
    target: "_blank"
  }, React.createElement(FormattedMessage, messages.referAFriendRewardCenterLinkText)));
};

export default ReferAFriendAd;
//# sourceMappingURL=ReferAFriendAd.js.map