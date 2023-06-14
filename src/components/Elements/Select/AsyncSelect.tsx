import { default as ASelect, AsyncProps } from "react-select/async";
import { useTheme } from "@/context/ThemeContext";
import { GroupBase, StylesConfig } from "react-select/dist/declarations/src";

function AsyncSelect<
    Option,
    IsMutli extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: AsyncProps<Option, IsMutli, Group>) {
    const { theme } = useTheme();

    const selectStyles: StylesConfig<Option, IsMutli, Group> = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: "4px",
            borderColor: state.isFocused
                ? theme === "dark"
                    ? "#ffffff"
                    : "#000000"
                : theme === "dark"
                ? "#666666"
                : "#999999",
            backgroundColor: theme === "dark" ? "#333333" : "#f5f5f5",
            boxShadow: state.isFocused
                ? theme === "dark"
                    ? "0 0 0 2px #000000"
                    : "0 0 0 2px #000000"
                : "none",
            "&:hover": {
                borderColor: theme === "dark" ? "#ffffff" : "#000000",
            },
        }),
        menu: (provided) => ({
            ...provided,
            width: "auto",
            backgroundColor: theme === "dark" ? "#333" : "#fff",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused
                ? theme === "dark"
                    ? "#000000"
                    : "#eeeeee"
                : theme === "dark"
                ? "#333333"
                : "#ffffff",
            color: state.isSelected
                ? theme === "dark"
                    ? "#ffffff"
                    : "#000000"
                : theme === "dark"
                ? "#ffffff"
                : "#000000",
            "&:hover": {
                backgroundColor: theme === "dark" ? "#000000" : "#eeeeee",
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            color: theme === "dark" ? "#ffffff" : "#000000",
        }),
    };

    return <ASelect {...props} styles={selectStyles} />;
}

export default AsyncSelect;
