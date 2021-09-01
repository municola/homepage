import React from 'react'
import EducationSection from '../components/EducationSection';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import Contacts from "../components/Contacts";


const Home = () => {
    return (
			<>
				<HeroSection />
				<EducationSection />
				<ProjectSection />
				<Contacts />
			</>
    )
}

export default Home
