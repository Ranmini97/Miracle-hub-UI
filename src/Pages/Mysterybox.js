import React from 'react'
import Sidebar from '../Components/Sidebar';
//import StepWizard from "react-step-wizard";
//import Step from '../Components/Step';

export default function Mysterybox() {
  return (
    <div>
        <div className="ms-0 row w-100">

        <div className="col-lg-2 p-0 h-100">
        <Sidebar/>
        </div>

        <div className="col-lg-10 p-0">
            <h4 className="text-center">You are going to wrap your Mystery Box!✨🎁🤩</h4>
            <p className="text-center">there should be the mystery box - form</p>

            <div>
                {/* <StepWizard>
                    <Step currentStep="1" totalSteps="4" isActive="true" previousStep="1" nextStep="2" />
                    <Step currentStep="2" totalSteps="4" isActive="true" previousStep="1" nextStep="3"/>
                    <Step currentStep="3" totalSteps="4" isActive="true" previousStep="2" nextStep="4"/>
                    <Step currentStep="4" totalSteps="4" isActive="true" previousStep="3" nextStep="4"/>
                </StepWizard> */}
            </div>

        </div>

        </div>
    </div>
  )
}