

export const personalInfo = {
    user: "halcyski",
    host: "portfolio",
    name: "Halcyon Skinner",
    university: "Northeastern University",
    major: "Computer Science -- Concentration in Systems",
    minor: "Computer Engineering",
    status: "Co-Op @ STR",
    contact: {
        email: "skinner.h@northeastern.edu",
        github: "https://github.com/halcyski",
        linkedin: "https://www.linkedin.com/in/halcy",
    }
};

export const projectsData = [
    {
        permissions: "-rwxr-xr-x",
        owner: personalInfo.user,
        name: "Digital-CPU",
        description: "Single-Cycle CPU with custom instruction set, 4x32 register file, ALU; Turing Complete",
        link: "https://github.com/halcyski/digital-cpu",
    },
    {
        permissions: "-rwxr-xr-x",
        owner: personalInfo.user,
        name: "Ring 0 Linux Kernel Anti-Cheat",
        description: "Kerenel Level Anti-Cheat for Linux systems, developed on WSL2 and Linux natively",
        link: "#"
    }, 


];
