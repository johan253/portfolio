"use client";
const Footer = () => {
  return(
    <footer className={"p-5 pt-12 bg-gradient-to-b dark:from-slate-800 from from-neutral-200 via-black to-black"}>
      <div className={"text-xs text-center"}>
        This website was made and is maintained by Johan Hernandez.
        <br/>
        For any questions, comments, or concerns, please email me at:
        <br/>
        <a href={"mailto:johannjo2000@gmail.com"} className={"text-sky-500 hover:text-sky-300"}>
          johannjo2000@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;