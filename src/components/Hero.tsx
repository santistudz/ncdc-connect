
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

interface HeroProps {
  onExploreSubjects: () => void;
}

const Hero = ({ onExploreSubjects }: HeroProps) => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 hero-gradient">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Uganda Lower Secondary{' '}
            <span className="text-yellow-300">Curriculum Hub</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in">
            Complete NCDC-aligned resources for Senior 1-4 students. 
            Access structured lessons, past papers, and comprehensive study materials.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={onExploreSubjects}
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Subjects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              <Users className="w-5 h-5 mr-2" />
              Register / Login
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">14</div>
              <div className="text-blue-200">NCDC Subjects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4</div>
              <div className="text-blue-200">Senior Classes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-200">Lessons</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
