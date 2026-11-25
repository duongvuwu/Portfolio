/* Safari needs an explicit role for lists styled without markers. */
/* eslint jsx-a11y/no-redundant-roles: ["warn", { "ul": ["list"] }] */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiArrowUp, FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { featuredProjects, otherProjects, profile, skillGroups } from "./portfolio";
import "./App.css";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const inlineNavigation = "(min-width: 48rem)";

function isPlainClick(event) {
  return !event.defaultPrevented && event.button === 0
    && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey;
}

function Header({ wordmark }) {
  const [{ inline, expanded }, setNavigation] = useState(() => ({
    inline: window.matchMedia(inlineNavigation).matches,
    expanded: false,
  }));
  const [hash, setHash] = useState(() => window.location.hash);
  const header = useRef(null);
  const toggle = useRef(null);
  const links = useRef(null);
  const focusAfterResize = useRef(null);

  useEffect(() => {
    const breakpoint = window.matchMedia(inlineNavigation);
    function updateLayout({ matches }) {
      const focused = document.activeElement;
      if (matches && focused === toggle.current) {
        focusAfterResize.current = links.current.querySelector("a");
      } else if (!matches && links.current.contains(focused)) {
        focusAfterResize.current = toggle.current;
      }
      setNavigation({ inline: matches, expanded: false });
    }
    function updateHash() {
      setHash(window.location.hash);
    }
    breakpoint.addEventListener("change", updateLayout);
    window.addEventListener("hashchange", updateHash);
    return () => {
      breakpoint.removeEventListener("change", updateLayout);
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  useLayoutEffect(() => {
    focusAfterResize.current?.focus();
    focusAfterResize.current = null;
  }, [inline]);

  useLayoutEffect(() => {
    const bar = header.current;
    const root = document.documentElement;
    function measureHeader() {
      root.style.setProperty("--header-size", `${bar.getBoundingClientRect().height}px`);
    }
    measureHeader();
    const observer = new ResizeObserver(measureHeader);
    observer.observe(bar);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--header-size");
    };
  }, []);

  function closeMenu() {
    setNavigation((current) => current.expanded ? { ...current, expanded: false } : current);
  }

  function closeOnNavigation(event) {
    if (isPlainClick(event)) closeMenu();
  }

  function handleKeyDown(event) {
    if (!expanded) return;
    if (event.key === "Escape") {
      event.preventDefault();
      toggle.current.focus();
      closeMenu();
    } else if (event.key === "Tab") {
      const nav = event.currentTarget;
      window.requestAnimationFrame(() => {
        if (!nav.contains(document.activeElement)) closeMenu();
      });
    }
  }

  return (
    <header className="site-header" ref={header}>
      <div className="shell header-inner">
        <a className="wordmark" href="#top" ref={wordmark} onClick={closeOnNavigation}>
          {profile.name}
        </a>
        <nav aria-label="Primary" onKeyDown={handleKeyDown}>
          <button
            className="menu-toggle button"
            type="button"
            hidden={inline}
            aria-controls="primary-links"
            aria-expanded={expanded}
            onClick={() => setNavigation({ inline, expanded: !expanded })}
            ref={toggle}
          >
            Menu <FiChevronDown aria-hidden="true" />
          </button>
          <ul id="primary-links" className="primary-links" hidden={!inline && !expanded} ref={links}>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={hash === `#${id}` ? "location" : undefined}
                  onClick={closeOnNavigation}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function ProjectDetails({ project }) {
  const context = [project.role, project.type].filter(Boolean).join(" · ");
  return (
    <div className="project-details">
      {context && <p className="project-context">{context}</p>}
      {project.contribution && <p>{project.contribution}</p>}
      <p className="project-technologies">
        <span className="visually-hidden">Technologies: </span>
        {project.technologies.join(" · ")}
      </p>
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      <a href={project.sourceUrl}>
        View source<span className="visually-hidden"> for {project.title}</span>
        <FiArrowUpRight aria-hidden="true" />
      </a>
      {project.demoUrl && (
        <a href={project.demoUrl}>
          Demo &amp; credits<span className="visually-hidden"> for {project.title}</span>
          <FiArrowUpRight aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function App() {
  const wordmark = useRef(null);

  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target) return;
    const frame = window.requestAnimationFrame(() => target.scrollIntoView());
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function focusFragment(event) {
    if (!isPlainClick(event)) return;
    const link = event.target.closest("a[href^='#']");
    if (!link) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    window.requestAnimationFrame(() => {
      if (window.location.hash !== link.hash) return;
      target.scrollIntoView();
      const focusTarget = link.hash === "#top" ? wordmark.current : target;
      focusTarget?.focus({ preventScroll: true });
    });
  }

  return (
    <div id="top" onClick={focusFragment}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header wordmark={wordmark} />
      <main>
        <section className="hero">
          <div className="shell">
            <h1 id="main-content" tabIndex={-1}>{profile.name}</h1>
            <p>{profile.introduction}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects</a>
              <a className="button" href="#contact">Contact</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell about-layout">
            <div className="about-copy">
              <h2 id="about" tabIndex={-1}>About</h2>
              <p>{profile.about}</p>
            </div>
            <figure className="terminal">
              <figcaption>profile.txt</figcaption>
              <dl>
                <dt><code>$ whoami</code></dt>
                <dd>{profile.handle}</dd>
                <dt><code>$ interests</code></dt>
                <dd>{profile.interests.map((interest) => <div key={interest}>{interest}</div>)}</dd>
              </dl>
            </figure>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <h2 id="skills" tabIndex={-1}>Skills</h2>
            <div className="skills-grid">
              {skillGroups.map(({ name, technologies }) => (
                <div className="skill-group" key={name}>
                  <h3>{name}</h3>
                  <ul role="list" className="skills-list">
                    {technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <h2 id="projects" tabIndex={-1}>Projects</h2>
            <ul role="list" className="featured-projects" aria-label="Featured projects">
              {featuredProjects.map((project, index) => (
                <li key={project.title} className={index === 0 ? "featured-lead" : undefined}>
                  <article className="project-card">
                    <div className="project-summary">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-card-body">
                      <ProjectDetails project={project} />
                      <ProjectLinks project={project} />
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            <h3 className="archive-heading">More projects and coursework</h3>
            <ul role="list" className="project-archive">
              {otherProjects.map((project) => (
                <li key={project.title}>
                  <article className="archive-project">
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <ProjectDetails project={project} />
                    </div>
                    <ProjectLinks project={project} />
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section contact">
          <div className="shell">
            <h2 id="contact" tabIndex={-1}>Contact</h2>
            <p>{profile.contact}</p>
            <a className="button" href={profile.githubUrl}>
              GitHub · @{profile.handle} <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>{profile.name}</p>
          <a href="#top">Back to top <FiArrowUp aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
