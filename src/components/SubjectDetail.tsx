
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, BookOpen, FileText, Clock, CheckCircle } from 'lucide-react';

interface SubjectDetailProps {
  subjectId: string;
  onBack: () => void;
}

interface Lesson {
  name: string;
  lessons: string[];
}

interface Term {
  name: string;
  topics: Lesson[];
}

interface ClassData {
  name: string;
  terms: Record<string, Term>;
}

interface SubjectData {
  name: string;
  description: string;
  classes: Record<string, ClassData>;
}

// Mock curriculum data structure
const curriculumData: Record<string, SubjectData> = {
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
  },
  biology: {
    name: 'Biology',
    description: 'Uganda Lower Secondary Biology Curriculum (S1-S4) - New NCDC Standards',
    classes: {
      'senior-1': {
        name: 'Senior 1',
        terms: {
          'term-1': {
            name: 'Term 1: Diversity of Living Things',
            topics: [
              {
                name: 'Chapter 1: Introduction to Biology',
                lessons: [
                  'Meaning of biology and life processes',
                  'Differences between plants and animals',
                  'Seven life processes (MRS GREN)',
                  'Applications of biology in daily life',
                  'Distinguishing living from non-living things',
                  'Plant vs animal characteristics'
                ]
              },
              {
                name: 'Chapter 2: Cells',
                lessons: [
                  'Cell theory and basic concepts',
                  'Animal cell structure and organelles',
                  'Plant cell structure and organelles',
                  'Differences between plant and animal cells',
                  'Specialized cells and their functions',
                  'Levels of organization: cells to organs'
                ]
              }
            ]
          },
          'term-2': {
            name: 'Term 2: Diversity of Living Things',
            topics: [
              {
                name: 'Chapter 3: Classification',
                lessons: [
                  'Rationale for classifying organisms',
                  'Hierarchical levels of classification',
                  'The five kingdoms of life',
                  'Kingdom Monera characteristics',
                  'Kingdom Protista characteristics',
                  'Kingdom Fungi, Plantae, and Animalia'
                ]
              },
              {
                name: 'Chapter 4: Insects',
                lessons: [
                  'Body plan of insects (head, thorax, abdomen)',
                  'External anatomy and functions',
                  'Insect metamorphosis (complete vs incomplete)',
                  'Beneficial roles of insects',
                  'Harmful effects of insects',
                  'Insect adaptations and diversity'
                ]
              }
            ]
          },
          'term-3': {
            name: 'Term 3: Diversity of Living Things',
            topics: [
              {
                name: 'Chapter 5: Flowering Plants',
                lessons: [
                  'External structure of flowering plants',
                  'Functions of roots, stems, and leaves',
                  'Flower structure and reproduction',
                  'Fruit and seed formation',
                  'Plant modifications and adaptations',
                  'Monocot vs dicot differences'
                ]
              }
            ]
          }
        }
      },
      'senior-2': {
        name: 'Senior 2',
        terms: {
          'term-1': {
            name: 'Term 1: Soil and Environment',
            topics: [
              {
                name: 'Chapter 1: Physical and Chemical Properties of Soil',
                lessons: [
                  'Soil types: sand, clay, and loam',
                  'Soil constituents and composition',
                  'Soil texture and structure',
                  'Soil pH and its importance',
                  'Water retention and drainage',
                  'Soil fertility factors'
                ]
              },
              {
                name: 'Chapter 2: Soil Erosion and Conservation',
                lessons: [
                  'Causes of soil erosion',
                  'Effects of erosion on fertility',
                  'Conservation methods: terracing and contour plowing',
                  'Role of vegetation in soil conservation',
                  'The nitrogen cycle',
                  'Microorganisms in soil fertility'
                ]
              }
            ]
          },
          'term-2': {
            name: 'Term 2: Nutrition',
            topics: [
              {
                name: 'Chapter 3: Nutrition (Nutrients and Dietary Needs)',
                lessons: [
                  'Six classes of nutrients',
                  'Sources and functions of nutrients',
                  'Balanced diet principles',
                  'Malnutrition: deficiency diseases',
                  'Body Mass Index (BMI) calculation',
                  'Nutritional requirements by age'
                ]
              },
              {
                name: 'Chapter 4: Nutrition in Green Plants (Photosynthesis)',
                lessons: [
                  'Autotrophic vs heterotrophic nutrition',
                  'Photosynthesis process and equation',
                  'Factors affecting photosynthesis',
                  'Leaf structure adaptations',
                  'Experiments on photosynthesis',
                  'Importance of photosynthesis'
                ]
              }
            ]
          },
          'term-3': {
            name: 'Term 3: Nutrition and Transport',
            topics: [
              {
                name: 'Chapter 5: Nutrition in Mammals (Digestion)',
                lessons: [
                  'Enzymes in digestion',
                  'Effect of pH and temperature on enzymes',
                  'Types of mammalian teeth',
                  'Human alimentary canal structure',
                  'Digestion and absorption processes',
                  'Dental care and hygiene'
                ]
              }
            ]
          }
        }
      },
      'senior-3': {
        name: 'Senior 3',
        terms: {
          'term-1': {
            name: 'Term 1: Respiration and Excretion',
            topics: [
              {
                name: 'Chapter 1: Gaseous Exchange (Respiration)',
                lessons: [
                  'Need for specialized respiratory systems',
                  'Human respiratory system structure',
                  'Mechanism of breathing',
                  'Gas exchange in lungs',
                  'Effects of smoking and pollution',
                  'Respiratory diseases'
                ]
              },
              {
                name: 'Chapter 2: Respiration – Aerobic and Anaerobic',
                lessons: [
                  'Aerobic vs anaerobic respiration',
                  'Word equations for respiration',
                  'Applications in fermentation',
                  'Respiration during exercise',
                  'Energy yield comparison',
                  'Practical experiments on respiration'
                ]
              },
              {
                name: 'Chapter 3: Excretion in Animals',
                lessons: [
                  'Role and importance of excretion',
                  'Human excretory organs',
                  'Kidney structure and nephrons',
                  'Urine formation process',
                  'Liver functions in excretion',
                  'Dialysis and kidney diseases'
                ]
              }
            ]
          },
          'term-2': {
            name: 'Term 2: Coordination',
            topics: [
              {
                name: 'Chapter 4: Chemical Coordination (Hormones)',
                lessons: [
                  'Endocrine glands and hormones',
                  'Differences between hormones and enzymes',
                  'Feedback control mechanisms',
                  'Blood sugar regulation',
                  'Hormonal disorders: diabetes, goitre',
                  'Diet and hormone health'
                ]
              },
              {
                name: 'Chapter 5: Nervous Coordination',
                lessons: [
                  'Structure of the nervous system',
                  'Neurons and nerve impulses',
                  'Brain regions and functions',
                  'Reflex arc components',
                  'Voluntary vs involuntary responses',
                  'Effects of drugs on the nervous system'
                ]
              },
              {
                name: 'Chapter 6: Receptor Organs (Eye and Ear)',
                lessons: [
                  'Human eye structure and function',
                  'Vision defects and correction',
                  'Human ear structure',
                  'Hearing mechanism',
                  'Common eye and ear disorders',
                  'Care of sense organs'
                ]
              }
            ]
          },
          'term-3': {
            name: 'Term 3: Locomotion and Growth',
            topics: [
              {
                name: 'Chapter 7: Locomotion in Mammals',
                lessons: [
                  'Human skeleton structure',
                  'Types of bones and joints',
                  'Muscle action and movement',
                  'Antagonistic muscle pairs',
                  'Causes and relief of muscle cramps',
                  'Exercise and skeletal health'
                ]
              },
              {
                name: 'Chapter 8: Growth in Plants and Animals',
                lessons: [
                  'Growth vs development concepts',
                  'Cell division (mitosis) for growth',
                  'Seed structure and germination',
                  'Germination conditions',
                  'Growth curves and measurements',
                  'Factors affecting growth'
                ]
              },
              {
                name: 'Chapter 9: Development in Plants and Animals',
                lessons: [
                  'Life cycles and metamorphosis',
                  'Human puberty and development',
                  'Embryonic development',
                  'Plant development and flowering',
                  'Hormonal control of development',
                  'Environmental factors in development'
                ]
              }
            ]
          }
        }
      },
      'senior-4': {
        name: 'Senior 4',
        terms: {
          'term-1': {
            name: 'Term 1: Reproduction',
            topics: [
              {
                name: 'Chapter 10: Asexual Reproduction in Plants',
                lessons: [
                  'Definition of asexual reproduction',
                  'Natural vegetative propagation methods',
                  'Artificial propagation techniques',
                  'Advantages and disadvantages',
                  'Agricultural applications',
                  'Commercial plant propagation'
                ]
              },
              {
                name: 'Chapter 11: Sexual Reproduction in Plants',
                lessons: [
                  'Flower structure and functions',
                  'Pollination: self vs cross',
                  'Fertilization process',
                  'Fruit and seed formation',
                  'Seed and fruit types',
                  'Seed dispersal mechanisms'
                ]
              }
            ]
          },
          'term-2': {
            name: 'Term 2: Human Reproduction and Genetics',
            topics: [
              {
                name: 'Chapter 12: Sexual Reproduction in Humans',
                lessons: [
                  'Male and female reproductive systems',
                  'Menstrual cycle stages',
                  'Gametes and fertilization',
                  'Embryonic and fetal development',
                  'Role of placenta and antenatal care',
                  'Birth control and STI prevention'
                ]
              },
              {
                name: 'Chapter 13: Inheritance (Genetics)',
                lessons: [
                  'DNA and chromosomes basics',
                  'Mitosis vs meiosis overview',
                  'Mendelian inheritance patterns',
                  'Dominant and recessive traits',
                  'Human sex determination (XX/XY)',
                  'Sex-linked inheritance examples'
                ]
              }
            ]
          },
          'term-3': {
            name: 'Term 3: Variation and Ecology',
            topics: [
              {
                name: 'Chapter 14: Variation and Natural Selection',
                lessons: [
                  'Sources of variation: genetic and environmental',
                  'Mutations: beneficial, neutral, harmful',
                  'Genetic disorders examples',
                  'Principles of natural selection',
                  'Evolution and adaptation',
                  'Selective breeding in agriculture'
                ]
              },
              {
                name: 'Chapter 15: Concept of Ecology',
                lessons: [
                  'Ecological definitions and concepts',
                  'Species, population, and community',
                  'Habitat and ecosystem concepts',
                  'Biotic and abiotic factors',
                  'Ecosystem interactions',
                  'Environmental conservation'
                ]
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
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
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
