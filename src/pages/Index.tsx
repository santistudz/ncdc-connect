
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SubjectsGrid from '@/components/SubjectsGrid';
import SubjectDetail from '@/components/SubjectDetail';
import ResourcesSection from '@/components/ResourcesSection';
import ExamsSection from '@/components/ExamsSection';
import AboutSection from '@/components/AboutSection';

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
            <div id="subjects-preview" className="bg-muted/30">
              <SubjectsGrid onSubjectSelect={handleSubjectSelect} />
            </div>
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
            <div className="bg-muted/30">
              <SubjectsGrid onSubjectSelect={handleSubjectSelect} />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-muted py-12 mt-16">
        <div className="container">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Uganda Lower Secondary Curriculum Hub</h3>
            <p className="text-muted-foreground mb-4">
              Empowering Uganda's future through quality education resources
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 NCDC Hub. Aligned with Uganda National Curriculum Development Centre standards.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
