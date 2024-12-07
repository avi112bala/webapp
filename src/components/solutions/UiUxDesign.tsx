import React from 'react';
import SolutionLogosGrid from './SolutionLogosGrid';

// Graphic Tools: 
import figmaLogo from '@/assets/logos/technologies/figma-logo.png';
import adobeXDLogo from '@/assets/logos/technologies/adobeXD-logo.png';
import sketchLogo from '@/assets/logos/technologies/sketch-logo-png.png';
import inVisionLogo from '@/assets/logos/technologies/inVision-logo.jpeg';
import marvelLogo from '@/assets/logos/technologies/marvel-png-logo.png';
import adobeIlluLogo from '@/assets/logos/technologies/adobe-illustrator-logo.png';
import affinityLogo from '@/assets/logos/technologies/affinity-designer-logo.webp';
import adobePhotoLogo from '@/assets/logos/technologies/adobePhotoshop-logo.jpeg';

// componentLibraries
import balsamiqLogo from '@/assets/logos/technologies/balsamiq-logo.jpeg';
import axureLogo from '@/assets/logos/technologies/axure-rp-logo.png';
import lucidechartLogo from '@/assets/logos/technologies/lucidchart-logo.jpeg';
import materialLogo from '@/assets/logos/technologies/material-ui-logo.png';
import antdesignLogo from '@/assets/logos/technologies/ant-design-logo.png';
import bootstrapLogo from '@/assets/logos/technologies/bootstrap-logo.png';

const UiUxDesign = () => {

  const graphicTools = [
    figmaLogo,
    adobeXDLogo,
    sketchLogo,
    inVisionLogo,
    marvelLogo,
    adobeIlluLogo,
    affinityLogo,
    adobePhotoLogo,
  ];

  const componentLibraries = [
    balsamiqLogo,
    axureLogo,
    lucidechartLogo,
    materialLogo,
    antdesignLogo,
    bootstrapLogo,
  ];



  return (
    <div className="relative text-left p-4 space-y-8">

      <div >
        <h3 className="text-lg mb-4">Design, Prototyping & Graphic Tools:</h3>
        <SolutionLogosGrid logos={graphicTools} />
      </div>

      <div >
        <h3 className="text-lg mb-4">Wireframing, Mockup Tools & UI Component Libraries :</h3>
        <SolutionLogosGrid logos={componentLibraries} />
      </div>

    </div>
  );
};

export default UiUxDesign