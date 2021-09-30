import * as React from 'react';
import { WrappedComponentProps } from 'react-intl';
import Pikaday from 'pikaday';
import { TooltipPosition } from '../tooltip';
import './DatePicker.scss';
export declare enum DateFormat {
    ISO_STRING_DATE_FORMAT = "isoString",
    UTC_TIME_DATE_FORMAT = "utcTime",
    UNIX_TIME_DATE_FORMAT = "unixTime",
    UTC_ISO_STRING_DATE_FORMAT = "utcISOString"
}
export interface DatePickerProps extends WrappedComponentProps {
    /** Add a css class to the component */
    className?: string;
    /** Custom input field */
    customInput?: React.ReactElement;
    /** The format of the date value for form submit */
    dateFormat?: DateFormat;
    /** Some optional description */
    description?: React.ReactNode;
    /** The format of the date displayed in the input field */
    displayFormat?: Object;
    /** Error message */
    error?: React.ReactNode;
    /** Position of error message tooltip */
    errorTooltipPosition?: TooltipPosition;
    /** Whether to show or hide the field's label */
    hideLabel?: boolean;
    /** Whether show or hide the 'Optional' label */
    hideOptionalLabel?: boolean;
    /** Props that will be applied on the input element */
    inputProps?: Object;
    /** Is the calendar always visible */
    isAlwaysVisible?: boolean;
    /** Is input clearable */
    isClearable?: boolean;
    /** Is input disabled */
    isDisabled?: boolean;
    /** Is input required */
    isRequired?: boolean;
    /** Is user allowed to manually input a value (WARNING: this doesn't work with internationalization) */
    isTextInputAllowed?: boolean;
    /** Label displayed for the text input */
    label: React.ReactNode;
    /** The maximum date allowed to be selected */
    maxDate?: Date;
    /** The minimum date allowed to be selected */
    minDate?: Date;
    /** Name of the text input */
    name?: string;
    /** Called when input loses focus */
    onBlur?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    /** Called when input is changed, passed the selected Date */
    onChange?: Function;
    /** Called when input receives focus */
    onFocus?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    /** Placeholder for the text input */
    placeholder?: string;
    /** Resin tag */
    resinTarget?: string;
    /** Date to set the input */
    value?: Date | null;
    /** Number of years, or an array containing an upper and lower range */
    yearRange?: number | Array<number>;
}
declare class DatePicker extends React.Component<DatePickerProps> {
    static defaultProps: {
        className: string;
        dateFormat: DateFormat;
        displayFormat: {};
        error: string;
        errorTooltipPosition: TooltipPosition;
        inputProps: {};
        isClearable: boolean;
        isTextInputAllowed: boolean;
        yearRange: number;
    };
    errorMessageID: string;
    descriptionID: string;
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: DatePickerProps): void;
    componentWillUnmount(): void;
    onSelectHandler: (date?: Date | null) => void;
    updateDateInputValue(value: string): void;
    dateInputEl: HTMLInputElement | null | undefined;
    datePicker: Pikaday | null;
    datePickerButtonEl: HTMLButtonElement | null | undefined;
    shouldStayClosed: boolean;
    focusDatePicker: () => void;
    handleInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    handleInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    handleButtonClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    formatDisplay: (date?: Date | null | undefined) => string;
    formatValue: (date: Date | null) => string | number;
    clearDate: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    render(): JSX.Element;
}
export { DatePicker as DatePickerBase };
declare const _default: React.ForwardRefExoticComponent<Pick<DatePickerProps, "className" | "label" | "name" | "isDisabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "description" | "hideLabel" | "value" | "error" | "customInput" | "dateFormat" | "displayFormat" | "errorTooltipPosition" | "hideOptionalLabel" | "inputProps" | "isAlwaysVisible" | "isClearable" | "isRequired" | "isTextInputAllowed" | "maxDate" | "minDate" | "resinTarget" | "yearRange"> & {
    forwardedRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
} & React.RefAttributes<any>> & {
    WrappedComponent: React.ComponentType<DatePickerProps>;
};
export default _default;
