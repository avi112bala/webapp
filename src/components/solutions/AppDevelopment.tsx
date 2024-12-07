import React from 'react';
import SolutionLogosGrid from './SolutionLogosGrid';

// nativeDevelopment
import javaLogo from '@/assets/logos/technologies/java-logo.png';
import kotlinLogo from '@/assets/logos/technologies/kotlin-logo.jpeg';
import swiftLogo from '@/assets/logos/technologies/swift-logo.jpeg';
import nativeLogo from '@/assets/logos/technologies/native-logo.jpeg';
import flutterLogo from '@/assets/logos/technologies/flutter-logo.jpeg';
import xamarinLogo from '@/assets/logos/technologies/xamarin-logo.png';
import ionicLogo from '@/assets/logos/technologies/Ionic-logo.jpeg';

// mobileApps
import firebaseLogo from '@/assets/logos/technologies/firebase-logo.png';
import awsAmpLogo from '@/assets/logos/technologies/awsAmplify-logo.jpeg';
import backendlessLogo from '@/assets/logos/technologies/backendless-logo.png';
import graphqlLogo from '@/assets/logos/technologies/graphql-logo.png';
import apolloLogo from '@/assets/logos/technologies/apollo-logo.png';
import relayLogo from '@/assets/logos/technologies/relay-logo.webp';

// mobileTesting
import appiumLogo from '@/assets/logos/technologies/appium-logo.jpeg';
import espressoLogo from '@/assets/logos/technologies/espresso-logo.png';
import xcTestLogo from '@/assets/logos/technologies/XCTest-logo.jpeg';
import testLogo from '@/assets/logos/technologies/testFlight-logo.png';


const AppDevelopment = () => {

  const nativeDevelopment = [
    javaLogo,
    kotlinLogo,
    swiftLogo,
    nativeLogo,
    flutterLogo,
    xamarinLogo,
    ionicLogo,
  ];

  const mobileApps = [
    firebaseLogo,
    awsAmpLogo,
    backendlessLogo,
    graphqlLogo,
    apolloLogo,
    relayLogo,
  ];

  const mobileTesting = [
    appiumLogo,
    espressoLogo,
    xcTestLogo,
    testLogo,
  ];


  return (
    <div className="relative text-left p-4 space-y-8">

      <div>
        <h3 className="text-lg mb-4">Native & Cross-Platform Mobile Development:</h3>
        <SolutionLogosGrid logos={nativeDevelopment} />
      </div>

      <div>
        <h3 className="text-lg mb-4">Backend for Mobile Apps:</h3>
        <SolutionLogosGrid logos={mobileApps} />
      </div>

      <div>
        <h3 className="text-lg mb-4">Mobile Testing:</h3>
        <SolutionLogosGrid logos={mobileTesting} />
      </div>


    </div>
  );
};


export default AppDevelopment