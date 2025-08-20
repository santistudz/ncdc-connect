
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Video, BookOpen, PenTool } from 'lucide-react';

const ResourcesSection = () => {
  const resourceCategories = [
    {
      title: 'Study Notes',
      description: 'Comprehensive notes for all subjects and classes',
      icon: BookOpen,
      items: ['Mathematics Notes S1-S4', 'Science Study Guides', 'English Grammar Notes'],
      color: 'text-blue-600'
    },
    {
      title: 'Video Lessons',
      description: 'Interactive video content for better understanding',
      icon: Video,
      items: ['Physics Experiments', 'Mathematics Problem Solving', 'Biology Demonstrations'],
      color: 'text-purple-600'
    },
    {
      title: 'Worksheets',
      description: 'Practice worksheets and exercises',
      icon: PenTool,
      items: ['Mathematics Practice', 'Science Lab Sheets', 'Language Exercises'],
      color: 'text-green-600'
    },
    {
      title: 'Reference Materials',
      description: 'Additional reading and reference resources',
      icon: FileText,
      items: ['NCDC Syllabus Documents', 'Textbook Recommendations', 'Online Resources'],
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="py-8">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Learning Resources</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Downloadable resources to support your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="subject-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-8 h-8 ${category.color}`} />
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="text-sm font-medium">{item}</span>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
