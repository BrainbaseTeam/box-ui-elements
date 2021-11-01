import * as React from 'react';

import { Icon } from '../iconTypes';

const IconFolderCustom = ({ className = '', height = 32, title, width = 32, thumbnailUrl }: Icon) => (
    <img alt="Folder icon" src={thumbnailUrl} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
);

export default IconFolderCustom;
