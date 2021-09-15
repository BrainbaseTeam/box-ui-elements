import { FieldProps } from 'formik';
import { CheckboxProps } from './Checkbox';
export declare type CheckboxFieldProps = Partial<FieldProps> & CheckboxProps;
declare const CheckboxField: ({ field, ...rest }: CheckboxFieldProps) => JSX.Element;
export default CheckboxField;
