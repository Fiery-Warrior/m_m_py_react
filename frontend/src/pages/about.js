import React from "react";
import BasicCard from './Recon/reconIndiv';
import SocialE from './Recon/reconSocial';
import CompanyCard from './Recon/reconCompany';
import ReconA from './Recon/reconActive';
import ScanningCardW from './Recon/ScanningCard';
import Bscanning from './Recon/reconBScan';

const About = () => {
return (
	<div>
		<BasicCard/>
		<CompanyCard/>
		<ReconA/>
		<ScanningCardW/>
		<SocialE/>
		<Bscanning/>
	<h1>
		GeeksforGeeks is a Computer
		Science portal for geeks.
	</h1>
	</div>
);
};

export default About;
