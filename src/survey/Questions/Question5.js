import React from 'react';
import TextAreaQuestion from '../../components/TextAreaQuestion'; 

const Question5 = ({ stepNumber, nextStep, previousStep, handleChange }) => {
  return (
    <TextAreaQuestion
      questionText={`${stepNumber}. What are the most difficult sidewalk barriers that you think people with disabilities encounter in your community?`}
      inputId="sidewalkBarriers"
      placeholderText="For example, missing curb ramps, uneven sidewalks, narrow sidewalks, poles..."
      handleChange={handleChange}
      previousStep={previousStep}
      nextStep={nextStep}
    />
  );
};

export default Question5;

