import * as React from 'react';
export declare const basic: () => JSX.Element;
export declare const withDescription: () => JSX.Element;
export declare const manuallyEditable: () => JSX.Element;
export declare const withLimitedDateRange: () => JSX.Element;
export declare const alwaysVisibleWithCustomInputField: () => JSX.Element;
export declare const disabledWithErrorMessage: () => JSX.Element;
export declare const customErrorTooltipPosition: () => JSX.Element;
export declare const withRange: () => JSX.Element;
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<Pick<import("./DatePicker").DatePickerProps, "className" | "label" | "name" | "isDisabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "description" | "hideLabel" | "value" | "error" | "customInput" | "dateFormat" | "displayFormat" | "errorTooltipPosition" | "hideOptionalLabel" | "inputProps" | "isAlwaysVisible" | "isClearable" | "isRequired" | "isTextInputAllowed" | "maxDate" | "minDate" | "resinTarget" | "yearRange"> & {
        forwardedRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
    } & React.RefAttributes<any>> & {
        WrappedComponent: React.ComponentType<import("./DatePicker").DatePickerProps>;
    };
    parameters: {
        notes: string;
    };
};
export default _default;
