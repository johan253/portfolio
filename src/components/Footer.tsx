"use client";

import { Button } from "./ui/button";
import { TypographyP } from "./ui/typography";

const Footer = () => {
  return (
    <footer className="border-t px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-2 text-center text-sm">
        <TypographyP>
          Designed and built by Johan Hernandez.
        </TypographyP>
        <TypographyP>
          For questions or opportunities, feel free to reach out:
          <br />
          <Button
            variant="link"
          >
            <a
              href="mailto:johannjo2000@gmail.com"
            >
              johannjo2000@gmail.com
            </a>
          </Button>
        </TypographyP>
        <TypographyP>
          &copy; {new Date().getFullYear()} Johan Hernandez. All rights reserved.
        </TypographyP>
      </div>
    </footer>
  );
};

export default Footer;
