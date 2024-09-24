import {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
};
export const EditableSpan = ({title}: EditableSpanPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [newValue, setNewValue] = useState(title)

    const activateEditModeHandler = () => {
        setEditMode(true)
    }

    const deactivateEditModeHandler = () => {
        setEditMode(false)
    }

    const addNewTitleHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setNewValue(e.currentTarget.value)
    }

    return (
        <>
            {editMode
                ? <input
                    value={newValue}
                    onBlur={deactivateEditModeHandler}
                    onChange={addNewTitleHandler}
                    autoFocus/>
                : <span onDoubleClick={activateEditModeHandler} >{title} - {newValue}</span>
            }

        </>

    )
        ;
};