import React, { Component } from 'react';

import axios from '../../axios'
// import Card from '../../components/card';
import Template from '../../components/template';
import dummyData from '../../dummy-data';
import "./main.css";

class Main extends Component {
    state= {
        templates:[],
        contentLoaded: false


    }
    componentDidMount(){
        // axios.get('/task_templates')
        // .then(response=>{
        //     console.log(response)
        //     const templates = response.data.splice(0,20);
           
        //    this.setState({templates:templates,contentLoaded:true })
           

        //    console.log(templates)
        //     // this.setState({posts:updatedPosts})
            
        //     // console.log(response.config)
        // })
        console.log(dummyData)
        this.setState({templates:dummyData,contentLoaded:true })
    }
   


    render () {
        console.log(this.state.templates)

        const theTemplate= this.state.templates.map(template=>{

            return<Template 
                description={template.description}
                name={template.name}
                link={template.link}

            />
        })
        return (
            <div className="main flex flex-wrap just justify-center">
                {/* <Template/> */}

               {this.state.contentLoaded?theTemplate:"Loading page..."}
                
            </div>
        );
    }
}

export default Main;