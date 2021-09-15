import { FieldProps } from 'formik';
import { RadioButtonProps } from './RadioButton';
export declare type RadioButtonFieldProps = Partial<FieldProps> & RadioButtonProps;
declare const RadioButtonField: ({ field, value, ...rest }: RadioButtonFieldProps) => JSX.Element;
export default RadioButtonField;
