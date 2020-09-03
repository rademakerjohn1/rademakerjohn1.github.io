import React from "react";
import "./Portfolio.css";
import portfolio from "../data/portfolio.json";
import graphics from "../data/graphics.json";
import SectionCard from "../SectionCard/SectionCard";
import GridItem from "../GridItem/GridItem";
import ToggleButton from "../ToggleButton/ToggleButton"
import GraphicDesign from "../GraphicDesign/GraphicDesign"
import Modal from "../Modal/Modal"

class Portfolio extends React.Component {

    constructor() {
        super()
        this.state = {
            showGraphics: false,
            projects: [...portfolio],
            graphics: [...graphics],
            image: '',
            title: '',
            description: ''
        }
    }

    componentDidMount = () => {
        this.state.projects.forEach(project => project.hover = false)
    }

    handleChange = () => {
        this.setState({ showGraphics: !this.state.showGraphics })
        window.location = "/#portfolio"
    }

    handleModal = (imageSource, imageTitle, imageDescription) => {
        this.setState({
            image: imageSource,
            title: imageTitle,
            description: imageDescription
        })
    }

    toggleHover = (i) => {
        let newObj = [...this.state.projects]
        newObj[i].hover = !newObj[i].hover;
        this.setState({
            projects: newObj
        })
    }


    render() {
        return (
            <SectionCard
                cardHeading={"Portfolio."}
                cardClass={"section-card portfolio"}
                section={"portfolio"}
            >   
            <Modal title={this.state.title} image={this.state.image} description={this.state.description} />

                <div className="portfolio-row">
                    {!this.state.showGraphics ? portfolio.map((item, index) => (
                        <GridItem 
                            onMouseEnter={() => this.toggleHover(index)} 
                            onMouseLeave={() => this.toggleHover(index)} 
                            bool={this.state.showGraphics} 
                            demo={item.demo} 
                            img={item.img} 
                            key={index}
                            hover={this.state.projects[index].hover} 
                            description={item.description}
                            tools={item.tools}
                            title={item.title} 
                            repo={item.repo} />
                    )) : graphics.map((graphic, index) => (
                        <GraphicDesign 
                            key={index} 
                            hover={this.state.graphics[index].hover} 
                            onClick={() => this.handleModal(graphic.img, graphic.title, graphic.description)} 
                            title={graphic.title} img={graphic.img}
                         />
                    ))}
                </div>
                <ToggleButton showGraphics={this.state.showGraphics} onClick={() => this.handleChange()} />

            </SectionCard>
        )
    }
}

export default Portfolio;