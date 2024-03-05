import Accordion from 'components/Accordion/Accordion';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import ValadationInProgress from 'components/ValadationInProgress/ValadationInProgress';
import React, { useState } from 'react';

const ValadationRequest = ({ onClick }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null); // Close the currently open accordion
    } else {
      setOpenAccordion(index); // Open the clicked accordion and close others
    }
  };
  return (
    <div className="my-10">
      <Accordion
        title="What is Next.js?"
        isOpen={openAccordion === 1}
        onClick={() => handleAccordionClick(1)}
      >
        <div className="w-[240px]" onClick={onClick}>
          <ProfileCard btnText={''} />
        </div>
      </Accordion>
      <Accordion
        title="How to use Tailwind CSS with Next.js?"
        isOpen={openAccordion === 2}
        onClick={() => handleAccordionClick(2)}
      >
        To start using Tailwind CSS in Next.js, you need to install tailwindcss via npm, set up your
        configuration file, and then use the utility classes in your components.
      </Accordion>
      {/* Add more accordions as needed, each with a unique index */}
    </div>
  );
};

export default ValadationRequest;
