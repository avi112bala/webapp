import React from 'react';
import SolutionLogosGrid from './SolutionLogosGrid';

// sqlsLogos
import mysqlLogo from '@/assets/logos/technologies/mySQL-logo.png';
import postgreLogo from '@/assets/logos/technologies/postgreSQL-logo.jpeg';
import sqlserverLogo from '@/assets/logos/technologies/sqlServer-logo.png';
import mongoLogo from '@/assets/logos/technologies/mongo-logo.jpeg';
import firebaseLogo from '@/assets/logos/technologies/firebase-logo.png';
import sqlliteLogo from '@/assets/logos/technologies/SQLite-logo.png';

// Data Warehousing
import redshiftLogo from '@/assets/logos/technologies/amazonRedShift-logo.jpeg';
import snowlakeLogo from '@/assets/logos/technologies/snowflake-logo.png';
import bigqueryLogo from '@/assets/logos/technologies/google-bigquery-logo.png';
import awslakeLogo from '@/assets/logos/technologies/awslakeformation-logo.png';
import azureLogo from '@/assets/logos/technologies/azure-datalake-logo.png';

// Real-Time Streaming 
import awsKinLogo from '@/assets/logos/technologies/awsKinesis-logo.png';
import kafkaLogo from '@/assets/logos/technologies/kafka-logo.jpeg';
import pubsubLogo from '@/assets/logos/technologies/pubsub-logo.jpeg';



const DatabaseStorage = () => {

  const sqlsLogos = [
    mysqlLogo,
    postgreLogo,
    sqlserverLogo,
    mongoLogo,
    firebaseLogo,
    sqlliteLogo,
  ];

  const dataWarehousing = [
    redshiftLogo,
    snowlakeLogo,
    bigqueryLogo,
    awslakeLogo,
    azureLogo,
  ];

  const Streaming = [
    awsKinLogo,
    kafkaLogo,
    pubsubLogo,
  ];


  return (
    <div className="relative text-left p-4 space-y-8">

      <div>
        <h3 className="text-lg mb-4">Relational & NoSQL</h3>
        <SolutionLogosGrid logos={sqlsLogos} />
      </div>

      <div>
        <h3 className="text-lg mb-4">Data Warehousing & Lakes</h3>
        <SolutionLogosGrid logos={dataWarehousing} />
      </div>

      <div>
        <h3 className="text-lg mb-4">Real-Time Streaming</h3>
        <SolutionLogosGrid logos={Streaming} />
      </div>

    </div>
  );
};


export default DatabaseStorage