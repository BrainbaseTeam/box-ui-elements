import { FieldProps } from 'formik';
import { RadioGroupProps } from './RadioGroup';
export declare type RadioGroupFieldProps = Partial<FieldProps> & RadioGroupProps;
declare const RadioGroupField: ({ field, ...rest }: RadioGroupFieldProps) => JSX.Element;
export default RadioGroupField;
