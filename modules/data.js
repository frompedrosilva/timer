export const PROJECTS = [
    {
        id: 1,
        title: "From Concept to Launch: Building My Photography Portfolio",
        slug: "from-concept-to-launch-building-my-photography-portfolio",
        description: "A look behind the creation of Photo, my personal photography website where I showcase my work and passion for visual storytelling.",
        image: "https://frompedrosilva.nl/assets/img/img_8",
        tech: ["React", "Node.js", "Tailwind", "HTML", "PHP"],
        github: "",
        demo: "https://photo.frompedrosilva.nl/",
        featured: true,
        isPrivate: false,
        isDevelopment: false,
        status: "public",
        content: `

    <p>
      While software development is my primary profession, photography has been a passion of mine for many years. 
      I created <strong>Photo</strong> as a dedicated platform to showcase some of my favourite work, experiments, and visual stories.
    </p>

    <p>
      The project started with a simple goal: create a clean and immersive experience where the photographs take centre stage. 
      Rather than overwhelming visitors with complex layouts, I focused on simplicity, performance, and elegant presentation.
    </p>

    <br><h2><strong>Project Goals</strong></h2>

    <ul>
      <li>Create a modern and responsive photography portfolio.</li>
      <li>Provide a distraction-free viewing experience.</li>
      <li>Highlight landscapes, urban photography, and personal projects.</li>
      <li>Ensure fast loading times across all devices.</li>
    </ul>

    <br><h2><strong>Design Philosophy</strong></h2>

    <p>
      Photography is all about capturing moments, emotions, and perspectives. The website was designed with the same philosophy in mind. 
      Every design decision was made to keep the focus on the images while maintaining a premium and professional appearance.
    </p>

    <br><h2><strong>Technology Stack</strong></h2>

    <p>
      The website was built using modern web technologies, focusing on performance, responsiveness, and maintainability. 
      Clean code and a lightweight architecture ensure that the experience remains smooth regardless of device or screen size.
    </p>

    <br><h2><strong>What I Learned</strong></h2>

    <p>
      This project allowed me to combine two of my favourite interests: technology and photography. 
      It reinforced the importance of visual design, user experience, and storytelling through both code and imagery.
    </p>

    <p>
      This project <strong>Photo</strong> continues to evolve as I capture new moments and improve the platform. 
      It represents not only a portfolio of photographs, but also a reflection of my creativity outside the world of software development.
    </p>
    
    `
    },
    {
        id: 2,
        title: "Building CV: Transforming My Resume Into a Digital Experience",
        slug: "building-cv-transforming-my-resume-into-a-digital-experience",
        description: "A look at the development and design decisions behind CV, my digital resume platform built to showcase experience, skills, and achievements beyond a traditional PDF.",
        image: "https://frompedrosilva.nl/assets/img/banner01",
        tech: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
        github: "",
        demo: "https://cv.frompedrosilva.nl/",
        featured: true,
        isPrivate: true,
        isDevelopment: false,
        status: "public",
        content: `
<p>
    Traditional resumes are great for summarising experience, but they often fail to showcase the full picture. That's why I created <strong>CV</strong>, a digital version of my resume designed to provide a more engaging and comprehensive way to present my professional journey.
</p>

<p>
    Rather than limiting myself to a static PDF, I wanted to build a platform where visitors could explore my experience, technical skills, certifications, projects, and achievements through a modern and interactive interface.
</p>

<br><h2><strong>The Idea Behind the Project</strong></h2>

<p>
    The goal was simple: transform a traditional resume into a digital experience that better reflects who I am as a developer and technology professional.
</p>

<p>
    A resume should be more than a list of jobs and responsibilities. It should tell a story, highlight growth, and provide context behind the skills and experience acquired throughout a career.
</p>

<br><h2><strong>Key Features</strong></h2>

<ul>
    <li>Interactive presentation of professional experience.</li>
    <li>Detailed overview of technical skills and competencies.</li>
    <li>Certifications, achievements, and continuous learning milestones.</li>
    <li>Responsive design optimized for desktop, tablet, and mobile devices.</li>
    <li>Modern and accessible user experience.</li>
</ul>

<br><h2><strong>Design & Development</strong></h2>

<p>
    The project was developed with a strong focus on clarity, usability, and performance. Every section was carefully structured to ensure visitors could quickly find the information they were looking for while maintaining a clean and professional appearance.
</p>

<p>
    The challenge was finding the right balance between a traditional resume format and a modern web experience. The final result combines both worlds, offering familiar information presented through a more engaging interface.
</p>

<br><h2><strong>Why a Digital CV?</strong></h2>

<p>
    In today's technology-driven world, a digital resume provides opportunities that a PDF simply cannot. It allows for richer content, better organization, easier updates, and a more dynamic presentation of skills and accomplishments.
</p>

<p>
    It also serves as a practical demonstration of my development skills, showcasing not only what I've done professionally but also how I approach design, structure, and user experience.
</p>

<br><h2><strong>Looking Ahead</strong></h2>

<p>
    CV will continue to evolve alongside my career. As I gain new experiences, certifications, and technical knowledge, the platform will grow to reflect that journey.
</p>

<p>
    Ultimately, this project is more than a digital resume. It is a living representation of my professional development, continuous learning, and passion for technology.
</p>

`
    },



    {
        id: 2,
        title: "Task Management App",
        slug: "task-management-app",
        description: "Collaborative tool for teams to manage projects and track productivity.",
        image: "https://picsum.photos/seed/task/800/600",
        tech: ["TypeScript", "Next.js", "Prisma"],
        github: "",
        demo: "",
        featured: true,
        isPrivate: false,
        isDevelopment: false,
        status: "draft",
        content: `
            <p>A productivity tool designed for remote teams. It allows users to create boards, assign tasks, and track progress using a Kanban-style interface.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>Drag-and-drop task management</li>
                <li>Team collaboration and comments</li>
                <li>Automated email notifications</li>
                <li>Performance tracking analytics</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "AI Image Generator",
        slug: "ai-image-generator",
        description: "Web application that generates unique images from text prompts using AI.",
        image: "https://picsum.photos/seed/ai/800/600",
        tech: ["Python", "React", "OpenAI"],
        github: "https://github.com/pedro/ai-gen",
        demo: "https://ai-gen.example.com",
        featured: true,
        isPrivate: false,
        isDevelopment: false,
        status: "draft",
        content: `
            <p>Leveraging the power of DALL-E and OpenAI, this application allows users to generate high-quality images from simple text descriptions. It includes a community gallery where users can share their creations.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>Text-to-image generation</li>
                <li>Image history and personal gallery</li>
                <li>Social sharing capabilities</li>
                <li>Advanced prompt engineering tips</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Weather Dashboard",
        slug: "weather-dashboard",
        description: "Real-time weather tracking with interactive maps and 7-day forecasts.",
        image: "https://picsum.photos/seed/weather/800/600",
        tech: ["JavaScript", "API", "Chart.js"],
        github: "https://github.com/pedro/weather",
        demo: "https://weather.example.com",
        featured: false,
        isPrivate: false,
        isDevelopment: false,
        status: "draft",
        content: `
            <p>A comprehensive weather application that provides detailed forecasts and interactive weather maps. It uses the OpenWeatherMap API to fetch real-time data for any location worldwide.</p>
        `
    },
    {
        id: 5,
        title: "Fitness Tracker",
        slug: "fitness-tracker",
        description: "Mobile-first web app for logging workouts and monitoring health metrics.",
        image: "https://picsum.photos/seed/fitness/800/600",
        tech: ["React Native", "Firebase"],
        github: "https://github.com/pedro/fitness",
        demo: "https://fitness.example.com",
        featured: false,
        isPrivate: false,
        isDevelopment: true,
        status: "publdraftic",
        content: `
            <p>This fitness tracker helps users stay on top of their health goals. It includes workout logging, calorie tracking, and progress visualization through interactive charts.</p>
        `
    },
    {
        id: 6,
        title: "Crypto Wallet",
        slug: "crypto-wallet",
        description: "Secure digital wallet for managing and trading various cryptocurrencies.",
        image: "https://picsum.photos/seed/crypto/800/600",
        tech: ["Vue.js", "Web3.js", "Ethereum"],
        github: "https://github.com/pedro/crypto",
        demo: "https://crypto.example.com",
        featured: false,
        isPrivate: true,
        isDevelopment: false,
        status: "draft",
        content: `
            <p>A secure and intuitive crypto wallet built for the modern web. It supports multiple chains and provides a seamless interface for managing digital assets.</p>
        `
    },
{
    id: 8,
    title: "High-End Developer Portfolio Platform",
    slug: "high-end-developer-portfolio",
    description: "An editorial-style, high-performance portfolio designed to showcase technical expertise and personal brand.",
    image: "https://picsum.photos/seed/highenddev/800/600",
    tech: ["JavaScript", "Tailwind", "Node.js", "Express"],
    github: "",
    demo: "",
    featured: true,
    isPrivate: false,
    isDevelopment: false,
    status: "draft",
    content: `
        <p><img src="https://picsum.photos/seed/editorial/800/400" alt="High-end portfolio preview" style="width:100%; border-radius:8px; margin-bottom:16px;" /></p>

            <h3><strong>Project Overview</strong></h3>
            <p>
                A <strong>high-end</strong>, <em>editorial-style</em> professional portfolio developed for a Full-Stack Developer. The application features a <strong>"technical dashboard"</strong> aesthetic, utilizing <i>glassmorphism</i>, <strong>precise data grids</strong>, and <strong>bold typography</strong> to convey a modern, expert atmosphere.
            </p>

            <h3><strong>Tech Stack & Tools</strong></h3>
            <ul>
                <li><strong>Frontend:</strong>
                    <ul>
                        <li><strong>HTML5 & JavaScript (ES6+):</strong> Modular vanilla logic for high-performance rendering.</li>
                        <li><strong>Tailwind CSS:</strong> A <em>utility-first</em> framework providing rapid, responsive design patterns.</li>
                        <li><strong>Lucide Icons:</strong> Consistent SVG icon set for technical visual cues.</li>
                        <li><strong>Google Fonts:</strong> Specialized pairings of <em>Inter</em> and <em>Space Grotesk</em>.</li>
                        <li><strong>IntersectionObserver API:</strong> Powering <strong>Scroll Spy</strong> navigation and <em>on-scroll reveal</em> animations.</li>
                    </ul>
                </li>
                <li><strong>Backend:</strong>
                    <ul>
                        <li><strong>Node.js & Express:</strong> The engine handling routing and server-side operations.</li>
                        <li><strong>Custom SEO Engine:</strong> Dynamic injection of meta tags and <em>Open Graph</em> data for maximum visibility.</li>
                    </ul>
                </li>
            </ul>

            <h3><strong>Key Features & Content</strong></h3>
            <ul>
                <li><strong>Dynamic Portfolio:</strong> A categorized project gallery with <strong>Status Badges</strong> (<em>Live, Work in Progress, Private</em>).</li>
                <li><strong>Technical Blog:</strong> A custom system for sharing <i>professional insights</i> and <i>case studies</i>.</li>
                <li><strong>Interactive Skills Dashboard:</strong> Visual proficiency tracking for <strong>Frontend</strong>, <strong>Backend</strong>, and <strong>Tools</strong>.</li>
                <li><strong>Modern Navigation:</strong> <strong>Clean, Hash-less URLs</strong> with smooth auto-scrolling and <em>active section highlighting</em>.</li>
                <li><strong>Advanced Theme Engine:</strong> Full <strong>Dark Mode</strong> support that persists via <em>LocalStorage</em>.</li>
            </ul>

            <h3><strong>Design Philosophy</strong></h3>
            <p>
                The project emphasizes <strong>Architectural Honesty</strong> and <strong>Craftsmanship</strong>. By avoiding generic templates, the app delivers a <strong>bespoke, polished interface</strong> that balances <em>readability</em> and <em>high-tech interaction</em> for a premium user experience.
            </p>
    `
}
];

