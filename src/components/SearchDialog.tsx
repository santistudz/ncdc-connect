import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Book, FileText, Calendar } from 'lucide-react';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = [
    { title: 'Mathematics - Algebra Basics', type: 'subject', icon: Book },
    { title: 'English - Grammar Rules', type: 'subject', icon: Book },
    { title: 'Physics - Motion Laws', type: 'subject', icon: Book },
    { title: 'Past Papers 2023', type: 'exam', icon: FileText },
    { title: 'Study Schedule Template', type: 'resource', icon: Calendar },
  ].filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search All Content
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Input
            placeholder="Search subjects, notes, past papers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
          
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => {
                const Icon = result.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start h-auto p-4"
                    onClick={() => onOpenChange(false)}
                  >
                    <Icon className="h-4 w-4 mr-3 text-primary" />
                    <div className="text-left">
                      <div className="font-medium">{result.title}</div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {result.type}
                      </div>
                    </div>
                  </Button>
                );
              })
            ) : searchQuery ? (
              <div className="text-center py-8 text-muted-foreground">
                No results found for "{searchQuery}"
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                Start typing to search...
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;