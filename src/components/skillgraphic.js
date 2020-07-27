import React, { Component } from 'react'
import { scaleOrdinal } from 'd3-scale'
import { schemeTableau10 } from 'd3-scale-chromatic'
import {easeCubicOut} from 'd3-ease'
import { select as d3Select } from 'd3-selection'
import { transition } from 'd3-transition'

export default class SkillGraphic extends Component {

    componentDidMount() {
        this.renderBubbles();
    }
    
    componentDidUpdate() {
        this.renderBubbles();
    }

    renderBubbles(){
        const data = this.props.data;

        var diameter = 100;
        var radius = diameter/2;
        var centerX = this.props.width/2;
        var centerY = this.props.height/2;

        d3Select(this.bubblesElement)
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .attr("class", "bubble");

        /* Create all the node elements and add them to the DOM in their base positions */
        var node = d3Select(this.bubblesElement)
            .selectAll(".node")
            .data(data)
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("x", centerX)
            .attr("y", centerY)
            .attr("transform", function(d) {
                return "translate(" + centerX + "," + centerY + ")";
            });

        /* Add a title element to each node */
        node.append("title")
            .text(function(d) {
                return d.Name;
            });

        /* Add a circle element to each node */
        node.append("circle")
            .attr("r", diameter/2)
            .style("fill", 'black');

        /* Add Text in the middle of each circle */
        node.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function(d) {
                return d.Name.substring(0, radius/3);
            })
            .attr("font-family", "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")
            .attr("font-size", radius/2.5)
            .style('fill', 'white');

        /* If this component is visible, we add an animation to each node */
        if(this.props.isVisible){

            // Calculate the X Position of the bubble along the edge a circle where the center point is the center of the SVG. 
            function calculateX(d, i, totalPoints) {
                var theta = (Math.PI*2)/totalPoints;
                const angle = theta * i;
                return centerX + (200 * Math.cos(angle));
            }

            // Calculate the Y Position of the bubble along the edge a circle where the center point is the center of the SVG. 
            function calculateY(d, i, totalPoints) {
                var theta = (Math.PI*2)/totalPoints;
                const angle = theta * i;
                return centerY + (200 * Math.sin(angle));
            }

            function translate(d,i) {
                return "translate(" + calculateX(d,i,data.length) + "," + calculateY(d,i,data.length) + ")" ;
            }

            d3Select(this.bubblesElement).selectAll(".node")
                .transition()
                .ease(easeCubicOut)
                .duration(800)
                .delay(function(d,i){ return i*300; })
                .attr("x", function(d,i){ return calculateX(d,i,data.length); })
                .attr("y", function(d,i){ return calculateY(d,i,data.length); })
                .attr("transform", function(d,i){ return translate(d,i); });
        }

    }

    

    render(){
        return (
            <svg width={this.props.width} height={this.props.height} ref={(el) => { this.bubblesElement = el; }}></svg>
        )
    }
}