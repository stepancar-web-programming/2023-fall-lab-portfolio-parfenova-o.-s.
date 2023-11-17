import img1 from "./../img/projects/01.png";
import img2 from "./../img/projects/02.jpg";
import img3 from "./../img/projects/03.jpg";
import img4 from "./../img/projects/04.jpg";
import img5 from "./../img/projects/05.jpg";
import img6 from "./../img/projects/06.png";

import bigImg1 from "./../img/projects/01-big.gif";
import bigImg2 from "./../img/projects/02-big.png";
import bigImg3 from "./../img/projects/03-big.png";
import bigImg4 from "./../img/projects/04-big.png";
import bigImg5 from "./../img/projects/05-big.png";

const projects = [

    {
        title: 'Habr tutorial',
        skills: 'C# WPF, experience of writing the first article on Habr',
        img: img1,
        imgBig: bigImg1,
        habrLink: "https://habr.com/ru/articles/512448/"
    },
    {
        title: 'Client-Server Application on Java',
        skills: 'Java, Object Oriented Programming, Java Stream API, Client-Server architecture and main protocols, Design patterns, Threads, PostgreSQL, JDBC, JavaFX, DI using Spring',
        img: img2,
        imgBig: bigImg2,
    },
    {
        title: 'Assembly dictionary',
        skills: 'Assembly',
        img: img3,
        imgBig: bigImg3,
        gitHubLink: "https://github.com/emshen6/dictionary-asm"
    },
    {
        title: 'Assembly Input-Output Library',
        skills: 'Assembly',
        img: img4,
        imgBig: bigImg4,
        gitHubLink: "https://github.com/emshen6/io-library-asm"
    },
    {
        title: 'Recognition of Audience Engagement in Zoom',
        skills: 'Python, Classification models, Machine learning, CNN neural network, ResNet, Computer vision with OpenCV',
        img: img5,
        imgBig: bigImg5
    },
    {
        title: 'Coming soon...',
        skills: '',
        img: img6,
        videoId: "KffVhdWAgXc"
    }
];

export {projects}