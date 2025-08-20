
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  BookOpen, 
  Atom, 
  Beaker, 
  Leaf, 
  Globe, 
  Clock, 
  Cross, 
  Monitor, 
  Briefcase, 
  Feather, 
  Palette, 
  Wheat,
  Wrench
} from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  lessons: number;
}

interface SubjectsGridProps {
  onSubjectSelect: (subjectId: string) => void;
}

const subjects: Subject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Algebra, Geometry, Statistics and more',
    icon: Calculator,
    color: 'text-blue-600',
    lessons: 120
  },
  {
    id: 'english',
    name: 'English',
    description: 'Grammar, Composition, and Communication',
    icon: BookOpen,
    color: 'text-green-600',
    lessons: 100
  },
  {
    id: 'physics',
    name: 'Physics',
    description: 'Mechanics, Waves, Electricity and Magnetism',
    icon: Atom,
    color: 'text-purple-600',
    lessons: 90
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Atomic Structure, Chemical Reactions',
    icon: Beaker,
    color: 'text-orange-600',
    lessons: 85
  },
  {
    id: 'biology',
    name: 'Biology',
    description: 'Life Sciences, Human Body, Ecology',
    icon: Leaf,
    color: 'text-emerald-600',
    lessons: 95
  },
  {
    id: 'geography',
    name: 'Geography',
    description: 'Physical and Human Geography',
    icon: Globe,
    color: 'text-cyan-600',
    lessons: 75
  },
  {
    id: 'history',
    name: 'History',
    description: 'Uganda and World History',
    icon: Clock,
    color: 'text-amber-600',
    lessons: 70
  },
  {
    id: 'cre',
    name: 'CRE/IRE',
    description: 'Christian/Islamic Religious Education',
    icon: Cross,
    color: 'text-rose-600',
    lessons: 60
  },
  {
    id: 'ict',
    name: 'ICT',
    description: 'Information and Communication Technology',
    icon: Monitor,
    color: 'text-indigo-600',
    lessons: 80
  },
  {
    id: 'entrepreneurship',
    name: 'Entrepreneurship',
    description: 'Business Skills and Innovation',
    icon: Briefcase,
    color: 'text-teal-600',
    lessons: 55
  },
  {
    id: 'literature',
    name: 'Literature',
    description: 'Poetry, Prose, and Drama',
    icon: Feather,
    color: 'text-pink-600',
    lessons: 65
  },
  {
    id: 'fine-art',
    name: 'Fine Art',
    description: 'Drawing, Painting, and Design',
    icon: Palette,
    color: 'text-violet-600',
    lessons: 50
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    description: 'Crop Production and Animal Husbandry',
    icon: Wheat,
    color: 'text-lime-600',
    lessons: 70
  },
  {
    id: 'technical',
    name: 'Technical Subjects',
    description: 'Practical and Vocational Skills',
    icon: Wrench,
    color: 'text-slate-600',
    lessons: 45
  }
];

const SubjectsGrid = ({ onSubjectSelect }: SubjectsGridProps) => {
  return (
    <section className="py-20 bg-white rounded-t-[2rem] -mt-8 relative z-10 shadow-2xl">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            All Subjects Covered
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access complete notes, past papers, and study resources for every subject in the Ugandan Lower Secondary Curriculum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <div 
                key={subject.id} 
                className="subject-card cursor-pointer group"
                onClick={() => onSubjectSelect(subject.id)}
              >
                {/* Card Header with Gradient */}
                <div className="subject-card-header">
                  <Icon className="w-12 h-12 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold">{subject.name}</h3>
                </div>
                
                {/* Card Body */}
                <div className="subject-card-body">
                  <p className="text-gray-600 mb-4 text-sm">
                    {subject.description}
                  </p>
                  <div className="text-sm text-gray-500 mb-4 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {subject.lessons} lessons available
                  </div>
                </div>
                
                {/* Card Footer */}
                <div className="px-6 pb-6">
                  <button className="w-full py-3 text-center bg-gray-50 text-primary font-semibold rounded-lg border-t border-gray-100 transition-all duration-300 hover:bg-primary hover:text-white">
                    View Notes
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubjectsGrid;
