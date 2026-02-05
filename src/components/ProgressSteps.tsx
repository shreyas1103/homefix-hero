interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
}

const ProgressSteps = ({ steps, currentStep }: ProgressStepsProps) => {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {steps.map((_, index) => (
        <div
          key={index}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            index === currentStep
              ? "w-8 bg-primary"
              : index < currentStep
              ? "w-1.5 bg-primary"
              : "w-1.5 bg-primary/20"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressSteps;
