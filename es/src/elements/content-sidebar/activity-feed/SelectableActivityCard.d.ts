/// <reference types="react" />
/// <reference types="@emotion/core" />
import { Props as ActivityCardProps } from './ActivityCard';
import './SelectableActivityCard.scss';
export declare type Props = {
    isDisabled?: boolean;
    onSelect: () => void;
} & ActivityCardProps;
declare const SelectableActivityCard: ({ children, className, isDisabled, onSelect, ...rest }: Props) => JSX.Element;
export default SelectableActivityCard;
