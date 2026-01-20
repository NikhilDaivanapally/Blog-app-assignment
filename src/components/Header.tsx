import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { BookOpen, PenLine } from "lucide-react";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-semibold text-foreground">
            Blogs
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className={`font-body text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            Blogs
          </Link>
          <Link to="/create">
            <Button variant="default" size="sm" className="gap-2">
              <PenLine className="h-4 w-4" />
              Write
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
