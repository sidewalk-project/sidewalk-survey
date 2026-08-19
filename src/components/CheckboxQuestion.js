import React, { useCallback, useEffect, useState } from 'react';
import { Button, Checkbox, Input } from '@material-tailwind/react';
import { Warning } from 'phosphor-react';
import PageNavigations from './PageNavigations';

const CheckboxQuestion = ({
  questionText,
  instructionText,
  options,
  selectedOptions,
  handleChange,
  customValue,
  handleCustomChange,
  customOptionValue = "Other",
  previousStep,
  nextStep,
  error
}) => {
  const [localError, setLocalError] = useState('');

  const handleNextStep = useCallback(() => {
    if (selectedOptions.length === 0) {
      setLocalError('Please select at least one option.');
    } else if (selectedOptions.includes(customOptionValue) && !customValue.trim()) {
      setLocalError('Please specify the option.');
    } else {
      setLocalError('');
      nextStep();
    }
  }, [customOptionValue, customValue, nextStep, selectedOptions]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleNextStep();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleNextStep]);

  return (
    <div className="question-container">
      <div className="question-content">
        <h2
        tabIndex="0"
        aria-live="assertive"
        >{questionText}</h2>
        <p style={{ fontSize: '0.8em', textAlign: 'left', marginBottom: '0.4em' }}>{instructionText}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4em', fontSize: '0.8em', textAlign: 'left' }} className="text-base">
          {options.map((option, index) => (
            <div key={index}>
              <Checkbox
                color='teal'
                name={option.value}
                value={option.value}
                label={option.label}
                onChange={handleChange}
              />
            </div>
          ))}
          {selectedOptions.includes(customOptionValue) && (
            <Input
              variant="static"
              type="text"
              color="teal"
              placeholder="Please specify"
              value={customValue}
              onChange={handleCustomChange}
            />
          )}
        </div>
        {(error || localError) && (
          <div className="flex items-center mt-2 text-red-700 bg-red-50 p-2 rounded max-w-max">
            <Warning size={'1.2em'} weight="fill" className="mr-2" />
            <p className="text-w">{error || localError}</p>
          </div>
        )}
         <div className="question-button-group items-center">
            <Button size='lg' className="lg-font-size-button" color="teal" onClick={handleNextStep}>OK</Button>
            <span className="text-w text-teal-700" >press Enter ↵</span>
          </div>
      </div>
      <PageNavigations onPrevious={previousStep} onNext={handleNextStep} />
    </div>
  );
};

export default CheckboxQuestion;
