"use client"
import { useState } from 'react';
import SoftwareDevelopment from './SoftwareDevelopment';
import WebDevelopment from './WebDevelopment';
import AppDevelopment from './AppDevelopment';
import UiUxDesign from './UiUxDesign';
import DatabaseStorage from './DatabaseStorage';
import CloudAIML from './CloudAIML';
import DataAnalytics from './DataAnalytics';
import { ChevronDown, ChevronUp } from 'lucide-react';


const TechnologiesTabs = () => {

  const servicesTabsName1 = [
    { name: 'Web Development', component: <WebDevelopment /> },
    { name: 'App Development', component: <AppDevelopment /> },
    { name: 'Software Development', component: <SoftwareDevelopment /> },
  ];
  const servicesTabsName2 = [
    { name: ' UI/UX Design', component: <UiUxDesign /> },
    { name: 'Database / Storage', component: <DatabaseStorage /> },
    { name: 'Cloud, AI & ML', component: <CloudAIML /> },
    { name: 'Data Analytics', component: <DataAnalytics /> },
  ];

  const servicesTabsAllName = [...servicesTabsName1, ...servicesTabsName2]

  const [expandedService, setExpandedService] = useState<string | null>(servicesTabsAllName[0].name);

  const toggleService = (service: string) => {
    setExpandedService((prev) => (prev === service ? null : service));
  };

  return (
    <div id='technologies' className="bg-[#EDF8FF]">
      <div className="max-w-screen-xl mx-auto px-4 py-20 text-[#005281] font-medium">

        {/* Mobile: Accordion Layout */}
        <div className="flex flex-col gap-y-4 md:hidden">
        <h2 className="md:text-xl font-Orbit text-center text-[#0A377D] mb-5">Supercharge Your Online Presence With Tecorbitron</h2>
          {servicesTabsAllName.map((service) => (
            <div key={service.name} className="border rounded-lg overflow-hidden">
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-left text-lg md:font-semibold bg-blue-100 hover:bg-blue-200 focus:outline-none"
                onClick={() => toggleService(service.name)}
              >
                {service.name}
                {expandedService === service.name? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedService === service.name && (
                <div className=" bg-white text-gray-700">
                  {servicesTabsAllName.find((service) => service.name === expandedService)?.component}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Layout */}
        <div className="hidden md:block">
          <h2 className="md:text-2xl font-Orbit text-center text-[#0A377D]">Supercharge Your Online Presence With Tecorbitron</h2>

          <div className="flex">

            {/* left side tech  */}
            <div className="w-1/2 flex flex-col gap-y-8 p-4 pt-14">
              {servicesTabsName1.map((service) => (
                <div
                  key={service.name}
                  className="w-full px-4 py-2 rounded-lg bg-white h-fit">
                  {service.component}
                </div>
              ))}
            </div>
            {/* Right side tech  */}
            <div className="w-1/2 flex flex-col gap-y-8 p-4 pt-14">
              {servicesTabsName2.map((service) => (
                <div
                  key={service.name}
                  className="w-full px-4 py-2 rounded-lg bg-white h-fit">
                  {service.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesTabs;
