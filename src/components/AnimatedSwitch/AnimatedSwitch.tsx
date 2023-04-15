import { Route, Routes, useLocation } from "react-router-dom";
import { AboutContainer } from "./containers/AboutContainer";
import { EducacionContainer } from "./containers/EducacionContainer";
import { MaintenanceContainer } from "./containers/MaintenanceContainer";

export const AnimatedSwitch = () => {
  const location = useLocation();

  const variants = {
    enter: {
      x: "-100%",
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: "0%",
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: "100%",
      opacity: 0,
    },
  };

  const transition = {
    type: "spring",
    mass: 0.35,
    stiffness: 75,
    duration: 0.4,
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AboutContainer
            variants={variants}
            transition={transition}
            location={location}
          />
        }
      />
      <Route
        path="sobre-mi"
        element={
          <AboutContainer
            variants={variants}
            transition={transition}
            location={location}
          />
        }
      />
      <Route
        path="educacion"
        element={
          <EducacionContainer
            variants={variants}
            transition={transition}
            location={location}
          />
        }
      />
      <Route
        path="experiencia"
        element={
          <MaintenanceContainer
            variants={variants}
            transition={transition}
            location={location}
          />
        }
      />
      <Route
        path="proyectos"
        element={
          <MaintenanceContainer
            variants={variants}
            transition={transition}
            location={location}
          />
        }
      />
      <Route
        path="contacto"
        element={
          <MaintenanceContainer
            variants={variants}
            transition={transition}
            location={location}
          />
        }
      />
    </Routes>
  );
};
