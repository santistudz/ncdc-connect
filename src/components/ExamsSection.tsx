
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Download, FileText, GraduationCap } from 'lucide-react';

const ExamsSection = () => {
  const pastPapers = [
    {
      subject: 'Mathematics',
      year: '2023',
      term: 'Term 3',
      class: 'Senior 4',
      type: 'Final Exam',
      duration: '2 hours 30 minutes'
    },
    {
      subject: 'English',
      year: '2023',
      term: 'Term 2',
      class: 'Senior 3',
      type: 'Mid-term',
      duration: '2 hours'
    },
    {
      subject: 'Physics',
      year: '2023',
      term: 'Term 1',
      class: 'Senior 4',
      type: 'Final Exam',
      duration: '3 hours'
    },
    {
      subject: 'Chemistry',
      year: '2022',
      term: 'Term 3',
      class: 'Senior 3',
      type: 'Final Exam',
      duration: '2 hours 30 minutes'
    }
  ];

  const examTips = [
    {
      title: 'Time Management',
      description: 'Learn effective strategies for managing your exam time',
      icon: Clock
    },
    {
      title: 'Study Planning',
      description: 'Create effective study schedules and revision timetables',
      icon: Calendar
    },
    {
      title: 'Exam Techniques',
      description: 'Master exam-specific writing and problem-solving techniques',
      icon: GraduationCap
    }
  ];

  return (
    <div className="py-8">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Examinations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Past papers, exam preparation resources, and study tips
          </p>
        </div>

        <Tabs defaultValue="past-papers" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="past-papers">Past Papers</TabsTrigger>
            <TabsTrigger value="exam-tips">Exam Tips</TabsTrigger>
            <TabsTrigger value="schedule">Exam Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="past-papers" className="mt-8">
            <div className="grid gap-4">
              {pastPapers.map((paper, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <FileText className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-lg">{paper.subject} - {paper.class}</h3>
                        <p className="text-muted-foreground">{paper.year} {paper.term}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="secondary">{paper.type}</Badge>
                          <Badge variant="outline" className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {paper.duration}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exam-tips" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {examTips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <Card key={index} className="subject-card">
                    <CardHeader>
                      <Icon className="w-8 h-8 text-primary mb-2" />
                      <CardTitle>{tip.title}</CardTitle>
                      <CardDescription>{tip.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Upcoming Examinations
                </CardTitle>
                <CardDescription>
                  Official examination schedule for the current term
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No Scheduled Exams</h3>
                  <p className="text-muted-foreground">
                    Examination schedules will be posted here when available.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ExamsSection;
