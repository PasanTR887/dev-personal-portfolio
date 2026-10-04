import React from "react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "PHP",
  "Laravel",
  "Angular",
  "MySQL",
  "MongoDB",
  "AWS",
  "Python",
  "Power BI",
  "TypeScript",
  "Next.js",
  "Java",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub",

];

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/*Bg*/}
        <div className="absolute inset-0">
            <img 
            src="/hero-bg.jpg" 
            alt="Hero image" 
            className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
        </div>

        {/*Green Dots*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor: "#20B2A6",
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation:`slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}
                />
            ))}
        </div>

        {/*Content*/}
        <div className="container mx-auto w-full px-6 relative z-10 pb-20 pt-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/*Left Column - Text Content*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Fullstack Developer | Data Analysist | UI/UX Designer
                      </span>    
                    </div>

                    {/*Headline*/}
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
                            Hi, I'm Pasan Rajapaksha — an IT undergraduate passionate about building modern web applications, working with cloud technologies, and turning ideas into practical digital solutions.
                        </p>
                    </div>

                    {/*CTAs*/}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me <ArrowRight className="h-5 w-5" />
                        </Button>
                        <AnimatedBorderButton>
                            <Download className="h-5 w-5" />
                            Download CV
                        </AnimatedBorderButton>
                    </div>

                    {/*Social Links*/}
                    <div  className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow me on:</span>
                        {[
                            { icon: FaGithub, href: "https://github.com/PasanTR887" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/pasan-rajapaksha-705304249" },
                            { icon: FaFacebook, href: "https://web.facebook.com/pasan.tharindya" },
                        ].map((social, idx) => (
                            <a 
                                key={idx} 
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                    {<social.icon className="h-5 w-5" />} 
                            </a>
                        ))}
                    </div>
                </div>
                {/*Right Column - Profile Image*/}
                <div className="animate-fade-in animation-delay-300">
                    {/*Profile Image*/}
                    <div className="relative max-w-md mx-auto">
                     <div
                        className="absolute inset-0 
                        rounded-3xl bg-gradient-to-br 
                        from-primary/30 via-transparent 
                        to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border"> 
                            <img 
                                src="/profile-photo.png" 
                                alt="Pasan Rajapaksha" 
                                className="rounded-2xl w-full aspect-[4/5] object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium">
                                Available for work
                                </span>
                            </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                            <div className="text-2xl font-bold text-primary">IT</div>
                            <div className="text-xs">
                                Undergraduate
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/*Skills Section*/}
        <div className="container mx-auto mt-20 w-full px-6 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
                Technologies I work with
            </p>
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                    {[...skills, ...skills].map((skill, idx) => (
                        <div key={idx} className="flex-shrink-0 px-8 py-8">
                            <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            <div className="relative z-10 mt-4 mb-8 flex justify-center animate-fade-in animation-delay-800">
                <a
                href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
                 </a>
            </div>
    </section>
    );
};     