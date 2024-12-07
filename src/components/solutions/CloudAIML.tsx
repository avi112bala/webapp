import React from 'react';
import SolutionLogosGrid from './SolutionLogosGrid';

// Cloud Platforms: 
import awsLogo from '@/assets/logos/technologies/AWS-logo.jpeg'
import microLogo from '@/assets/logos/technologies/microsoftAzure-logo.jpeg'
import cloudLogo from '@/assets/logos/technologies/google-cloud-logo.png'
import ec2Logo from '@/assets/logos/technologies/awsEc2-logo.jpeg'
import sqsLogo from '@/assets/logos/technologies/sqs-logo.png'
import snsLogo from '@/assets/logos/technologies/sns-logo.jpeg'
import anthosLogo from '@/assets/logos/technologies/anthos-logo.jpeg'
import arcLogo from '@/assets/logos/technologies/azureARC-logo.jpeg'

// Containerization
import kuberLogo from '@/assets/logos/technologies/kubernetes-logo.png'
import dockerLogo from '@/assets/logos/technologies/docker-logo.png'
import ecsLogo from '@/assets/logos/technologies/EcsEks-logo.jpeg'
import azureLogo from '@/assets/logos/technologies/azure-kuber-logo.jpeg'

// Databases
import s3Logo from '@/assets/logos/technologies/awsS3-logo.png'
import blobLogo from '@/assets/logos/technologies/azureBlob-logo.png'
import googlecloudLogo from '@/assets/logos/technologies/google-cloud-logo.png'
import rdsLogo from '@/assets/logos/technologies/awsRDS-logo.png'
import firestoreLogo from '@/assets/logos/technologies/cloud-firestore-logo.png'
import dydbLogo from '@/assets/logos/technologies/aws-dynamodb-logo.png'

const CloudAIML = () => {
  
  const cloudPlatforms = [
    awsLogo,
    microLogo,
    cloudLogo,
    ec2Logo,
    sqsLogo,
    snsLogo,
    anthosLogo,
    arcLogo,
  ];

  const containerization = [
    kuberLogo,
    dockerLogo,
    ecsLogo,
    azureLogo,
  ];

  const databases = [
    s3Logo,
    blobLogo,
    googlecloudLogo,
    rdsLogo,
    firestoreLogo,
    dydbLogo,
  ];

  return (
    <div className="relative text-left p-4 space-y-8">

      <div>
        <h3 className="text-lg mb-4">Cloud Platforms: </h3>
        <SolutionLogosGrid logos={cloudPlatforms} />
      </div>

      <div>
        <h3 className="text-lg mb-4">Containerization & Orchestration:</h3>
        <SolutionLogosGrid logos={containerization} />
      </div>

      <div>
        <h3 className="text-lg mb-4">Cloud Storage & Databases: </h3>
        <SolutionLogosGrid logos={databases} />
      </div>
      {/* 
      <div className="my-8">
        <h3 className="text-lg mb-4">Serverless:  </h3>
        <SolutionLogosGrid logos={versionConLogos} />
      </div> */}

      {/* <div className="my-8">
        <h3 className="text-lg mb-4">Languages for AI, Models & Framework </h3>
        <SolutionLogosGrid logos={versionConLogos} />
      </div>

      <div className="my-8">
        <h3 className="text-lg mb-4">NLP (Natural Language Processing):</h3>
        <SolutionLogosGrid logos={versionConLogos} />
      </div>

      <div className="my-8">
        <h3 className="text-lg mb-4">AI Platforms:</h3>
        <SolutionLogosGrid logos={versionConLogos} />
      </div> */}

    </div>
  );
};


export default CloudAIML