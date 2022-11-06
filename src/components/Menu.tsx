import React, { useState } from "react";
import DropDown from "./Dropdown";

interface MenuProps {
  placeholder: string;
  marginLeft?: string;
  inputType?: string;
  marginTop?: string;
  width?: string;
  display?: string;
  name?: string;
  step?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  isRequired?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Menu({
  placeholder,
  marginLeft,
  inputType,
  marginTop,
  width,
  display,
  onChange,
  name,
  isRequired,
  value,
  step,
}: MenuProps): JSX.Element {
  const options: Array<string> = value;
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectoption, setSelectoption] = useState<string>("");

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const optionSelection = (option: string): void => {
    setSelectoption(option);
  };

  return (
    <>
      <div className="announcement">
        <div>{selectoption ? `${selectoption}` : `${placeholder}`}</div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectoption ? "Select: " + selectoption : "Select ..."} </div>
        {showDropDown && (
          <DropDown
            options={options}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            optionSelection={optionSelection}
          />
        )}
      </button>
    </>
  );
}
