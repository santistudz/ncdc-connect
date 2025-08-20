
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

interface HeroProps {
  onExploreSubjects: () => void;
}

const Hero = ({ onExploreSubjects }: HeroProps) => {
  return (
    <section className="py-20 lg:py-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              All Your{' '}
              <span className="text-primary">Lower Secondary</span>{' '}
              Notes in One Place
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Access comprehensive curriculum notes, study guides, and exam resources for all subjects in Uganda's Lower Secondary Education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={onExploreSubjects}
                className="btn btn-primary text-lg px-8 py-4"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Subjects
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="btn btn-outline text-lg px-8 py-4"
              >
                <Users className="w-5 h-5 mr-2" />
                Watch Video Tour
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Ugandan Students Learning"
                className="max-w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
