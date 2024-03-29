import React, { useEffect, useState } from "react";
import "../styles/dropdown.css";
type DropDownProps = {
  options: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  optionSelection: Function;
};

export default function DropDown({
  options,
  optionSelection,
}: DropDownProps): JSX.Element {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the option name
   * back to the parent component
   *
   * @param option  The selected option
   */
  const onClickHandler = (option: string): void => {
    optionSelection(option);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? "dropdown" : "dropdown active"}>
        {options.map((option: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(option);
              }}
            >
              {option}
            </p>
          );
        })}
      </div>
    </>
  );
}
