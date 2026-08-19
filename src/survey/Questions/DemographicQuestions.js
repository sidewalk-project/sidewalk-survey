import React, { useState } from 'react';

const DemographicQuestions = ({ stepNumber, previousStep, nextStep, updateAnswers }) => {
  const [page, setPage] = useState(1);

  const [responses, setResponses] = useState({
    yearsInRole: '',
    familiarityWithMobilityNeeds: '',
    ageGroup: '',
    state: '',
    mobilityDisability: '',
    gender: '',
    genderOther: '',
  });

  const handleChange = (key, value) => {
    setResponses(prev => ({ ...prev, [key]: value }));
  };

  const saveResponses = () => {
    Object.entries(responses).forEach(([key, value]) => {
      updateAnswers(key, value);
    });
  };

  const handleNextPage = (event) => {
    event.preventDefault();
    saveResponses();

    if (page < 3) {
      setPage(prevPage => prevPage + 1);
    } else {
      nextStep();
    }
  };

  const handleBack = (event) => {
    event.preventDefault();

    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    } else {
      previousStep();
    }
  };

  const RadioGroup = ({ title, name, options }) => (
    <div className="mb-8">
      <p className="text-xl font-semibold mb-4 text-left">{title}</p>

      <div className="flex flex-col gap-3">
        {options.map(option => (
          <label key={option} className="flex items-center gap-3 text-lg text-left">
            <input
              type="radio"
              name={name}
              value={option}
              checked={responses[name] === option}
              onChange={(e) => handleChange(name, e.target.value)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="max-w-4xl mx-auto p-8 text-left"
      style={{
        textAlign: 'left',
        fontSize: '0.9em',
        lineHeight: '1.4',
        maxWidth: '60vw',
      }}
    >
      <h2 className="text-2xl font-bold mb-8" tabIndex={0}>
        {stepNumber}. Demographic Questions
      </h2>

      {page === 1 && (
        <>
          <RadioGroup
            title="How many years have you worked in this role?"
            name="yearsInRole"
            options={['1–5 years', '6–14 years', '15+ years']}
          />

          <RadioGroup
            title="How familiar are you with the needs of people with mobility disabilities in using the pedestrian infrastructure?"
            name="familiarityWithMobilityNeeds"
            options={[
              'Not at all familiar',
              'Vaguely familiar',
              'Somewhat familiar',
              'Familiar',
              'Very familiar',
            ]}
          />
        </>
      )}

      {page === 2 && (
        <>
          <RadioGroup
            title="What age group are you in?"
            name="ageGroup"
            options={[
              '18–34',
              '35–44',
              '45–64',
              '65 and up',
              'I prefer not to answer',
            ]}
          />

          <div className="mb-8">
            <label className="text-xl font-semibold block mb-4 text-left">
              What state do you live in?
            </label>
            <input
              className="border rounded p-3 w-full text-lg"
              type="text"
              value={responses.state}
              placeholder="Enter your state"
              onChange={(e) => handleChange('state', e.target.value)}
            />
          </div>
        </>
      )}

      {page === 3 && (
        <>
          <RadioGroup
            title="Do you identify as having a mobility disability?"
            name="mobilityDisability"
            options={['Yes', 'No', 'I prefer not to answer']}
          />

          <RadioGroup
            title="What is your current gender?"
            name="gender"
            options={['Man', 'Woman', 'Non-binary', 'I use a different term']}
          />

          {responses.gender === 'I use a different term' && (
            <div className="mb-8">
              <input
                className="border rounded p-3 w-full text-lg"
                type="text"
                value={responses.genderOther}
                placeholder="Please specify"
                onChange={(e) => handleChange('genderOther', e.target.value)}
              />
            </div>
          )}
        </>
      )}

      <div className="flex justify-between items-center mt-10">
        <button
          type="button"
          className="border border-teal-600 text-teal-700 px-6 py-3 rounded font-bold"
          onClick={handleBack}
        >
          GO BACK
        </button>

        <button
          type="button"
          className="bg-teal-600 text-white px-8 py-3 rounded font-bold"
          onClick={handleNextPage}
        >
          {page < 3 ? 'NEXT' : 'OK'}
        </button>
      </div>
    </div>
  );
};

export default DemographicQuestions;
