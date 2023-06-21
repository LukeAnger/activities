import React, { useState, useEffect } from 'react';

const App = () => {

    const [curFile, setCurFile] = useState(null);
    const [files, setFiles] = useState([]);

    const onFileChange = (e) => {
        setCurFile(e.target.files[0]);
    }

    const onAddFile = (e, file) => {
        e.preventDefault();
        setFiles([...files, URL.createObjectURL(curFile)]);
    }

    const clickHandler = () => {
        console.log("Hello Julie")
    }
    
    return (
        <div>
            <h1>Activities</h1>
            <form id='formActivities'>
                <label onClick={clickHandler} >
                    <input  type="checkbox" name="study" />
                    Study Languages
                    <Upload onAddFile={onAddFile} onFileChange={onFileChange} curFile={curFile} files={files} />
                </label>
                <br/>
                <label onClick={clickHandler} >
                    <input  type="checkbox" name="starwars" />
                    Watch Star Wars
                </label>
                <br/>
                <label onClick={clickHandler} >
                    <input  type="checkbox" name="asteroid" />
                    Movie Asteroid City
                </label>
                <br/>
                <label onClick={clickHandler} >
                    <input  type="checkbox" name="ford" />
                    Ford Museum
                </label>
                <br/>
                <label onClick={clickHandler} >
                    <input  type="checkbox" name="driving" />
                    Driving Classes
                </label>
                <br/>
                <label onClick={clickHandler} >
                    <input type="checkbox" name="skating" />
                    Ice Skating
                </label>
                <br/>
                <label onClick={clickHandler} >
                    <input  type="checkbox" name="mani" />
                    Dinner at Mani
                </label>
            
            </form>
        </div>
    )
}

const Upload = ({ onAddFile, onFileChange, curFile, files}) => {
    console.log(files)
    return (
        <div>
            <form>
                <label>
                    <input onChange={onFileChange} type="file" name="file" />
                </label>
                <br/>
                <label>
                    <input onClick={onAddFile}  type="submit" value="Submit" />
                </label>
            </form>
            {files.length ? 
            files.map(file => {
            return <img 
                src={file}
                alt="Uploaded file"
                height="200"
                width="200"
                margin="10px"
            />
            }) : null}
            
        </div>
    )
}

export default App;