import React from 'react';
import SolutionLogosGrid from './SolutionLogosGrid';

// programmingLanguages
import javaLogo from '@/assets/logos/technologies/java-logo.png';
import CplusLogo from '@/assets/logos/technologies/C++-logo.jpeg';
import csharpLogo from '@/assets/logos/technologies/CSharp-logo.jpeg';
import rubyLogo from '@/assets/logos/technologies/ruby-logo.png';
import phpLogo from '@/assets/logos/technologies/php-logo.jpeg';
import goLogo from '@/assets/logos/technologies/go-logo.jpeg';
import rustLogo from '@/assets/logos/technologies/rust-logo.jpeg';
import pyLogo from '@/assets/logos/technologies/python-logo.png';

// Desktop Application
import springLogo from '@/assets/logos/technologies/icons8-spring-boot-50.png';
import electronLogo from '@/assets/logos/technologies/electron-logo.png';
import qtLogo from '@/assets/logos/technologies/Qt-logo.png';
import wpfLogo from '@/assets/logos/technologies/WPF-logo.png';
import javafxLogo from '@/assets/logos/technologies/javaFX-logo.png';
import netLogo from '@/assets/logos/technologies/ASP.NET_.png';
import oracleLogo from '@/assets/logos/technologies/oracle-logo.webp';

// Integrations
import restLogo from '@/assets/logos/technologies/rest-logo.jpeg';
import graphqlLogo from '@/assets/logos/technologies/graphql-logo.png';
import soapLogo from '@/assets/logos/technologies/soap-logo.jpeg';
import grpcLogo from '@/assets/logos/technologies/grpc-logo.jpeg';
import websocketLogo from '@/assets/logos/technologies/webSockets-logo.png';

const SoftwareDevelopment = () => {
  const programmingLanguages = [
    javaLogo,
    CplusLogo,
    csharpLogo,
    rubyLogo,
    phpLogo,
    goLogo,
    rustLogo,
    pyLogo,
  ];

  const desktopApplication = [
    springLogo,
    electronLogo,
    qtLogo,
    wpfLogo,
    javafxLogo,
    netLogo,
    oracleLogo,
  ];

  const Integrations = [
    restLogo,
    graphqlLogo,
    soapLogo,
    grpcLogo,
    websocketLogo,
  ];

  return (
    <div className="relative text-left p-4 space-y-8">

      <div>
        <h3 className="text-lg mb-4"> Programming Languages:</h3>
        <SolutionLogosGrid logos={programmingLanguages} />
      </div>

      <div>
        <h3 className="text-lg mb-4">Desktop Application Frameworks:</h3>
        <SolutionLogosGrid logos={desktopApplication} />
      </div>

      <div>
        <h3 className="text-lg mb-4">APIs & Integrations: </h3>
        <SolutionLogosGrid logos={Integrations} />
      </div>

      {/* <div className="my-8">
        <h3 className="text-lg mb-4">DevOps & Automation:</h3>
        <SolutionLogosGrid logos={versionConLogos} />
      </div> */}

    </div>
  );
};


export default SoftwareDevelopment