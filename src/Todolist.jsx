import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import LiList from './LiList';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';


const Todolist = () => {
    let initInput;
    if (localStorage.getItem("Items") !== null) {
        initInput = JSON.parse(localStorage.getItem("Items"));
    }
    else {
        initInput = [];
    }
    const [inputList, SetInputList] = useState("");
    const [Items, SetItems] = useState(initInput);
    const onInputEvent = (e) => {
        SetInputList(e.target.value);
    }
    const AddlistOfItems = () => {
        if (inputList != "") {
            SetItems((oldItems) => {
                return [...oldItems, inputList];
            });
            SetInputList("");
        }
        else {
            alert("Please enter ther Items.");
        }
        document.getElementById("txtItems").focus();
    }
    const deleteItems = (id) => {
        SetItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }
    useEffect(() => {
        localStorage.setItem("Items", [JSON.stringify(Items)]);
    }, [Items])

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add an Items" id="txtItems" onChange={onInputEvent} value={inputList} />
                    <Tooltip title="Add">
                        <Button className="btn btn-success" onClick={AddlistOfItems}> <AddIcon /> </Button>
                    </Tooltip>
                    <br />
                    <ol>
                        {/* <li>{inputList} </li> */}
                        {Items.map((itemval, index) => {
                            return <LiList text={itemval} key={index} id={index} onSelect={deleteItems} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todolist;