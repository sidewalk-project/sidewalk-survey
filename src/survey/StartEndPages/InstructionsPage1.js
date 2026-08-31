import React, {useEffect } from 'react';
import ResponseButtons from '../../components/ResponseButtons';
import PageNavigations from "../../components/PageNavigations";

const InstructionsPage1 = ({ nextStep, previousStep, answers }) => {

  const handleResponse = (response) => {
    nextStep();
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
        if (event.key === 'n') {
            handleResponse('no');
        } else if (event.key === 'u') {
            handleResponse('unsure');
        } else if (event.key === 'y') {
            handleResponse('yes');
        }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
        document.removeEventListener('keydown', handleKeyPress);
    };
}, []);

  const mobilityAid = answers.mobilityAid.toLowerCase();

  return (
    <div className="mx-auto text-left flex flex-col items-center"
    style={{fontSize: '1em', lineHeight: '1.3',  maxWidth: '60vw', marginTop: '1.2vw', maxHeight: '80vh' }}
    >
      <div className="flex flex-col items-start"
      style={{ textAlign: 'left', fontSize: '0.7em', lineHeight: '1.3',  maxWidth: '60vw' }}
      > 
      <p tabIndex={0} className="mb-4">
      <b>Evaluation of barriers for priority accessibility improvement.</b>
      </p>

      <p tabIndex={0} className="mb-4">
      In this section, we will show you images of potential sidewalk barriers.
      We will ask your perceptions of whether the barriers are a priority for improving accessibility.
      </p>

      <p tabIndex={0} className="mb-4">
      There are no right or wrong answers—we are interested in your personal perceptions and experiences.
      </p>

      <p tabIndex={0} className="mb-4">
      Please focus on the red dot when evaluating images in this survey.
      </p>

      <p tabIndex={0} className="mb-4">
      As you evaluate each image, you might consider different ways people with mobility disabilities may maneuver around a barrier.
      You should also try to consider people who use different types of mobility aids.
      </p>

      <p tabIndex={0} className="mb-4">
      <b>Is the barrier in this image a priority to address for improving accessibility?</b>
      </p>
      </div>
      <div className="mb-4 flex flex-col items-center">
      <div className="flex m-8 overflow-hidden" style={{ height: '40vh', borderRadius:'0.5em' }}>
        <img src={`${process.env.PUBLIC_URL}/img/example-barrier.png`} alt="Example Barrier" />
      </div>
      <ResponseButtons
                        gap="12px"
                        buttons={[
                            { text: 'No', shortcut: 'N', onClick: () => handleResponse('no') },
                            { text: 'Unsure', shortcut: 'U', onClick: () => handleResponse('unsure'), variant: 'outlined' },
                            { text: 'Yes', shortcut: 'Y', onClick: () => handleResponse('yes') }
                        ]}
                    />
    </div>
    <PageNavigations onPrevious={previousStep} onNext={nextStep} /> 
    </div>
  );
};

export default InstructionsPage1;
