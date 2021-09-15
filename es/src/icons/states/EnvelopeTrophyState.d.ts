import * as React from 'react';
import { TwoTonedIcon } from '../iconTypes';
declare class EnvelopeTrophyState extends React.PureComponent<TwoTonedIcon> {
    static defaultProps: {
        className: string;
        height: number;
        width: number;
    };
    idPrefix: string;
    render(): JSX.Element;
}
export default EnvelopeTrophyState;
