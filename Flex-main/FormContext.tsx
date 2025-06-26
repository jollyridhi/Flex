// import React, { createContext, useContext, useState } from "react";

// interface FormStep {
//   step: number;
//   key: string;
//   value: any;
// }

// interface FormContextType {
//   formSteps: FormStep[];
//   addStepData: (step: number, key: string, value: any) => void;
//   resetForm: () => void;
//   gender: string | null;
//   setGender: (gender: string | null) => void;
// }

// const FormContext = createContext<FormContextType | null>(null);

// export const FormProvider: React.FC = ({ children }) => {
//   const [formSteps, setFormSteps] = useState<FormStep[]>([]);
//   const [gender, setGender] = useState<string | null>(null);

//   const addStepData = (step: number, key: string, value: any) => {
//     setFormSteps((prevSteps) => {
//       const existingIndex = prevSteps.findIndex((item) => item.step === step);
//       if (existingIndex !== -1) {
//         const updatedSteps = [...prevSteps];
//         updatedSteps[existingIndex] = { step, key, value };
//         return updatedSteps;
//       }
//       return [...prevSteps, { step, key, value }];
//     });
//   };

//   const resetForm = () => {
//     setFormSteps([]);
//     setGender(null); // Reset gender when the form is reset
//   };

//   return (
//     <FormContext.Provider value={{ formSteps, addStepData, resetForm, gender, setGender }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export const useForm = () => {
//   const context = useContext(FormContext);
//   if (!context) {
//     throw new Error("useForm must be used within a FormProvider");
//   }
//   return context;
// };

import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormStep {
  step: number;
  key: string;
  value: any;
}

interface FormContextType {
  formSteps: FormStep[];
  addStepData: (step: number, key: string, value: any) => void;
  getStepData: (key: string) => any | null; // Retrieve data for a specific key
  resetForm: () => void;
  gender: string | null;
  setGender: (gender: string | null) => void;
}

const FormContext = createContext<FormContextType | null>(null);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formSteps, setFormSteps] = useState<FormStep[]>([]);
  const [gender, setGender] = useState<string | null>(null);

  const addStepData = (step: number, key: string, value: any) => {
    const normalizedKey = key.toLowerCase(); // Normalize the key for case-insensitivity
    setFormSteps((prevSteps) => {
      const existingIndex = prevSteps.findIndex(
        (item) => item.step === step || item.key.toLowerCase() === normalizedKey
      );
      if (existingIndex !== -1) {
        const updatedSteps = [...prevSteps];
        updatedSteps[existingIndex] = { step, key: normalizedKey, value };
        
        return updatedSteps;
      }
      console.log("i ran");
      return [...prevSteps, { step, key: normalizedKey, value }];
    });
  };

  const getStepData = (key: string): any | null => {
    const normalizedKey = key.toLowerCase(); // Normalize the key for case-insensitivity
    const step = formSteps.find((item) => item.key.toLowerCase() === normalizedKey);
    return step ? step.value : null;
  };

  const resetForm = () => {
    setFormSteps([]);
    setGender(null);
  };

  return (
    <FormContext.Provider value={{ formSteps, addStepData, getStepData, resetForm, gender, setGender }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
