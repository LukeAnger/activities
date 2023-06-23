import React, { useState, useEffect } from 'react';
import { exampleActivities } from './exampleData.js';

const App = () => {

    const [curFile, setCurFile] = useState(null);
    const [files, setFiles] = useState([]);
    const [activities, setActivities] = useState(exampleActivities);

    const onAddActivity = (e) => {
        e.preventDefault();
        setActivities([...activities, {id: activities.length + 1, name: e.nativeEvent.target[0].value, photos: []}]);
    }

    const onFileChange = (e) => {
        setCurFile(e.target.files[0]);
    }

    const onAddFile = (e, file, index) => {
        e.preventDefault();
        setFiles([...files, URL.createObjectURL(curFile)]);
        setActivities(activities.map(activity => {
            if (activity.id === index) {
                console.log(curFile);
                // [...activity.photos, URL.createObjectURL(curFile)];
                activity.photos.push(URL.createObjectURL(curFile));
            }
            return activity;
        }))
        
        
    }

    const clickHandler = () => {
        console.log("Hello Julie")
    }
    
    return (
        <div>
            <h1>Activities</h1>
            <AddActivityForm onAddActivity={onAddActivity} />
            <div id='activities'>
                {activities && activities.map(activity => {
                    return <Activity activity={activity} onAddFile={onAddFile} onFileChange={onFileChange} curFile={curFile} files={files} clickHandler={clickHandler} />
                    })
                }
            </div>
        </div>
    )
}

const Upload = ({ onAddFile, onFileChange, curFile, activity}) => {
    const {id, photos} = activity;
    return (
        <div>
            <form>
                <label>
                    <input onChange={onFileChange} type="file" name="file" />
                </label>
                <br/>
                <label>
                    <input onClick={e => {onAddFile(e, curFile, id)}}  type="submit" value="Submit" />
                </label>
            </form>
            {photos.length ? 
            photos.map(file => {
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

const Activity = ({activity, onAddFile, onFileChange, clickHandler, curFile, files}) => {

    return (
        <>
            <label onClick={clickHandler} >
                <input  type="checkbox" name="study" />
                {activity.name}
                <Upload onAddFile={onAddFile} onFileChange={onFileChange} curFile={curFile} files={files} activity={activity} />
            </label>
            <br/>
        </>
    )
}

const AddActivityForm = ({ onAddActivity }) => {


    return (
        <div>
            <form onSubmit={onAddActivity}>
                <label>
                    Activity Name:
                    <input type="text" name="name" />
                </label>
                <br/>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    )   
}


export default App;