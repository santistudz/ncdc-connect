
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  BookOpen, 
  Atom, 
  Flask, 
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
    icon: Flask,
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
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            NCDC Curriculum Subjects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coverage of all Lower Secondary subjects aligned with 
            Uganda's National Curriculum Development Centre standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <Card 
                key={subject.id} 
                className="subject-card cursor-pointer group"
                onClick={() => onSubjectSelect(subject.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Icon className={`w-8 h-8 ${subject.color}`} />
                    <span className="text-sm text-muted-foreground">
                      {subject.lessons} lessons
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {subject.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Explore Curriculum
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubjectsGrid;
