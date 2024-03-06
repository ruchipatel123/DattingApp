import Accordion from 'components/Accordion/Accordion';
import ProfileCard from 'components/ProfileCard/ProfileCard';
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
      <h2 className="mb-5 font-raleway text-md font-medium tracking-wide text-blue">
        Valadation Requests
      </h2>
      <Accordion
        title="John Doe"
        isOpen={openAccordion === 1}
        onClick={() => handleAccordionClick(1)}
      >
        <p className="mb-1 text-md font-light">Hey! What do you think?</p>
        <div className="-mx-5 w-[240px]" onClick={onClick}>
          <ProfileCard btnText={''} />
        </div>
      </Accordion>
      <Accordion
        title="Adam Smith"
        isOpen={openAccordion === 2}
        onClick={() => handleAccordionClick(2)}
      >
        <p className="mb-1 text-md font-light">Hey! What do you think?</p>
        <div className="-mx-5 w-[240px]" onClick={onClick}>
          <ProfileCard btnText={''} />
        </div>
      </Accordion>
      {/* Add more accordions as needed, each with a unique index */}
    </div>
  );
};

export default ValadationRequest;
