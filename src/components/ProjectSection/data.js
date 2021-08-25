import img1 from "../../images/geko.jpeg"

export const MlCards = [
    {
        key:1,
        path: "BachelorThesis",
        title: "Surface Reconstruction",
        area: "Computer Graphics",
        description: "Given a 3D input point cloud we return the reconstructed shape in a 3d mesh representation",
        img: img1,
        display: true,
        style: {height: '100%'},
    },
    {
        key: 2,
        path: "OpticalFlow",
        title: "Optical Flow",
        description: "We predict the optical flow between two succcesive images",
        area: "Computer Vision",
        img: img1,
        display: true,
        style: {height: '100%'},
    },
    {
        key: 3,
        path: "AuthorPrediction",
        title: "Author prediction",
        description: "Based on judical opinion text, we perform an authorship attribution prediction",
        area: "Natural Language processing",
        img: img1,
        display: true,
        style: {height: '100%'},
    },
    {
        key: 4,
        path: "Others",
        title: "Other smaller projects",
        description: "Here I list some selected smaller projects, which however were still very intersting",
        area: "Medicine",
        img: img1,
        display: true,
        style: {height: '100%', width: '75%', marginTop:'10px'},
    }
];

export const WebCards = [
    {
        key:5,
        path: "ConnectFour",
        title: "ConnectFour",
        area: "React, Redux, NodeJs",
        display: true,
        style: {height: '100%'},
    },
    {
        key: 6,
        path: "LolAPI",
        title: "LoL API",
        area: "React, RestAPI",
        display: true,
        style: {height: '100%'},
    },
    /*
    {
        key: 7,
        path: "Homepage",
        title: "Homepage",
        area: "React",
        display: true,
        style: {height: '100%'},
    },
    */
];

