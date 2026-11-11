import "./App.css";

const charterGroups = [
  {
    title: "Release Management",
    items: [
      "I own platform releases. I sequence rollouts across environments, make sure database migrations go out first, write the change records and release notes, keep the release calendar up to date, and run pre-prod deployments",
      "Update leadership on release status daily with up to 4 releases being packaged concurrently",
    ],
  },
  {
    title: "Test Automation & Quality",
    items: [
      "Resolved 500+ regression failures by tracing each one to its root cause: code defects, test defects, bad test data, or upstream dependencies",
      "Triaged before/after test summaries to find failure clusters and fix them before leaving pre-production",
      "Built a Python triage toolchain that fingerprints test runs, figures out which environment they came from, and builds failure trend dashboards",
      "Built WireMock integration test suites for OAuth flows bringing coverage +30%, running against a local Cassandra, Redis and WireMock setup",
    ],
  },
  {
    title: "Architecture",
    items: [
      "Designed and built a response simulation plugin for the performance team. It returns delays, status codes and bodies by percentage, so they can test how services behave when upstreams are slow or failing",
      "Wrote up two ways to build that plugin, got the leads to sign off on one, then built it",
      "Reviewed and fixed AI-generated documentation across 37 service repos for security and accuracy: repaired broken diagrams and changelogs and took out internal-only details",
    ],
  },
  {
    title: "Development",
    items: [
      "Moved legacy tests over to modern Spring Boot patterns",
      "Fixed a circuit breaker that could never open because a new one was created on every request.",
      "Modernized 10+ services: Java 11 to 21, Spring Boot 2.7 to 3.x, and Spring Data for Cassandra and reactive Redis",
    ],
  },
  {
    title: "Debugging",
    items: [
      "Tracked down recurring production errors using distributed tracing",
      "Root-caused a multi-service login slowdown that ran through the application, the JVM, Kubernetes and the service mesh",
      "Found a Spring dependency injection bug in a shared logging library that left a logging field blank across a service, and fixed it",
    ],
  },
  {
    title: "AI Tooling",
    items: [
      "Test triage: a finished regression run gets a test summary verdict in less than a minute",
      "Environment health: a full pod check in about 3 seconds shows us the environment health, saving us a 30-minute testing run",
      "Daily records: an agent rebuilds my work log from session history. It recovered 7 working days I hadn't written up and saves 10 minutes each day",
      "Learning the system: I curated knowledge bases and built a tutor agent with a course, so I get answers about a complex platform without digging through dozens of repos. Creating documentation, diagrams, and answering questions in seconds",
      "I connected my agents to the team's ticketing, docs, code and logging tools (MCP) so one request pulls everything I need, and each agent gets only the access it needs for assisting in everyday tasks with the right context",
    ],
  },
];

const helpDeskItems = [
  "Help Desk for Engineering students and staff at Colorado State University",
  "Built, repaired and deployed systems for engineering students and staff",
  "Troubleshot issues in person, by phone, and remotely through FreshService, RDP and TeamViewer",
  "Student account management, computer assembly and system software deployment",
];

const projects = [
  {
    name: "Portfolio Webserver",
    tech: "React · Vite · Raspberry Pi · Apache",
    date: "Mar 2025 - Present",
    links: [
      { label: "Repo", href: "https://github.com/nkiv/pi-portfolio" },
      { label: "Live", href: "https://nkivett.com/" },
    ],
    text: "My portfolio site, self-hosted on a Raspberry Pi. I moved it from PHP to React and Vite and got load times under a second. I handle the DNS, Apache config, SSL certs and uptime monitoring myself on the Pi, with secure tunneling for lightweight edge hosting.",
  },
  {
    name: "Biscuits from Outerspace",
    tech: "JavaScript · Phaser · Game jam #1681",
    links: [
      { label: "GitHub", href: "https://github.com/nkiv/Biscuits-from-Outerspace" },
      { label: "itch.io", href: "https://nkiv.itch.io/biscuits-from-outerspace" },
    ],
    text: "Demonstrated my ability to learn and use a new framework. Created a prototype with limited time using manuals and tutorials. Strengthened proficiency in JavaScript and game development. Submission was judged by peer game developers.",
  },
  {
    name: "Virtual Reality Drawing",
    tech: "Unreal Engine 5 · Blueprints · VR",
    links: [
      { label: "GitHub", href: "https://github.com/csu-hci-projects/CS465_EbertM_KivettN" },
    ],
    text: "A VR project that allows the user to test two different drawing styles. It was used to experiment whether participants are more comfortable drawing in 2D or 3D spaces in VR. Gained experience designing levels in UE5, troubleshooting compatibility, importing and using plugins, player movement, ray casting combined with detection for 2D drawing, creating and destroying objects from events, and coding and debugging Blueprint graphs.",
  },
  {
    name: "Glitch Pong",
    tech: "Lua · Pico-8 · Game jam",
    links: [
      { label: "GitHub", href: "https://github.com/nkiv/pico-8-projects/tree/main/broken-pong" },
      { label: "itch.io", href: "https://nkiv.itch.io/glitch-pong" },
    ],
    text: "Demonstrated the ability to create a prototype in a new programming language with a time constraint. Pong-style game with intentional bugs (jam theme). Created a particle system for the ball. Learned basic collision detection for different object types without pre-made methods.",
  },
  {
    name: "Aim Lab",
    tech: "Lua · Pico-8",
    links: [
      { label: "GitHub", href: "https://github.com/nkiv/pico-8-projects/tree/main/aim-lab" },
      { label: "itch.io", href: "https://nkiv.itch.io/aim-lab" },
    ],
    text: "Uses memory addresses to discern the position of the mouse. Side project for solidifying my PICO-8 game loop knowledge. Uses scene switching, time, and memory passing between scenes.",
  },
];

