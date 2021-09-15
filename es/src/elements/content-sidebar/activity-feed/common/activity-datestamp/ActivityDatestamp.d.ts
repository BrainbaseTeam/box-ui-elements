import { IntlConfig } from 'react-intl';
export declare const MILLISECONDS_PER_YEAR: number;
declare type ReadableTimeProps = {
    allowFutureTimestamps?: boolean;
    alwaysShowTime?: boolean;
    intl: IntlConfig;
    relativeThreshold?: number;
    showWeekday?: boolean;
    timestamp: number;
    uppercase?: boolean;
};
export declare type Props = {
    date: string | Date | number;
} & Partial<ReadableTimeProps>;
declare const ActivityDatestamp: ({ date, ...rest }: Props) => JSX.Element;
export default ActivityDatestamp;
