import React, { useState } from 'react';
import Terminal from './Terminal.js';
/*import Notepad from './Notepad/notepad.jsx'*/
/*import { HashRouter, Route } from 'react-router-dom';*/
import { GiMagnifyingGlass } from "react-icons/gi";
import { GiAnvilImpact } from "react-icons/gi";
import { TfiEmail } from "react-icons/tfi";
import { FaDownload } from "react-icons/fa"
import { IoLogoGameControllerB } from "react-icons/io"
import { BsFillDoorOpenFill } from "react-icons/bs"
import { BsPersonCircle } from "react-icons/bs"
import { FaLaptopCode } from "react-icons/fa"
import { CgTerminal } from "react-icons/cg"
import { AiFillHome } from "react-icons/ai"
import { AiFillClockCircle } from "react-icons/ai"
import { MdMenu } from "react-icons/md"
import Bscanning from './Recon/reconBScan.jsx'
import BasicCard from './Recon/reconIndiv.jsx'
import CompanyCard from './Recon/reconCompany.jsx'
import ScanningCardW from './Recon/ScanningCard.jsx'
import ReconA from './Recon/reconActive.jsx';
import SocialE from './Recon/reconSocial.jsx'
import './App.css';

function App() {
  const [showTerminal, setShowTerminal] = useState(false);
  
 
  return (
    <div className="App">
        <div className='flex-container-top'>

            <a
                className="App-link"
                href="http://127.0.0.1:8000/web-terminal/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Moriarty
            </a>

            <section className='icon-hamburger-menu' id ='ham-menu'>
              <MdMenu/>
            </section>
            <section className='icon-house' id ='home'>
              <AiFillHome/>
            </section>
            <section className='icon-circle' id ='clock'>
              <AiFillClockCircle/>
            </section>



            <section className='icon' id ='recon'>
              <GiMagnifyingGlass/>
              {/**Another option MdPersonSearch */}
              <span className='tooltiptext'>Recon</span>
            </section>
            <section className='icon' id ='weaponization'>
              <GiAnvilImpact/>
              {/*oTHER OPTION:  IoSkullOutline*/}
              <span className='tooltiptext'>Weapon</span>
            </section>
            <section className='icon' id ='delivery'>
              <TfiEmail/>
              {/**another option: CiDeliveryTruck  */}
              <span className='tooltiptext'>Delivery</span>
            </section>
            <section className='icon' id ='exploitation'>
              <BsFillDoorOpenFill/>
              <span className='tooltiptext'>Exploiting</span>
            </section>
            <section className='icon' id ='install'>
              <FaDownload/>
              <span className='tooltiptext'>Installing</span>
            </section>
            <section className='icon' id ='command-control'>
              <IoLogoGameControllerB/>
              <span className='tooltiptext'>Control</span>
            </section>
            <section className='icon' id ='actions-on-objective'>
              <FaLaptopCode/>
              <span className='tooltiptext'>Objectives</span>
            </section>
            <Bscanning/>
            <BasicCard/>
            <CompanyCard/>
            <ScanningCardW/>
            <ReconA/>
            <SocialE/>
            {/**Notepad <Notepad/>*/}

            {/*FaTerminal*/}
            <a href="http://127.0.0.1:8000/web-terminal/" target="_blank">
            <CgTerminal className= 'terminal-icon' id = 'terminal' />
            </a>
            <BsPersonCircle className='profile' id = 'profile'/>
        </div>
        {showTerminal && <Terminal/>}
    </div>
    
  );
}

export default App;