const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "Python", "C++", "Bash", "Lua", "SQL/CQL"] },
  {
    group: "Frameworks & Libraries",
    items: ["Spring Boot", "Spring Data", "Reactive Redis", "Resilience4j", "TestNG", "JUnit 5", "WireMock", "React"],
  },
  {
    group: "Infrastructure & Data",
    items: ["AWS (IAM, STS, Kinesis)", "Kubernetes", "Helm", "Istio/Envoy", "Docker", "Cassandra", "Redis", "Kafka"],
  },
  { group: "Observability & DevOps", items: ["Datadog", "Splunk", "GitLab CI"] },
  {
    group: "Protocols & Security",
    items: ["OAuth 2.0", "OpenID Connect", "JWT/JWE/JWS", "SAML 2.0", "mTLS", "REST"],
  },
  { group: "AI & Automation", items: ["MCP", "Agent Skills", "Knowledge Bases"] },
];

function Section({ id, title, children }) {
  return (
    <section className="section" id={id}>
      <h2 className="section-title">
        <span className="terminal">~$</span> {title}
      </h2>
      {children}
    </section>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Role({ title, org, orgHref, team, dates, place }) {
  return (
    <div className="role">
      <div className="row">
        <h3>{title}</h3>
        <span className="muted small">{dates}</span>
      </div>
      <div className="row">
        <p className="muted">
          <ExternalLink href={orgHref}>{org}</ExternalLink>
          {team && ` · ${team}`}
        </p>
        <span className="muted small">{place}</span>
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      <Section id="about" title="about">
        <div className="prose">
          <p>
            I'm a backend engineer on the identity platform at Charter
            Communications. It's a large OAuth2/OIDC system that handles login
            and token refresh for consumer and enterprise products, with more
            than a hundred components shipped together on a shared release.
          </p>
          <p>
            I dig into pre-production issues with tracing and logging tools,
            design and build new service features, and ship them through CI/CD
            to Kubernetes. I own platform releases and the regression suite that
            decides when code is ready to merge.
          </p>
          <p>
            I understand a system before I change it, I use AI to ask my
            dumbest questions, and I learn through failing. When something goes
            wrong I think of every way I could fix it and plan out the fix
            before I change anything. I'm careful with every action I take so as
            few failures as possible are created.
          </p>
          <p>
            AI is a big part of how I work faster. I turned the tasks I repeat
            most into agent skills and tools.
          </p>
          <p>
            Outside of work, I self-host projects on a Raspberry Pi and make
            small games in Godot and Pico-8 game engines. I build software tools
            I find useful for cost saving and automation in my personal life.
          </p>
        </div>
      </Section>

      <Section id="experience" title="experience">
        <article className="entry">
          <Role
            title="Software Developer I"
            org="Charter Communications (Spectrum)"
            orgHref="https://www.spectrum.com/"
            team="OAuth Platform Team"
            dates="Nov 2025 - Present"
            place="Greenwood Village, CO"
          />
          <p className="lead">
            Auth at scale. More than a hundred components handling login, token
            refresh and device authentication for consumer and enterprise
            products, built with Java and Spring on AWS and Kubernetes.
          </p>
          {charterGroups.map((group, index) => (
            <details className="group" key={group.title} open={index < 2}>
              <summary>
                {group.title}
                <span className="count">{group.items.length}</span>
              </summary>
              <ul className="bullets">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          ))}
        </article>

        <article className="entry">
          <Role
            title="IT Help Desk Technician"
            org="Engineering Technology Services"
            orgHref="https://www.engr.colostate.edu/ets/"
            team="Colorado State University"
            dates="Oct 2023 - May 2025"
            place="Fort Collins, CO"
          />
          <ul className="bullets">
            {helpDeskItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </Section>

      <Section id="projects" title="projects">
        {projects.map((p) => (
          <article className="entry project" key={p.name}>
            <div className="row">
              <h3>{p.name}</h3>
              <span className="project-links small">
                {p.links.map((l) => (
                  <ExternalLink key={l.href} href={l.href}>
                    {l.label}
                  </ExternalLink>
                ))}
              </span>
            </div>
            <p className="muted small">
              {p.tech}
              {p.date && ` · ${p.date}`}
            </p>
            <p className="project-text">{p.text}</p>
          </article>
        ))}
      </Section>

      <Section id="skills" title="skills">
        <dl className="skills">
          {skills.map((s) => (
            <div key={s.group}>
              <dt>{s.group}</dt>
              <dd>{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="education" title="education">
        <article className="entry">
          <Role
            title="Bachelor of Science, Computer Science"
            org="Colorado State University"
            orgHref="https://www.colostate.edu/"
            dates="Aug 2021 - Aug 2025"
            place="Fort Collins, CO"
          />
        </article>
      </Section>
    </>
  );
}
export default About;