export const BLOG_POSTS = [
    {
        id: 1,
        title: "Behind FromPedroSilva.nl: Building My Personal Developer Portfolio",
        slug: "behind-frompedrosilva-building-my-personal-developer-portfolio",
        excerpt: "An inside look at the vision, development process, and technical decisions behind my personal website.",
        image: "https://frompedrosilva.nl/assets/img/banner01",
        date: "July 05, 2026",
        status: "public",
        featured: true,
        content: `

<p>
    Hi! <br><br>
    After months of planning, designing, and refining, I'm excited to officially launch my new personal website: <strong>frompedrosilva.nl</strong>!
</p>

<p>
    This project represents more than just another website. It is a central hub that brings together my professional experience, technical projects, articles, and personal interests into a single platform designed to showcase who I am as a developer.
</p>

<br><h2><strong>Why Build a Personal Website?</strong></h2>

<p>
    As someone passionate about technology, I wanted a space that would allow me to present my work beyond a traditional CV. While résumés provide a summary of skills and experience, a personal website offers the opportunity to demonstrate those skills through real projects, case studies, and technical content.
</p>

<p>
    FromPedroSilva.nl was created with that goal in mind: to serve as a living portfolio that evolves alongside my career.
</p>

<br><h2><strong>What You'll Find</strong></h2>

<p>
    <strong>The website includes several key sections</strong>:
</p>
<ul>
    <li>- A curated portfolio of personal and professional projects.</li>
    <li>- Detailed project pages and case studies.</li>
    <li>- Technical articles and development insights.</li>
    <li>- Information about my experience and technical background.</li>
    <li>- Links to platforms where I share my work and connect with the community.</li>
</ul>

<p>
    Every section was designed to provide a clearer picture of my journey as a developer and technology enthusiast.
</p>

<br><h2><strong>Design and Development</strong></h2>

<p>
    The website was built with a strong focus on performance, usability, and clean design. Rather than relying on unnecessary complexity, I focused on creating a fast, responsive, and accessible experience that works seamlessly across desktop and mobile devices.
</p>

<p>
    The project also provided an opportunity to experiment with modern UI patterns, animations, and interactive components while maintaining a professional appearance.
</p>

<br><h2><strong>Looking Ahead</strong></h2>

<p>
    This launch is only the beginning.
</p>

<p>
    New projects, articles, improvements, and features will continue to be added as the platform grows. The goal is to create a space that not only showcases my work but also documents my continuous learning journey in software development and technology.
</p>

<p>
    Thank you for visiting FromPedroSilva.nl. I hope you enjoy exploring the projects, articles, and ideas shared throughout the site.
</p>

<br><p>
    <strong>See you in the next update!</strong>
</p>

`
    },



    {
        id: 2,
        title: "Mastering Tailwind CSS",
        slug: "mastering-tailwind-css",
        excerpt: "Tips and tricks for building beautiful interfaces faster than ever.",
        content: `
            <p>Tailwind CSS has revolutionized the way we think about styling on the web. By providing a utility-first approach, it allows developers to build complex designs without ever leaving their HTML.</p>
            <p>But mastering Tailwind is more than just knowing the classes. It's about understanding the design system behind it and how to leverage its configuration to create unique brand identities.</p>
            <h3>Pro Tips for Tailwind Success:</h3>
            <ul>
                <li>Use @apply sparingly; stick to utility classes in your components.</li>
                <li>Leverage the tailwind.config.js for custom themes and spacing.</li>
                <li>Use plugins like Typography and Aspect Ratio for common tasks.</li>
                <li>Keep your HTML clean by extracting repeated patterns into reusable components.</li>
            </ul>
            <p>With these strategies, you'll be building production-ready interfaces in record time.</p>
        `,
        date: "Feb 28, 2024",
        image: "https://picsum.photos/seed/blog2/800/600",
        featured: true,
        status: "draft"
    },
    {
        id: 3,
        title: "JavaScript Performance Optimization",
        slug: "js-performance-optimization",
        excerpt: "How to write faster, more efficient code for the modern web.",
        content: `
            <p>Performance is a feature. In today's fast-paced digital world, users expect websites to load instantly and respond smoothly. JavaScript often plays a major role in the perceived performance of a site.</p>
            <p>Optimizing JavaScript isn't just about micro-optimizations; it's about making smart architectural choices and understanding how the browser executes your code.</p>
            <h3>Core Optimization Techniques:</h3>
            <ul>
                <li>Minimize DOM access and manipulation.</li>
                <li>Use requestAnimationFrame for animations.</li>
                <li>Implement lazy loading for non-critical scripts.</li>
                <li>Leverage Web Workers for heavy computations.</li>
            </ul>
            <p>By following these principles, you can ensure your applications remain snappy and responsive even as they grow in complexity.</p>
        `,
        date: "Jan 15, 2024",
        image: "https://picsum.photos/seed/blog3/800/600",
        featured: false,
        status: "draft"
    },
{
    id: 4,
    title: "Understanding REST vs GraphQL",
    slug: "rest-vs-graphql",
    excerpt: "A practical comparison between REST and GraphQL for modern APIs.",
    content: `
        <p><img src="https://picsum.photos/seed/api/800/400" alt="API architecture" style="width:100%; border-radius:8px; margin-bottom:16px;" /></p>

        <p><strong>APIs are the backbone of modern applications.</strong> Choosing the right architecture can significantly impact performance, scalability, and developer experience.</p>

        <p><strong>REST</strong> has been the industry standard for years, offering simplicity and predictability. <strong>GraphQL</strong> introduces a more flexible approach, allowing clients to request only the data they need.</p>

        <h3>How REST Works</h3>
        <p><strong>REST relies on multiple endpoints</strong>, each representing a specific resource. It follows a structured approach that is easy to understand and widely supported.</p>

        <h3>How GraphQL Works</h3>
        <p><strong>GraphQL uses a single endpoint</strong> and lets clients define the structure of the response, reducing unnecessary data transfer.</p>

        <h3>Core Differences:</h3>
        <ul>
            <li><strong>Multiple endpoints (REST)</strong> vs <strong>single endpoint (GraphQL)</strong></li>
            <li><strong>No over-fetching</strong> with GraphQL</li>
            <li><strong>Simpler caching</strong> in REST</li>
            <li><strong>Strong typing and introspection</strong> in GraphQL</li>
        </ul>

        <h3>When to Use Each</h3>
        <p><strong>REST is ideal for simpler systems</strong>, while <strong>GraphQL shines in complex applications</strong> where flexibility and performance are critical.</p>

        <p><strong>Choosing the right tool depends on your use case.</strong></p>
    `,
    date: "Feb 02, 2024",
    image: "https://picsum.photos/seed/blog4/800/600",
    featured: false,
    status: "draft"
},
{
    id: 5,
    title: "Clean Code Principles Every Developer Should Know",
    slug: "clean-code-principles",
    excerpt: "Writing code that is readable, maintainable, and scalable.",
    content: `
        <p><img src="https://picsum.photos/seed/clean/800/400" alt="Clean code" style="width:100%; border-radius:8px; margin-bottom:16px;" /></p>

        <p><strong>Clean code is about clarity, simplicity, and maintainability.</strong> It reduces bugs, improves collaboration, and speeds up development.</p>

        <p><strong>Code is read more than it is written.</strong> Writing readable code is one of the most valuable skills you can develop.</p>

        <h3>Key Principles</h3>
        <ul>
            <li><strong>Meaningful names</strong> for variables and functions</li>
            <li><strong>Small, focused functions</strong></li>
            <li><strong>DRY principle</strong> (Don’t Repeat Yourself)</li>
            <li><strong>Self-documenting code</strong></li>
        </ul>

        <h3>Common Pitfalls</h3>
        <ul>
            <li><strong>Overcomplicating simple solutions</strong></li>
            <li><strong>Inconsistent naming</strong></li>
            <li><strong>Large, unreadable functions</strong></li>
        </ul>

        <h3>Practical Tips</h3>
        <p><strong>Refactor regularly</strong>, review your code, and think about how easily someone else can understand it.</p>

        <p><strong>Clean code is a mindset, not a one-time task.</strong></p>
    `,
    date: "Feb 18, 2024",
    image: "https://picsum.photos/seed/blog5/800/600",
    featured: true,
    status: "draft"
},
{
    id: 6,
    title: "Introduction to Docker for Developers",
    slug: "docker-for-developers",
    excerpt: "Learn how Docker simplifies development and deployment workflows.",
    content: `
        <p><img src="https://picsum.photos/seed/docker/800/400" alt="Docker containers" style="width:100%; border-radius:8px; margin-bottom:16px;" /></p>

        <p><strong>Docker changed how developers build and ship applications.</strong> It introduces containerization to ensure consistency across environments.</p>

        <p><strong>Your app runs the same everywhere</strong> — development, testing, and production.</p>

        <h3>What Problem Does Docker Solve?</h3>
        <p><strong>Environment inconsistency</strong> is a major issue. Docker eliminates the classic <strong>"it works on my machine"</strong> problem.</p>

        <h3>Main Benefits</h3>
        <ul>
            <li><strong>Consistent environments</strong></li>
            <li><strong>Lightweight compared to VMs</strong></li>
            <li><strong>Fast setup and onboarding</strong></li>
            <li><strong>Scalable deployments</strong></li>
        </ul>

        <h3>Basic Workflow</h3>
        <ul>
            <li><strong>Create</strong> a Dockerfile</li>
            <li><strong>Build</strong> an image</li>
            <li><strong>Run</strong> containers</li>
        </ul>

        <h3>Use Cases</h3>
        <p><strong>Microservices, CI/CD pipelines, and cloud applications</strong> benefit the most from Docker.</p>

        <p><strong>Once you adopt Docker, your workflow becomes predictable and efficient.</strong></p>
    `,
    date: "Mar 05, 2024",
    image: "https://picsum.photos/seed/blog6/800/600",
    featured: false,
    status: "draft"
}
];

