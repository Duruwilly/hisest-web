import React from 'react'
import { Link } from 'react-router-dom';
import projectBg from "../assets/images/projectBg.jpeg";
import FullProjects from '../components/FullProject';


const Projects = () => {
  return (
    <>
    {/* start project header */}
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: `url(${projectBg})` }}>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="page-header__wrapper">
                            <div className="page-header__content">
                                <h2>Projects</h2>
                                <div className="page-header__menu">
                                    <ul>
                                        <li><Link to='/'>Home</Link></li>
                                        <li>Projects</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end project header */}

        <FullProjects />
    </>

  )
}

export default Projects