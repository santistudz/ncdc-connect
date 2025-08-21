
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SubjectsGrid from '@/components/SubjectsGrid';
import SubjectDetail from '@/components/SubjectDetail';
import ResourcesSection from '@/components/ResourcesSection';
import ExamsSection from '@/components/ExamsSection';
import AboutSection from '@/components/AboutSection';
import Features from '@/components/Features';
import BottomTabs from '@/components/BottomTabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const handleExploreSubjects = () => {
    setActiveTab('subjects');
    setSelectedSubject(null);
  };

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
  };

  const renderContent = () => {
    if (selectedSubject) {
      return (
        <SubjectDetail 
          subjectId={selectedSubject} 
          onBack={handleBackToSubjects}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onExploreSubjects={handleExploreSubjects} />
            <SubjectsGrid onSubjectSelect={handleSubjectSelect} />
            <Features />
          </>
        );
      case 'subjects':
        return <SubjectsGrid onSubjectSelect={handleSubjectSelect} />;
      case 'resources':
        return <ResourcesSection />;
      case 'exams':
        return <ExamsSection />;
      case 'about':
        return <AboutSection />;
      default:
        return (
          <>
            <Hero onExploreSubjects={handleExploreSubjects} />
            <SubjectsGrid onSubjectSelect={handleSubjectSelect} />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pb-20">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-dark text-white py-16 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative pb-3">
                UgandaLearn
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <p className="text-gray-400">
                Your comprehensive resource for Ugandan Lower Secondary education materials, notes, and exam preparation.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative pb-3">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Subjects</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Past Papers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Study Guides</a></li>
              </ul>
            </div>
            
            {/* Subjects */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative pb-3">
                Subjects
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Mathematics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">English</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Science</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Social Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">All Subjects</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative pb-3">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3"></i>
                  support@ugandalearn.com
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-3"></i>
                  +256 700 123 456
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-3"></i>
                  Kampala, Uganda
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 UgandaLearn. All rights reserved. Designed for Ugandan Lower Secondary Students.
            </p>
          </div>
        </div>
      </footer>
      
      <BottomTabs activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
