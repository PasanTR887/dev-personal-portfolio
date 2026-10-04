import React from "react";
import { BrainCircuit, ChartNoAxesCombined, Code2, PanelsTopLeft } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Full-Stack Development",
        description: "Building complete web applications from responsive frontends to backend APIs and database-driven systems.",
    },
    {
        icon: ChartNoAxesCombined,
        title: "Data Analysis",
        description:
        "Exploring data, uncovering meaningful insights, and creating clear visualizations and dashboards with Power BI and Python.",
    },
    {
        icon: PanelsTopLeft,
        title: "UI/UX Design",
        description: "Designing clean and intuitive interfaces with a focus on usability, visual hierarchy, and purposeful user experiences.",
    },
    {
        icon: BrainCircuit,
        title: "Problem Solving",
        description:
        "Breaking down complex challenges, exploring practical solutions, and continuously improving through hands-on projects.",
    },
];

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/*Left Column*/}
            <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        About Me
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Turning Ideas Into,
                    <span className="font-serif italic font-normal text-white">
                        {" "}
                        Digital Experiences.
                    </span>
                </h2>

                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                        I'm Pasan Rajapaksha, an Information Technology undergraduate with a primary focus on Full-Stack Development. 
                        I enjoy turning ideas into complete web applications, from responsive interfaces to backend APIs and database-driven solutions. 
                        I've worked with JavaScript, React, Angular, Node.js, Laravel, PHP, MySQL, and MongoDB.
                    </p>
                    <p>
                        Alongside development, I'm passionate about Data Analysis, using Power BI, Power Query, DAX, and Python to 
                        explore data, uncover insights, and create meaningful visualizations that support better decisions.
                    </p>
                    <p>
                        I also enjoy exploring UI/UX design with Figma, focusing on clean, intuitive, and purposeful experiences. 
                        Alongside my development work, I have a practical understanding of AWS, Docker, networking, and cloud fundamentals, 
                        giving me a broader perspective on how modern applications are built and delivered.
                    </p>
                </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build meaningful digital solutions that combine 
                strong development, thoughtful design, and data-driven thinking 
                to solve real-world problems."
              </p>
            </div>
            </div>

            {/*Right Column - Hilights */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className="glass p-6 rounded-2xl animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                            <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                            {item.description}
                    </p>
                </div>
                ))}

            </div>
           </div> 
        </div>
    </section>
    );
};     