import React from "react";
import { Steps, StepsProvider, useSteps } from "react-step-builder";
import Valuation from "@components/Valuation/index.js";
import FinishRegister from "@components/FinishRegister/index.js";
import { Button } from "@material-ui/core";

const MySteps = () => {
  const { next, prev, total, current } = useSteps();
  return (
    <>
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
      <Button
        type="button"
        color="primary"
        variant="contained"
        className="my-2 btn-primary py-3"
        onClick={prev}
        disabled={current === 1}
      >
        Previous
      </Button>
      <Button
        type="button"
        color="primary"
        variant="contained"
        className="my-2 btn-primary py-3"
        onClick={next}
        disabled={current === total}
      >
        Next
      </Button>
    </>
  );
};

const RegisterPageBusiness = () => {
  return (
    <StepsProvider>
      <MySteps />
    </StepsProvider>
  );
};

export default RegisterPageBusiness;
