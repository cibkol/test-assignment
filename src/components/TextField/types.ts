export interface ITextFieldProps {
  onChange: (value: string, key: string) => void;
  value: string;
  name: string;
  className?: string;
}
