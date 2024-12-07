import React from 'react';
import SolutionLogosGrid from './SolutionLogosGrid';


// frontendlogoos 
import htmlLogo from '@/assets/logos/technologies/html-5.png';
import cssLogo from '@/assets/logos/technologies/css-3.png';
import jsLogo from '@/assets/logos/technologies/js.png';
import reactLogo from '@/assets/logos/technologies/react.png';
import nextLogo from '@/assets/logos/technologies/nextjs.svg';
import VueLogo from '@/assets/logos/technologies/Vue.png';
import AngularLogo from '@/assets/logos/technologies/angular.png';
import BootstrapLogo from '@/assets/logos/technologies/bootstrap.png';
import TailwindLogo from '@/assets/logos/technologies/tailwind-css.png';
import webflowLogo from '@/assets/logos/technologies/webflow.png';
import wixLogo from '@/assets/logos/technologies/icons8-wix-64.png';

// backendlogos
import nodeLogo from '@/assets/logos/technologies/nodejs.png';
import expressLogo from '@/assets/logos/technologies/icons8-express-js-50.png';
import laravelLogo from '@/assets/logos/technologies/icons8-laravel-64.png';
import springLogo from '@/assets/logos/technologies/icons8-spring-boot-50.png';
import djangoLogo from '@/assets/logos/technologies/icons8-django-50.png';
import flaskLogo from '@/assets/logos/technologies/icons8-flask-50.png';
import rubyLogo from '@/assets/logos/technologies/icons8-ruby-on-rails-64.png';
import aspLogo from '@/assets/logos/technologies/ASP.NET_.png';

// Version C logos
import gitLogo from '@/assets/logos/technologies/git-logo-png.png';
import gitHUbLogo from '@/assets/logos/technologies/github_PNG84.png';
import gitlabLogo from '@/assets/logos/technologies/gitlab-logo.png';
import bitLogo from '@/assets/logos/technologies/bitBucket-logo.jpeg';
import jenLogo from '@/assets/logos/technologies/jenkins-logo.webp';




const WebDevelopment = () => {
  const frontEndLogos = [
    htmlLogo,
    cssLogo,
    jsLogo,
    reactLogo,
    nextLogo,
    VueLogo,
    AngularLogo,
    BootstrapLogo,
    TailwindLogo,
    webflowLogo,
    wixLogo,
  ];

  const backEndLogos = [
    nodeLogo,
    expressLogo,
    laravelLogo,
    springLogo,
    djangoLogo,
    flaskLogo,
    rubyLogo,
    aspLogo,
  ];

  const versionConLogos = [
    gitLogo,
    gitHUbLogo,
    gitlabLogo,
    bitLogo,
    jenLogo,
  ];

  return (
    <div className="relative text-left p-4 space-y-8">

      <div>
        <h3 className="text-lg mb-4">Frontend & Framework:</h3>
        <SolutionLogosGrid logos={frontEndLogos} />
      </div>

      <div>
        <h3 className="text-lg mb-4">Backend & Libraries:</h3>
        <SolutionLogosGrid logos={backEndLogos} />
      </div>

      <div>
        <h3 className="text-lg mb-4">Version Control & CI/CD:</h3>
        <SolutionLogosGrid logos={versionConLogos} />
      </div>

    </div>
  );
};

export default WebDevelopment;
