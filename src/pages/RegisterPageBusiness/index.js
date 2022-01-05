import React from "react";
import { Steps, StepsProvider, useSteps } from "react-step-builder";
import Valuation from "@components/Valuation/index.js";
import FinishRegister from "@components/FinishRegister/index.js"

const RegisterPageBusiness = () => {
  const { next, prev } = useSteps();
  return (
    <StepsProvider>
      <Steps>
        <div>
        <FinishRegister />
        </div>
        <div>
         <FinishRegister />
        </div>
        <div>
          <Valuation />
        </div>
      </Steps>
    </StepsProvider>
  );
};

export default RegisterPageBusiness;
