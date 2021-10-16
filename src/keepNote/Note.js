import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import "./KeepNote.css"

const Note = (props) => {
    return (
        <>
            <div className="note">
                <h2>{props.title}</h2>
                <br />
                <p className="mx-4">{props.content}</p>
                <button className="btn" onClick={()=>{props.deleteItem(props.id)}}><DeleteOutlineIcon className="deleteIcon" /></button>
                <button className="btn" onClick={()=>{props.editItem(props.id)}}><EditIcon className="editIcon" /></button>
            </div>
        </>
    )
}

export default Note
