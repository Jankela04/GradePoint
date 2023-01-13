import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

type Props = {};

const Name = (props: Props) => {
    const [name, setName] = useLocalStorage("name", "");
    const [editMode, setEditMode] = useState(false);

    return (
        <div onClick={() => setEditMode((prev) => !prev)}>
            {editMode ? (
                <input
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            ) : (
                <span>{name}</span>
            )}
        </div>
    );
};

export default Name;
