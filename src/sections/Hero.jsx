import React from "react";
import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Fullstack Developer | Data Analyst | UI/UX Designer
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Pasan Rajapaksha — a Fullstack Developer specializing in
                MERN, PHP, MySQL, CSS, JavaScript & frameworks like Laravel & Angular. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg">
                Contact Me <ArrowRight className="h-5 w-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="h-5 w-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src="/profile.png"
                alt="Pasan Rajapaksha"
                className="relative mx-auto w-full max-w-sm rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};     