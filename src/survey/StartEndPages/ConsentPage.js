import React, { useCallback, useEffect, useState } from 'react';
import { Button, Checkbox } from "@material-tailwind/react";
import { Warning } from 'phosphor-react';
import './ConsentPage.css';

const ConsentPage = ({ nextStep }) => {
  const [consented, setConsented] = useState(false);
  const [error, setError] = useState('');

  const handleNextStep = useCallback(() => {
    if (!consented) {
      setError('Please check the box to indicate your consent before continuing.');
      return;
    }
    setError('');
    nextStep();
  }, [consented, nextStep]);

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
    <div className="consent-page max-w-6xl mx-auto p-8 text-left"
      style={{ textAlign: 'left', marginBottom: '1.2vw', fontSize: '0.75em', lineHeight: '1.3' }}
    >
      <h1
        aria-live="assertive"
        tabIndex={0}
        style={{ textAlign: 'left', marginBottom: '0.3em', fontSize: '1.7em', fontWeight: '700' }}>
        Consent to Take Part in This Research
      </h1>
      <p className="mb-3" tabIndex={0} style={{ fontSize: '0.95em', color: '#555' }}>
        University of Illinois Chicago (UIC) &mdash; Research Information Sheet
      </p>
      <hr style={{ border: 'none', borderTop: '2px solid #0f766e', marginBottom: '1.2em' }} />

      <div tabIndex={0} style={{ marginBottom: '1em', color: '#555', fontSize: '0.9em' }}>
        <p className="mb-1"><b>Research Study Title:</b> Crowd+AI Tools to Map, Analyze, and Visualize Sidewalk Accessibility for Inclusive Cities</p>
        <p className="mb-1"><b>Study ID #:</b> 2021-1356</p>
        <p className="mb-1"><b>Principal Investigator:</b> Yochai Eisenberg, Department of Disability and Human Development</p>
        <p className="mb-1"><b>Co-Principal Investigators:</b> Delphine Labbe and Joy Hammel (Department of Disability and Human Development), Jon Froehlich (University of Washington)</p>
        <p className="mb-1"><b>Sponsor:</b> National Science Foundation</p>
      </div>

      <p className="mb-4" tabIndex={0}>
        You are being asked to participate in a research study. Research studies answer important questions that might help change or improve the way we do things in the future. This consent form will give you information about this research study to help you decide whether you want to participate. Please read this form and ask any questions you have before agreeing to be in this study.
      </p>

      <p className="mb-4" tabIndex={0}>
        <b>Taking part in this study is voluntary.</b> It's up to you if you want to participate in this research. You do not have to take part in this study. You may change your mind and stop your participation at any time.
      </p>

      <p className="mb-1" tabIndex={0}><b>What is this research study about?</b></p>
      <p className="mb-4" tabIndex={0}>
        This study aims to understand the perceptions of sidewalk barriers among municipal professionals. We want to understand how you would rate the priorities for various sidewalk barriers for people with disabilities.
      </p>

      <p className="mb-1" tabIndex={0}><b>Why am I being asked to participate in this study?</b></p>
      <p className="mb-4" tabIndex={0}>
        You are being asked to participate in this research study because you were identified as an individual 18 years of age or older, actively acting as an urban planning professional with experience in urban planning, transportation, public works, or ADA coordination or transition planning.
      </p>

      <p className="mb-1" tabIndex={0}><b>What will I be asked to do during this study?</b></p>
      <p className="mb-2" tabIndex={0}>
        You will be asked to complete a 30-minute digital activity using the Perceptions of Severity survey platform. This interactive tool presents images of sidewalk barriers commonly encountered by people with mobility disabilities. You will be asked to indicate your familiarity with accessibility issues in pedestrian spaces, and evaluate a series of individual images of barriers by rating and ranking their priority for barrier removal. You will also be asked for the following information:
      </p>
      <ul className="mb-4" style={{ listStyleType: 'disc', paddingLeft: '1.5em' }} tabIndex={0}>
        <li>Full name</li>
        <li>Email address</li>
        <li>State</li>
        <li>Professional role (ADA coordinator, planner, public works, engineer/architect)</li>
        <li>Years in the profession</li>
        <li>Familiarity with pedestrian accessibility issues</li>
        <li>Gender</li>
        <li>Age</li>
        <li>Identifies as having a disability</li>
      </ul>

      <p className="mb-1" tabIndex={0}><b>What are the benefits to being in this study?</b></p>
      <p className="mb-4" tabIndex={0}>
        Those who complete the survey and who are verified to provide real responses will be entered into a lottery for a $25 Amazon gift card and there will be 15 awardees.
      </p>

      <p className="mb-1" tabIndex={0}><b>What are the main risks of the study?</b></p>
      <p className="mb-2" tabIndex={0}>
        A risk of this research is a loss of privacy (revealing to others that you are taking part in this study) or confidentiality (revealing information about you to others to whom you have not given permission to see this information).
      </p>
      <p className="mb-4" tabIndex={0}>
        Confidentiality will be maintained to the degree permitted by the technology used. Your participation in this online survey/interview involves risks similar to a person's everyday use of the Internet.
      </p>

      <p className="mb-1" tabIndex={0}><b>How will my information be kept private and safe?</b></p>
      <p className="mb-2" tabIndex={0}>
        We will try to keep your information confidential by not sharing your information with others outside this research team. There can never be a guarantee of complete confidentiality.
      </p>
      <p className="mb-4" tabIndex={0}>
        Your data and information will be given a code, so that most people will not know that it is yours. The code will be stored in a safe place. When data from this research is shared, no one outside this research team will know it was you.
      </p>

      <p className="mb-1" tabIndex={0}><b>Who can answer my questions about this study?</b></p>
      <p className="mb-2" tabIndex={0}>
        For questions, concerns, or complaints about the study, please contact KiAnna McKee-Steen by email at{" "}
        <a href="mailto:kmcke6@uic.edu" className="text-cyan-800 underline">kmcke6@uic.edu</a>{" "}
        or the Principal Investigator, Dr. Yochai Eisenberg, at{" "}
        <a href="mailto:yeisen2@uic.edu" className="text-cyan-800 underline">yeisen2@uic.edu</a>.
      </p>
      <p className="mb-4" tabIndex={0}>
        If you have questions about your rights as a study subject; including questions, concerns, complaints, or if you feel you have not been treated according to the description in this form; or to offer input you may call the UIC Office for the Protection of Research Subjects (OPRS) at 312-996-1711 or e-mail OPRS at{" "}
        <a href="mailto:uicirb@uic.edu" className="text-cyan-800 underline">uicirb@uic.edu</a>.
      </p>

      <p className="mb-1" tabIndex={0}><b>Remember</b></p>
      <p className="mb-4" tabIndex={0}>
        Your participation in this research study is voluntary. Your choice whether or not to participate will not affect your ability to receive care or services from the University. If you choose to participate, you are free to stop and withdraw at any time.
      </p>

      <p className="mb-1" tabIndex={0}><b>Consent of Subject</b></p>
      <p className="mb-4" tabIndex={0}>
        I have read (or someone has read to me) the above information. I have been given an opportunity to ask questions and my questions have been answered to my satisfaction. I agree to participate in this research study.
      </p>

      <div className="flex items-center mb-6 consent-no-print" tabIndex={0}>
        <p className="mb-0" style={{ fontSize: '0.9em', color: '#555' }}>
          Please print a copy of this document for your records &mdash;{" "}
          <a
            href={`${process.env.PUBLIC_URL}/docs/consent-form.pdf`}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-800 underline"
          >
            print this page
          </a>
        </p>
      </div>

      <div className="mb-2 consent-no-print">
        <Checkbox
          color="teal"
          label="I consent to participate"
          checked={consented}
          onChange={(e) => {
            setConsented(e.target.checked);
            if (e.target.checked) setError('');
          }}
        />
      </div>

      {error && (
        <div className="flex items-center mt-2 mb-2 text-red-700 bg-red-50 p-2 rounded max-w-max consent-no-print">
          <Warning size={'1.2em'} weight="fill" className="mr-2" />
          <p className="text-w">{error}</p>
        </div>
      )}

      <div className="flex justify-end items-center consent-no-print">
        <Button style={{ fontSize: '0.7em' }} size="lg" color="teal" onClick={handleNextStep}>Next</Button>
        <span className="text-w ml-4 text-teal-700">press Enter ↵</span>
      </div>
    </div>
  );
};

export default ConsentPage;