export const SERVICES = [
    {
        id: 1,
        title: "Front-End Development",
        description: "Building responsive, high-performance user interfaces with modern frameworks.",
        icon: "globe"
    },
    {
        id: 2,
        title: "Back-End Development",
        description: "Designing scalable server-side architectures and robust API integrations.",
        icon: "layers"
    },
    {
        id: 3,
        title: "Website Optimization",
        description: "Improving load times, SEO rankings, and overall user experience metrics.",
        icon: "zap"
    },
    {
        id: 4,
        title: "Mobile Solutions",
        description: "Developing cross-platform mobile applications for iOS and Android.",
        icon: "smartphone"
    }
];

export const SKILLS = [
    // Front-End (core)
    { name: "React", level: 85, category: "Front-End", icon: "atom" },
    { name: "TypeScript", level: 80, category: "Front-End", icon: "file-json" },
    { name: "Tailwind CSS", level: 90, category: "Front-End", icon: "palette" },
    { name: "JavaScript (ES6+)", level: 90, category: "Front-End", icon: "code" },

    // Back-End (core)
    { name: "Node.js", level: 80, category: "Back-End", icon: "server" },
    { name: "REST APIs", level: 80, category: "Back-End", icon: "plug" },
    { name: "PostgreSQL", level: 70, category: "Back-End", icon: "database" },

    // Tools (essenciais)
    { name: "Git", level: 90, category: "Tools", icon: "git-merge" },
    { name: "GitHub", level: 85, category: "Tools", icon: "github" },
    { name: "Docker", level: 60, category: "Tools", icon: "container" }
];
