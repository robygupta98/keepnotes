import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import logo from "./Images/logo.png";
import "../keepNote/KeepNote.css";
import Header from '../keepNote/Header';
import Footer from "../keepNote/Footer";
import CreateNote from './CreateNote';
import Note from './Note';

const KeepNote = () => {
    let initInput;
    if (localStorage.getItem("Nots") !== null) {
        initInput = JSON.parse(localStorage.getItem("Nots"));
    }
    else {
        initInput = [];
    }
    const [addItem, setAddItem] = useState(initInput);
    const addNote = (note) => {
        setAddItem((prevData) => {
            return [...prevData, note]
        })
    };
    const onDelete = (id) => {
        setAddItem((oldNotes) => {
            return oldNotes.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }
    let editData;
    const onEdit = (id) => {
        editData = addItem.filter((arrElem, index) => {
            return index !== id;
        })
        // document.getElementById("title").style.display="block";
        // document.getElementById("btnSave").style.display="block";
        // document.getElementsByClassName('main_note')[0].style.height = '175px';
        // document.getElementById("title").value=editData[0].title;
        // document.getElementById("content").value=editData[0].content;
    }

    useEffect(() => {
        localStorage.setItem("Nots", [JSON.stringify(addItem)]);
    }, [addItem])
    return (
        <>
            <Header />
            <CreateNote passNote={addNote} expendIt="false" title="" content="" />
            {
                addItem.map((val, index) => {
                    return <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                        editItem={onEdit}
                    />
                })
            }
            <Footer />
        </>
    )
}

export default KeepNote
