import React, { useState } from "react";
import DropDown from "./Dropdown";
import "../styles/dropdown.css";
import Button from "./Button";
import { relative } from "path";

interface MenuProps {
  placeholder: string;
  inputType?: string;
  name?: string;
  step?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

export default function Menu({ placeholder, value }: MenuProps): JSX.Element {
  const options: Array<string> = value;
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectoption, setSelectOption] = useState<string>("");

  const toggleDropDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const optionSelection = (option: string): void => {
    setSelectOption(option);
  };

  return (
    <>
      <div className="menuWrapper">
        <div className="announcement">
          <div>{`${placeholder}:${selectoption}`}</div>
        </div>
        <Button
          style={{
            margin: "0.88rem 1rem 1rem 0",
            width: "12rem",
            position: "relative",
            padding: "0.88rem 1rem 0.88rem 1rem",
            color: "#717171",
            backgroundColor: "bfc5cd",
            backgroundImage: "none",
            fontWeight: 400,
            textAlign: "left",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            border: "1px solid transparent",
            fontSize: "0.85rem",
            lineHeight: 1.5,
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
          className={showDropDown ? "active" : undefined}
          onClick={(e: React.MouseEvent<HTMLButtonElement>): void =>
            toggleDropDown(e)
          }
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
          }
        >
          <div>{selectoption ? "Select: " + selectoption : "Select ..."} </div>
          {showDropDown && (
            <DropDown
              options={options}
              showDropDown={false}
              toggleDropDown={(e: React.MouseEvent<HTMLButtonElement>): void =>
                toggleDropDown(e)
              }
              optionSelection={optionSelection}
            />
          )}
        </Button>
      </div>
    </>
  );
}
