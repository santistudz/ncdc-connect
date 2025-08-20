import { BookOpen, Smartphone, FileText, Download } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Notes',
      description: 'Detailed, curriculum-aligned notes for every subject and topic in the Ugandan syllabus.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Access all resources on any device, even with limited internet connectivity.'
    },
    {
      icon: FileText,
      title: 'Past Papers',
      description: 'Thousands of past exam papers with marking guides to help you prepare.'
    },
    {
      icon: Download,
      title: 'Downloadable Content',
      description: 'Download notes and resources for offline studying anytime, anywhere.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Why Students Love Our Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed specifically for Ugandan students to excel in their studies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;