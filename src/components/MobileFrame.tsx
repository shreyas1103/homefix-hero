import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
}

const MobileFrame = ({ children }: MobileFrameProps) => {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4 gap-8">
      {/* iPhone Frame */}
      <div className="relative">
        {/* iPhone outer frame */}
        <div className="relative bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl">
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20" />
          
          {/* Screen */}
          <div className="relative bg-background rounded-[2.5rem] overflow-hidden w-[375px] h-[812px]">
            {/* Status bar area */}
            <div className="h-12 bg-background" />
            
            {/* Content */}
            <div className="h-[calc(100%-48px)] overflow-y-auto">
              {children}
            </div>
          </div>
          
          {/* Side buttons */}
          <div className="absolute left-[-3px] top-32 w-[3px] h-8 bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute left-[-3px] top-48 w-[3px] h-16 bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute left-[-3px] top-[17rem] w-[3px] h-16 bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute right-[-3px] top-44 w-[3px] h-20 bg-[#2a2a2a] rounded-r-sm" />
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
