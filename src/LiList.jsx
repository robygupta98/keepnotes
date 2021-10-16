import React from 'react';
import RestoreFromTrashTwoToneIcon from '@material-ui/icons/RestoreFromTrashTwoTone';
import Tooltip from '@material-ui/core/Tooltip';

const LiList = (props) => {

    return (
        <>
            <div className="todo_style">
                <Tooltip title="Delete">
                    <RestoreFromTrashTwoToneIcon className="fa fa-times" aria-hidden="true" onClick={() => {
                        props.onSelect(props.id)
                    }} />
                </Tooltip>
                <li>{props.text}</li>
            </div>
        </>
    );
}

export default LiList;