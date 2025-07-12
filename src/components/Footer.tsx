"use client";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center text-sm text-zinc-500 dark:text-zinc-400 space-y-2">
        <p>
          Designed and built by <span className="font-medium text-zinc-800 dark:text-white">Johan Hernandez</span>.
        </p>
        <p>
          For questions or opportunities, feel free to reach out:
          <br />
          <a
            href="mailto:johannjo2000@gmail.com"
            className="text-sky-500 hover:text-sky-400 transition-colors"
          >
            johannjo2000@gmail.com
          </a>
        </p>
        <p className="text-xs mt-4 opacity-50">
          &copy; {new Date().getFullYear()} Johan Hernandez. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
