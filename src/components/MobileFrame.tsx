import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
}

const MobileFrame = ({ children }: MobileFrameProps) => {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="mobile-container shadow-xl rounded-3xl overflow-hidden border border-border/50">
        <div className="min-h-[700px] max-h-[800px] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
