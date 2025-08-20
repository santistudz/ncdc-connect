
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, BookOpen, FileText, Clock, CheckCircle } from 'lucide-react';

interface SubjectDetailProps {
  subjectId: string;
  onBack: () => void;
}

// Mock curriculum data structure
const curriculumData = {
  mathematics: {
    name: 'Mathematics',
    description: 'Complete mathematics curriculum covering algebra, geometry, and statistics',
    classes: {
      'senior-1': {
        name: 'Senior 1',
        terms: {
          'term-1': {
            name: 'Term 1',
            topics: [
              {
                name: 'Number Systems',
                lessons: ['Introduction to Numbers', 'Natural Numbers', 'Whole Numbers', 'Integers']
              },
              {
                name: 'Basic Algebra',
                lessons: ['Variables and Constants', 'Simple Equations', 'Substitution']
              }
            ]
          },
          'term-2': {
            name: 'Term 2',
            topics: [
              {
                name: 'Geometry Basics',
                lessons: ['Points and Lines', 'Angles', 'Triangles', 'Quadrilaterals']
              },
              {
                name: 'Measurements',
                lessons: ['Length and Distance', 'Area and Perimeter', 'Volume']
              }
            ]
          },
          'term-3': {
            name: 'Term 3',
            topics: [
              {
                name: 'Statistics Introduction',
                lessons: ['Data Collection', 'Tables and Charts', 'Mean and Mode']
              }
            ]
          }
        }
      },
      'senior-2': {
        name: 'Senior 2',
        terms: {
          'term-1': {
            name: 'Term 1',
            topics: [
              {
                name: 'Advanced Algebra',
                lessons: ['Linear Equations', 'Simultaneous Equations', 'Inequalities']
              },
              {
                name: 'Fractions and Decimals',
                lessons: ['Operations with Fractions', 'Decimal Places', 'Percentages']
              }
            ]
          }
        }
      }
    }
  }
};

const SubjectDetail = ({ subjectId, onBack }: SubjectDetailProps) => {
  const [activeClass, setActiveClass] = useState('senior-1');
  
  // Get subject data or return default structure
  const subjectData = curriculumData[subjectId as keyof typeof curriculumData] || {
    name: subjectId.charAt(0).toUpperCase() + subjectId.slice(1),
    description: 'Complete curriculum content coming soon',
    classes: {}
  };

  const classes = ['senior-1', 'senior-2', 'senior-3', 'senior-4'];
  const classData = subjectData.classes[activeClass as keyof typeof subjectData.classes];

  return (
    <div className="py-8">
      <div className="container">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Subjects
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{subjectData.name}</h1>
            <p className="text-muted-foreground">{subjectData.description}</p>
          </div>
        </div>

        {/* Class Tabs */}
        <Tabs value={activeClass} onValueChange={setActiveClass} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {classes.map((classId) => (
              <TabsTrigger key={classId} value={classId} className="capitalize">
                {classId.replace('-', ' ')}
              </TabsTrigger>
            ))}
          </TabsList>

          {classes.map((classId) => (
            <TabsContent key={classId} value={classId}>
              {classData ? (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        {classData.name} Curriculum
                      </CardTitle>
                      <CardDescription>
                        Structured lessons organized by terms and topics
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  {/* Terms */}
                  <div className="grid gap-6">
                    {Object.entries(classData.terms || {}).map(([termId, termData]) => (
                      <Card key={termId}>
                        <CardHeader>
                          <CardTitle className="text-xl">
                            <Clock className="w-5 h-5 mr-2 inline" />
                            {termData.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Accordion type="single" collapsible className="w-full">
                            {termData.topics.map((topic, topicIndex) => (
                              <AccordionItem key={topicIndex} value={`topic-${topicIndex}`}>
                                <AccordionTrigger className="text-left">
                                  <div className="flex items-center">
                                    <FileText className="w-4 h-4 mr-2" />
                                    {topic.name}
                                    <span className="ml-2 text-sm text-muted-foreground">
                                      ({topic.lessons.length} lessons)
                                    </span>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="space-y-2 pt-2">
                                    {topic.lessons.map((lesson, lessonIndex) => (
                                      <div 
                                        key={lessonIndex}
                                        className="lesson-item flex items-center justify-between cursor-pointer"
                                      >
                                        <div className="flex items-center">
                                          <CheckCircle className="w-4 h-4 mr-3 text-muted-foreground" />
                                          <span>Lesson {lessonIndex + 1}: {lesson}</span>
                                        </div>
                                        <Button variant="ghost" size="sm">
                                          View
                                        </Button>
                                      </div>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Content Coming Soon</h3>
                    <p className="text-muted-foreground">
                      {classId.replace('-', ' ').charAt(0).toUpperCase() + classId.replace('-', ' ').slice(1)} curriculum content is being prepared.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default SubjectDetail;
