import React, {useState} from 'react'
import EducationSection from '../components/EducationSection';
import HeroSection from '../components/HeroSection';
import Navbar from "../components/Navbar/Index";
import Sidebar from "../components/Sidebar";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <EducationSection />
        </>
    )
}

export default Home
