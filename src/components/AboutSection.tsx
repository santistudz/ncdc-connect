
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Target, Users, Award, Heart, Globe } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'NCDC Aligned',
      description: 'All content strictly follows Uganda National Curriculum Development Centre guidelines'
    },
    {
      icon: Target,
      title: 'Structured Learning',
      description: 'Organized curriculum progression from Senior 1 through Senior 4'
    },
    {
      icon: Users,
      title: 'Student Focused',
      description: 'Designed specifically for Lower Secondary students in Uganda'
    },
    {
      icon: Award,
      title: 'Quality Content',
      description: 'Comprehensive lessons, exercises, and assessment materials'
    }
  ];

  const stats = [
    { label: 'Subjects Covered', value: '14+', icon: BookOpen },
    { label: 'Student Classes', value: '4', icon: Users },
    { label: 'Total Lessons', value: '1000+', icon: Target },
    { label: 'Past Papers', value: '200+', icon: Award }
  ];

  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About NCDC Hub</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uganda Lower Secondary Curriculum Hub is a comprehensive educational platform 
            designed to support students, teachers, and parents with NCDC-aligned resources 
            for Senior 1-4 education.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12 card-gradient">
          <CardContent className="p-8">
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                To democratize access to quality education by providing comprehensive, 
                NCDC-aligned learning resources that empower every Ugandan student to 
                excel in their Lower Secondary education.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="subject-card text-center">
                <CardHeader>
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Vision Section */}
        <Card>
          <CardContent className="p-8">
            <div className="text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                To become Uganda's leading digital education platform, setting the standard 
                for curriculum-aligned learning resources and contributing to the nation's 
                educational development goals.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
