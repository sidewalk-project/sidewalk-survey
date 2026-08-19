import React, { useState, useEffect } from 'react';
import CheckboxQuestion from '../../components/CheckboxQuestion';

const questionOptions = [
  { value: "ADA coordinator", label: "ADA coordinator" },
  { value: "Urban planner/transportation planner", label: "Urban planner/transportation planner" },
  { value: "Public works", label: "Public works" },
  { value: "Engineering/architecture", label: "Engineering/architecture" },
  { value: "Other", label: "Other" },
];

const Question3 = ({ previousStep, nextStep, updateAnswers, stepNumber, setSingleMobilityAid, errors }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customValue, setCustomValue] = useState('');

  const handleChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prevSelectedOptions) => {
      if (checked) {
        return [...prevSelectedOptions, value];
      } else {
        return prevSelectedOptions.filter((option) => option !== value);
      }
    });
  };

  const handleCustomChange = (event) => {
    setCustomValue(event.target.value);
  };

  const handleNextStep = () => {
    const orderedSelectedOptions = questionOptions
      .map((option) => option.value)
      .filter((option) => selectedOptions.includes(option))
      .map((option) => (option === "Other" ? customValue : option));

    updateAnswers('mobilityAidOptions', { mobilityAidOptions: orderedSelectedOptions });
    updateAnswers('professionalRole', orderedSelectedOptions);

    updateAnswers('mobilityAid', orderedSelectedOptions[0]);

    if (orderedSelectedOptions.length === 1) {
      setSingleMobilityAid(true);
    }

    setNextStepReady(true);
  };

  const [nextStepReady, setNextStepReady] = useState(false);

  useEffect(() => {
    setSingleMobilityAid(false);
  }, []);

  useEffect(() => {
    if (nextStepReady) {
      nextStep();
    }
  }, [nextStepReady]);

  return (
    <CheckboxQuestion
      questionText={`${stepNumber}. Which of the following best describes your role?*`}
      options={questionOptions}
      selectedOptions={selectedOptions}
      handleChange={handleChange}
      customValue={customValue}
      handleCustomChange={handleCustomChange}
      previousStep={previousStep}
      nextStep={handleNextStep}
      error={errors.mobilityAidOptions}
    />
  );
};

export default Question3;
