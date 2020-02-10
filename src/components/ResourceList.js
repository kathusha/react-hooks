import React from 'react';
import useResources from './useResources';

const ResourceList = ({resource}) => {

    const resources = useResources(resource);

    return(
        <ul>
            {resources.map(record => (
                <li key={record.id}>{record.title}</li>
            ))}
        </ul>
    );
};

export default ResourceList;



    
    //when ResourceList is a class component The foloowing will give endless network requests
    // asynccomponentDidUpdate(){
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
    //     this.setState({ resources: response.data});
    // }