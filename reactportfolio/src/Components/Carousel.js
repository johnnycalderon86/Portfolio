import React from 'react';

import Card from '../Components/Card';

import memory from '../assets/images/brainweights.webp'
import tictac from '../assets/images/tictactoe.png';
import todo from '../assets/images/todo.jpg';
import css from '../assets/images/css.png';
import flex from '../assets/images/flex2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'React App',
                    subTitle: 'Tic-tac-toe',
                    imgSrc: tictac,
                    link: 'https://react-tictactoe86.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'React App',
                    subTitle: 'Todo-App',
                    imgSrc: todo,
                    link: 'https://todo-list86.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Memory Game',
                    subTitle: 'Javascript memory game',
                    imgSrc: memory,
                    link: 'https://todo-list86.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'CSS workshop',
                    subTitle: 'Using percentage to make the page responsive',
                    imgSrc: css,
                    link: 'https://johnnycalderon86.github.io/Css-fundamentals/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'CSS-Flexbox',
                    subTitle: 'Making a page responsive with flexbox and media queries',
                    imgSrc: flex,
                    link: 'https://johnnycalderon86.github.io/CSS-flex1/',
                    selected: false
                },
               
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;