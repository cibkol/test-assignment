import { observer } from "mobx-react-lite";
import React from "react";
import "./styles.sass";
import { ITextFieldProps } from "./types";
import cn from "classnames";

const TextField: React.FC<ITextFieldProps> = ({
  onChange,
  value,
  className,
  name,
}) => {
  const textFieldOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value, event.target.name);
  };

  return (
    <div className={cn("text-field", className)}>
      <input
        value={value}
        name={name}
        onChange={textFieldOnChange}
        className="text-field__input"
      />
      <label
        className={cn("text-field__placeholder", {
          "text-field__placeholder_value_not_empty": !value,
        })}
      >
        input title
      </label>
    </div>
  );
};

export default observer(TextField);
