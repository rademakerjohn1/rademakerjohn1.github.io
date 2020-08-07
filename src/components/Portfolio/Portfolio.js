import React from "react";
import "./Portfolio.css";
import portfolio from "../data/portfolio.json";
import graphics from "../data/graphics.json";
import SectionCard from "../SectionCard/SectionCard";
import GridItem from "../GridItem/GridItem";
import ToggleButton from "../ToggleButton/ToggleButton"
import Modal from "../Modal/Modal"

class Portfolio extends React.Component {

    constructor() {
        super()
        this.state = {
            showGraphics: false,
            image: '',
            title: '',
            description: ''
        }
    }

    handleChange = () => {
        this.setState({ showGraphics: !this.state.showGraphics })
    }

    handleModal = (imageSource, imageTitle, imageDescription) => {
        this.setState({ 
            image: imageSource,
            title: imageTitle,
            description: imageDescription
        })
    }

    render() {
        return (
            <SectionCard
                cardHeading={"Portfolio."}
                cardClass={"section-card portfolio"}
                headingClass={"align-right"} section={"portfolio"}
                containerClass={"row"}
                link={<ToggleButton onClick={() => this.handleChange()} bool={this.state.showGraphics} />}
            >
            <Modal title={this.state.title} image={this.state.image} description={this.state.description} />
                {!this.state.showGraphics ?
                    portfolio.map(item => (
                        <GridItem bool={this.state.showGraphics} projectDemo={item.demo} projectImg={item.img} key={item.title}
                            projectDescription={item.description} projectTitle={item.title}
                            projectRepo={item.repo} />
                    )) :
                    graphics.map(item => (
                        <GridItem bool={this.state.showGraphics} projectDemo={null} projectImg={item.img} key={item.title}
                            projectDescription={item.description} projectTitle={item.title}
                            projectRepo={null} handleModal={() => this.handleModal(item.img, item.title, item.description)} />
                    ))
                }
            </SectionCard>
        )
    }
}

export default Portfolio;