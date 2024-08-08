import React, { useState } from "react";

import CreatableSelect from "react-select/creatable";
import { generateId } from "./lib/utils";

interface Option {
    readonly label: string;
    readonly value: string;
}

const createOption = (label: string) => ({
    id: generateId(),
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
});

// const defaultOptions = [
//     createOption("One"),
//     createOption("Two"),
//     createOption("Three"),
// ];

export default ({ options, setSelection, setOptions }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(true);
    // const [options, setOptions] = useState(skills);
    const [value, setValue] = useState<Option | null>();


    const handleCreate = (inputValue: string) => {
        setIsLoading(true);
        setTimeout(() => {
            const newOption = createOption(inputValue);
            setIsLoading(false);
            setOptions((prev) => [...prev, newOption]);
            setValue(newOption);
            setSelection(newOption)
            // setMenuIsOpen(false)
        }, 1000);
    };

    const handleSetValue = (inputValue: string) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setValue(inputValue);
            setSelection(inputValue)
            // setMenuIsOpen(false)

        }, 1000);
    }

    return (
        <CreatableSelect
            defaultMenuIsOpen={menuIsOpen}
            isClearable
            isDisabled={isLoading}
            isLoading={isLoading}
            onChange={(newValue) => handleSetValue(newValue)}
            onCreateOption={handleCreate}
            options={options}
            value={value}
        />
    );
};
