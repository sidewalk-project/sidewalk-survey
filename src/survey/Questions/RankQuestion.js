import React, { useState, useEffect } from 'react';
import DraggableQuestion from '../../components/DraggableQuestion';

const rankOptions = [
    { id: '1', value: "Missing curb ramp at intersections", image: `${process.env.PUBLIC_URL}/crops/gsv-seattle-175408-2-4.png` },
    { id: '2', value: "Uneven sidewalk panels", image: `${process.env.PUBLIC_URL}/crops/gsv-st_louis-5941-4-5.png` },
    { id: '3', value: "Steep slope (sidewalk incline greater than 5%)", image: `${process.env.PUBLIC_URL}/crops/gsv-lapiedad-997-3-0.png` },
    { id: '4', value: "Sand or gravel surface", image: `${process.env.PUBLIC_URL}/crops/gsv-seattle-273517-4-1.png` },
    { id: '5', value: "Narrow sidewalk (width less than 1.2m / 4 ft)", image: `${process.env.PUBLIC_URL}/crops/gsv-oradell-5518-4-3.png` },
    { id: '6', value: "Brick or cobblestone surface", image: `${process.env.PUBLIC_URL}/crops/gsv-columbus-39006-4-1.png` },
    { id: '7', value: "Broken surface or cracks on sidewalk", image: `${process.env.PUBLIC_URL}/crops/gsv-seattle-209069-4-2.png` },
    { id: '8', value: "Manholes on sidewalk", image: `${process.env.PUBLIC_URL}/crops/gsv-chicago-39245-4-0.png` },
    { id: '9', value: "Grass surface", image: `${process.env.PUBLIC_URL}/crops/gsv-chicago-631-4-3.png` },
  ];

const RankQuestion = ({ stepNumber, nextStep, previousStep, updateAnswers, errors}) => {
    const [rankedOptions, setRankedOptions] = useState(rankOptions);
    const [hasDragged, setHasDragged] = useState(false);
  
    useEffect(() => {
      setRankedOptions(rankOptions);
      updateAnswers('hasDragged', false); 
    }, []);
  
    const handleRankingChange = (newItems) => {
      setRankedOptions(newItems);
      setHasDragged(true);
      updateAnswers('hasDragged', true);
    };
  
    const handleNextStep = () => {
      const orderedOptions = rankedOptions.map(option => option.value);
      updateAnswers('rankedOptions', { rankedOptions: orderedOptions });
      nextStep();
    };

    useEffect(() => {
      // console.log('Errors in RankQuestion:', errors);
    }, [errors]);
    
    return (
      <DraggableQuestion
        questionText={<span>{stepNumber}. Please rank the following barriers based on how much of a priority they are for improvements for people with mobility disabilities, with 1 being the highest priority and {rankedOptions.length} being the lowest.*</span>}
        inputId="rankedOptions" 
        instructionText="Drag and drop the options to rank them. You may click on the image icon to see an example."
        options={rankedOptions}
        handleChange={handleRankingChange}
        previousStep={previousStep}
        nextStep={handleNextStep}
        error={errors.hasDragged} 
        lowLabel="Low"
        highLabel="High"
      />
    );
  };
  
  export default RankQuestion;
