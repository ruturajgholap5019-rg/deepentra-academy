import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import WorkshopsPage from './pages/WorkshopsPage';
import ProjectsPage from './pages/ProjectsPage';
import StudentWorkPage from './pages/StudentWorkPage';
import ResourcesPage from './pages/ResourcesPage';
import InstitutionsPage from './pages/InstitutionsPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ShowcasePage from './pages/ShowcasePage';

import CredentialVerificationPage from './pages/CredentialVerificationPage';
import PublicProfilePage from './pages/PublicProfilePage';
import LearnerDashboardPage from './pages/learner/LearnerDashboardPage';
import ProgramWorkspacePage from './pages/learner/ProgramWorkspacePage';
import CertificatesHubPage from './pages/learner/CertificatesHubPage';
import FacultyPortalPage from './pages/faculty/FacultyPortalPage';

import { ThemeProvider } from './context/ThemeContext';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-canvas text-text-main antialiased selection:bg-indigo-500/30 selection:text-text-main transition-colors duration-200">
          <ScrollToTop />
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Public Surface */}
              <Route path="/" element={<HomePage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/programs/:programId" element={<ProgramDetailPage />} />
              <Route path="/workshops" element={<WorkshopsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/showcase" element={<ShowcasePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/student-work" element={<StudentWorkPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/institutions" element={<InstitutionsPage />} />
              <Route path="/about" element={<AboutPage />} />

              {/* Public Verification & Profile */}
              <Route path="/credentials" element={<CredentialVerificationPage />} />
              <Route path="/credentials/:id" element={<CredentialVerificationPage />} />
              <Route path="/students/:username" element={<PublicProfilePage />} />

              {/* Learner Platform Surface */}
              <Route path="/app" element={<LearnerDashboardPage />} />
              <Route path="/app/workspace/:programId" element={<ProgramWorkspacePage />} />
              <Route path="/app/certificates" element={<CertificatesHubPage />} />

              {/* Faculty Operations Surface */}
              <Route path="/faculty" element={<FacultyPortalPage />} />

              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
