import { useState } from 'react';
import { Home, Search, Palette } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import SearchDialog from './SearchDialog';

interface BottomTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomTabs = ({ activeTab, onTabChange }: BottomTabsProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const tabs = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      onClick: () => onTabChange('home'),
    },
    {
      id: 'search',
      label: 'Search All',
      icon: Search,
      onClick: () => setSearchOpen(true),
    },
    {
      id: 'theme',
      label: 'Theme',
      icon: Palette,
      onClick: handleThemeToggle,
    },
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-50">
        <div className="container max-w-md mx-auto">
          <div className="flex items-center justify-around py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === 'home' ? activeTab === 'home' : false;
              
              return (
                <Button
                  key={tab.id}
                  variant="ghost"
                  size="sm"
                  className={`flex flex-col items-center gap-1 h-auto py-2 px-4 rounded-lg transition-colors ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={tab.onClick}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{tab.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
      
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default BottomTabs;