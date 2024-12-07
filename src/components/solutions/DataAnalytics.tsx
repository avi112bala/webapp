import React from 'react';
import SolutionLogosGrid from './SolutionLogosGrid';

// dataWarehousing
import hadoopLogo from '@/assets/logos/technologies/apacheHadoop-logo.jpeg';
import sparkLogo from '@/assets/logos/technologies/apacheSpark-logo.jpeg';
import flinkLogo from '@/assets/logos/technologies/apache_flink-logo.webp';
import talendLogo from '@/assets/logos/technologies/talend-logo.jpeg';
import infoLogo from '@/assets/logos/technologies/Informatica-logo.jpeg';
import pentahoLogo from '@/assets/logos/technologies/pentaho-logo.png';

// Data Warehousing
import redshiftLogo from '@/assets/logos/technologies/amazonRedShift-logo.jpeg';
import bigqueryLogo from '@/assets/logos/technologies/google-bigquery-logo.png';
import snowLogo from '@/assets/logos/technologies/snowflake-logo.png';
import synapseLogo from '@/assets/logos/technologies/synapse-logo.jpeg';
import teradataLogo from '@/assets/logos/technologies/teradata-logo.jpeg';

// dataVisualization
import quickLogo from '@/assets/logos/technologies/amazon-quicksight.-logo.png';
import tableauLogo from '@/assets/logos/technologies/tableau-logo.jpeg';
import powerLogo from '@/assets/logos/technologies/power-bi-logo.png';
import lookerLogo from '@/assets/logos/technologies/looker-logo.jpeg';
import d3Logo from '@/assets/logos/technologies/D3-logo.png';
import gdsLogo from '@/assets/logos/technologies/GDS-logo.jpeg';


const DataAnalytics = () => {

  const dataProcessing = [
    hadoopLogo,
    sparkLogo,
    flinkLogo,
    talendLogo,
    infoLogo,
    pentahoLogo,
  ];

  const dataWarehousing = [
    redshiftLogo,
    bigqueryLogo,
    snowLogo,
    synapseLogo,
    teradataLogo,
  ];

  const dataVisualization = [
    quickLogo,
    tableauLogo,
    powerLogo,
    lookerLogo,
    d3Logo,
    gdsLogo,
  ];

  return (
    <div className="relative text-left p-4 space-y-8">

      <div>
        <h3 className="text-lg mb-4">Data Processing & ETL: </h3>
        <SolutionLogosGrid logos={dataProcessing} />
      </div>

      <div>
        <h3 className="text-lg mb-4">Data Warehousing:</h3>
        <SolutionLogosGrid logos={dataWarehousing} />
      </div>

      <div>
        <h3 className="text-lg mb-4">Data Visualization:</h3>
        <SolutionLogosGrid logos={dataVisualization} />
      </div>

      {/* <div className="my-8">
        <h3 className="text-lg mb-4">Databases for Analytics:</h3>
        <SolutionLogosGrid logos={versionConLogos} />
      </div>

      <div className="my-8">
        <h3 className="text-lg mb-4">Big Data Analytics: </h3>
        <SolutionLogosGrid logos={versionConLogos} />
      </div> */}

    </div>
  );
};


export default DataAnalytics