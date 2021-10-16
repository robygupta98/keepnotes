import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const CreateNote = (props) => {
    const [expend, setExpend] = useState(false);
    const [note, setNote] = useState({
        title: props.title,
        content: props.content,
    });

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    const addEvent = (e) => {
        e.preventDefault();
        if (note.title == "") {
            alert("Please enter title.")
            document.getElementById("title").focus();
        }
        else if (note.content == "") {
            alert("Please enter content.")
            document.getElementById("content").focus();
        }
        else {
            props.passNote(note);
            setNote({ title: "", content: "", })
        }
    }

    const expendIt = () => {
        setExpend(true);
        document.getElementsByClassName('main_note')[0].style.height = '175px';
    }
    const backToNormal = () => {
        setExpend(false);
        document.getElementsByClassName('main_note')[0].style.height = '80px';
    }
    return (
        <>
            <div className="main_note" onDoubleClick={backToNormal}>
                <form action="get">
                    {expend ?
                        <input
                            type="text"
                            id="title"
                            name="title"
                            onChange={inputEvent}
                            placeholder="Title"
                            autoComplete="off"
                            value={note.title}
                        /> : null}

                    <textarea
                        name="content"
                        id="content"
                        cols="" rows=""
                        onChange={inputEvent}
                        placeholder="Write a note..."
                        value={note.content}
                        onClick={expendIt}
                    ></textarea>
                    {expend ? <button onClick={addEvent}><AddIcon className="pluse_sign" /></button> : null}
                </form>
            </div>
        </>
    )
}

export default CreateNote
