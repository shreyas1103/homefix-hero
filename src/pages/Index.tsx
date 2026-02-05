import { useState } from "react";
import MobileFrame from "../components/MobileFrame";
import BottomNav from "../components/BottomNav";
import HomeScreen from "../screens/HomeScreen";
import UrgentServiceSelectionScreen from "../screens/UrgentServiceSelectionScreen";
import SelectServiceScreen from "../screens/SelectServiceScreen";
import ConfirmRequestScreen from "../screens/ConfirmRequestScreen";
import WorkerMatchingScreen from "../screens/WorkerMatchingScreen";
import ServiceInProgressScreen from "../screens/ServiceInProgressScreen";
import ServiceCompletedScreen from "../screens/ServiceCompletedScreen";
import UserConfirmationScreen from "../screens/UserConfirmationScreen";
import PaymentSuccessScreen from "../screens/PaymentSuccessScreen";
import RateServiceScreen from "../screens/RateServiceScreen";
import TrustScoreUpdateScreen from "../screens/TrustScoreUpdateScreen";
import BookingsScreen from "../screens/BookingsScreen";
import SupportScreen from "../screens/SupportScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProgressSteps from "../components/ProgressSteps";

type Screen =
  | "home"
  | "urgent-select"
  | "select-service"
  | "confirm-request"
  | "worker-matching"
  | "service-in-progress"
  | "service-completed"
  | "user-confirmation"
  | "payment-success"
  | "rate-service"
  | "trust-score";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [selectedService, setSelectedService] = useState<string>("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const screenSteps = [
    "home",
    "select-service",
    "confirm-request",
    "worker-matching",
    "service-in-progress",
    "service-completed",
    "user-confirmation",
    "payment-success",
    "rate-service",
    "trust-score",
  ];

  const currentStepIndex = screenSteps.indexOf(currentScreen);

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setIsUrgent(false);
    setCurrentScreen("select-service");
  };

  const handleUrgent = () => {
    setIsUrgent(true);
    setCurrentScreen("urgent-select");
  };

  const handleUrgentServiceSelect = (service: string) => {
    setSelectedService(service);
    setCurrentScreen("select-service");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <HomeScreen
            onSelectService={handleSelectService}
            onUrgent={handleUrgent}
          />
        );
      case "bookings":
        return <BookingsScreen />;
      case "chat":
        return <SupportScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return (
          <HomeScreen
            onSelectService={handleSelectService}
            onUrgent={handleUrgent}
          />
        );
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return renderTabContent();
      case "urgent-select":
        return (
          <UrgentServiceSelectionScreen
            onBack={() => {
              setIsUrgent(false);
              setCurrentScreen("home");
            }}
            onSelectService={handleUrgentServiceSelect}
          />
        );
      case "select-service":
        return (
          <SelectServiceScreen
            service={selectedService}
            isUrgent={isUrgent}
            onBack={() => setCurrentScreen(isUrgent ? "urgent-select" : "home")}
            onConfirm={() => setCurrentScreen("confirm-request")}
          />
        );
      case "confirm-request":
        return (
          <ConfirmRequestScreen
            service={selectedService}
            isUrgent={isUrgent}
            onBack={() => setCurrentScreen("select-service")}
            onConfirm={() => setCurrentScreen("worker-matching")}
          />
        );
      case "worker-matching":
        return (
          <WorkerMatchingScreen
            isUrgent={isUrgent}
            onWorkerFound={() => setCurrentScreen("service-in-progress")}
          />
        );
      case "service-in-progress":
        return (
          <ServiceInProgressScreen
            onComplete={() => setCurrentScreen("service-completed")}
          />
        );
      case "service-completed":
        return (
          <ServiceCompletedScreen
            onProceed={() => setCurrentScreen("user-confirmation")}
          />
        );
      case "user-confirmation":
        return (
          <UserConfirmationScreen
            onConfirmYes={() => setCurrentScreen("payment-success")}
            onConfirmNo={() => setCurrentScreen("home")}
          />
        );
      case "payment-success":
        return (
          <PaymentSuccessScreen
            onContinue={() => setCurrentScreen("rate-service")}
          />
        );
      case "rate-service":
        return (
          <RateServiceScreen
            onSubmit={() => setCurrentScreen("trust-score")}
          />
        );
      case "trust-score":
        return (
          <TrustScoreUpdateScreen
            onFinish={() => {
              setCurrentScreen("home");
              setSelectedService("");
              setIsUrgent(false);
            }}
          />
        );
      default:
        return renderTabContent();
    }
  };

  return (
    <MobileFrame>
      {/* Progress Indicator - show only during booking flow */}
      {currentScreen !== "home" && currentScreen !== "urgent-select" && (
        <div className="bg-card border-b border-border">
          <ProgressSteps steps={screenSteps} currentStep={currentStepIndex} />
        </div>
      )}

      {/* Screen Content */}
      {renderScreen()}

      {/* Bottom Navigation - only on home */}
      {currentScreen === "home" && (
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      )}
    </MobileFrame>
  );
};

export default Index;
