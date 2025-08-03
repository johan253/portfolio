"use client";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-neutral-100 px-6 py-12 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl space-y-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          Designed and built by <span className="font-medium text-zinc-800 dark:text-white">Johan Hernandez</span>.
        </p>
        <p>
          For questions or opportunities, feel free to reach out:
          <br />
          <a
            href="mailto:johannjo2000@gmail.com"
            className="text-sky-500 transition-colors hover:text-sky-400"
          >
            johannjo2000@gmail.com
          </a>
        </p>
        <p className="mt-4 text-xs opacity-50">
          &copy; {new Date().getFullYear()} Johan Hernandez. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
