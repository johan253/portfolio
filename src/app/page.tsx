"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperienceList from "@/components/ExperienceList";
import ProjectList from "@/components/ProjectList";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { RiGitRepositoryFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { TypographyH1, TypographyH2, TypographyInlineCode, TypographyP } from "@/components/ui/typography";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GithubData {
  login?: string;
  public_repos?: number;
  followers?: number;
  created_at?: string;
}

export default function Home() {
  const [resume, setResume] = useState<string>("");
  const [johan, setJohan] = useState<string>(
    "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
  );
  const [loading, setLoading] = useState<boolean>(true);
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState<boolean>(theme === "dark");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [githubData, setGithubData] = useState<GithubData>({});

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setTheme(darkMode ? "light" : "dark");
  };

  useEffect(() => {
    const fetchData = async () => {
      setJohan(await fetch("/api/images/johan").then((res) => res.json()));
      setResume(await fetch("/api/images/resume").then((res) => res.json()));
      setGithubData(await fetch("https://api.github.com/users/johan253").then((res) => res.json()));
      setLoading(false);
    };
    fetchData();
    if (typeof window !== "undefined") {
      const hasVisited = localStorage.getItem("hasVisited");
      if (!hasVisited) {
        localStorage.setItem("hasVisited", "true");
        setTimeout(() => {
          setShowPopup(true);
        }, 5000);
      }
    }
  }, []);

  return (
    <main>
      {/* Hero / Intro Section */}
      <Navbar theme={theme} toggleDark={toggleDarkMode} resumeLink={resume} loading={loading} />
      <section className="pb-16 pt-24 transition ">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <TypographyP className="mb-4">
            Hi, my name is
          </TypographyP>

          <TypographyH1 className="typewriter animate-gradient-wave max-w-fit bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
            Johan Hernandez
          </TypographyH1>

          <TypographyH2 className="mt-8">
            Software Engineer
          </TypographyH2>

          <TypographyP className="my-8 max-w-4xl leading-8">
            I&apos;m a Computer Science student at the University of Washington with a passion for building things and solving meaningful problems. I enjoy collaborating with others and tackling new challenges while continuously learning and improving. Let&apos;s connect!
          </TypographyP>

          <div className="my-8 flex justify-center gap-12 text-2xl">
            <a
              href="https://www.linkedin.com/in/johan253/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin className="transition-transform hover:scale-110 hover:text-blue-600" />
            </a>
            <HoverCard>
              <HoverCardTrigger>
                <a
                  href="https://github.com/johan253"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <AiFillGithub className="transition-transform hover:scale-110 hover:text-black dark:hover:text-white" />
                </a>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex justify-between gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/johan253.png" />
                    <AvatarFallback>JH</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@{githubData.login || "johan253"}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <RiGitRepositoryFill />
                      <p>
                        {githubData.public_repos || "0"} Repositories
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BsPeopleFill />
                      <p>
                        {githubData.followers || "0"} Followers
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Joined {new Date(githubData.created_at || null).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <a href="mailto:johannjo2000@gmail.com" aria-label="Email">
              <AiFillMail className="transition-transform hover:scale-110 hover:text-red-500" />
            </a>
          </div>

          {!loading && (
            <div className="mx-auto size-32 overflow-hidden rounded-full border-4">
              <Image
                src={johan}
                alt="Photo of Johan"
                width={128}
                height={128}
                className="h-full w-fit -translate-y-1 translate-x-1 object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="border-t px-6 py-20 transition sm:px-12 lg:px-32">
        <ExperienceList />
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t px-6 py-20 transition sm:px-12 lg:px-32">
        <ProjectList />
      </section>

      {/* Footer */}
      <Footer />
      {/* Popup for first-time visitors */}
      {
        showPopup && (
          <Card className="fixed bottom-1 left-1 z-50 flex animate-fade-in items-center justify-center gap-2 rounded-md p-4 shadow-lg shadow-black transition-transform sm:bottom-6 sm:left-6 sm:gap-4">
            <div className="flex flex-col items-start justify-center">
              <TypographyP>
                Get a quick summary with the <strong>curl</strong> command:
              </TypographyP>
              <TypographyInlineCode>
                curl -L johanhernandez.com
              </TypographyInlineCode>
            </div>
            <Button
              variant="secondary"
              onClick={() => setShowPopup(false)}
            >
              Close
            </Button>
          </Card>
        )
      }
    </main >
  );
}
