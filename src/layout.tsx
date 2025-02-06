import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "@/theme/theme-provider"; // Updated import path

interface NavItem {
  label: string;
  section: string;
}

const DefaultNavigation: NavItem[] = [
  { label: "Sobre mi", section: "about" },
  { label: "Serveis", section: "services" },
  { label: "Preus", section: "pricing" },
  { label: "Contacte", section: "contact" },
];

export default function Layout() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-border px-6 bg-background/80 backdrop-blur-lg">
          <div className="flex items-center gap-8">
            <Link to="/">
              <h1 className="text-lg font-semibold text-foreground">Dra. Maria Serrat</h1>
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-6">
              {DefaultNavigation.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.section)}
                  className="text-sm transition-colors hover:text-primary cursor-pointer text-muted-foreground"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full w-9 h-9 flex items-center justify-center"
            >
              {theme === "light" ? (
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              ) : (
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto bg-background pt-16">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="border-t border-border px-6 py-4 bg-background">
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground">
              © 2024 Dra. Maria Serrat. Tots els drets reservats.
            </span>
            <a
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacitat
            </a>
            <a
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Termes
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}