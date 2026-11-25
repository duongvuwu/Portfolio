import { act, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

let breakpoint;
let updateBreakpoint;

beforeEach(() => {
  window.history.replaceState(null, "", "/Portfolio/");
  breakpoint = {
    matches: false,
    addEventListener: jest.fn((type, listener) => { updateBreakpoint = listener; }),
    removeEventListener: jest.fn(),
  };
  window.matchMedia = jest.fn(() => breakpoint);
  window.ResizeObserver = class {
    observe() {}
    disconnect() {}
  };
  Element.prototype.scrollIntoView = jest.fn();
});

test("renders the portfolio and source links on the initial render", () => {
  render(<App />);

  expect(screen.getByRole("heading", { level: 1, name: "Duong Vu" })).toBeVisible();
  expect(screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.id))
    .toEqual(["about", "skills", "projects", "contact"]);
  expect(screen.getAllByRole("link", { name: /^View source for / })).toHaveLength(9);
  expect(screen.getAllByRole("link", { name: /^Demo & credits for / })).toHaveLength(1);
  expect(screen.getByRole("link", { name: "Demo & credits for Word-by-Word Video Supercut" }))
    .toHaveAttribute("href", "https://github.com/duongvuwu/word-by-word-video-supercut-demo/blob/main/phase1-demo/README.md");
  const featured = screen.getByRole("list", { name: "Featured projects" });
  const archive = screen.getByRole("list", { name: "More projects and coursework" });
  expect(within(featured).getAllByRole("heading")).toHaveLength(3);
  expect(within(featured).queryByRole("heading", { name: "Software License Tracker" })).toBeNull();
  expect(within(featured).queryByRole("heading", { name: "OpenGL Space Station" })).toBeNull();
  expect(within(archive).getByRole("heading", { name: "Software License Tracker" })).toBeVisible();
  const openGl = within(archive).getByRole("heading", { name: "OpenGL Space Station" }).closest("article");
  expect(within(openGl).getByText("C++ / OpenGL Contributor · Team project")).toBeVisible();
  expect(screen.getByRole("heading", { name: "Frontend Development" })).toBeVisible();
  expect(screen.getByRole("heading", { name: "Business Analysis" })).toBeVisible();
  expect(screen.getByRole("heading", { name: "Languages and Tools" })).toBeVisible();
  expect(screen.getByText("Retrieval-augmented generation and embeddings")).toBeVisible();
  expect(screen.getByRole("link", { name: "GitHub · @duongvuwu" }))
    .toHaveAttribute("href", "https://github.com/duongvuwu");
});

test("opens and closes the compact navigation and focuses fragment destinations", async () => {
  render(<App />);
  const nav = screen.getByRole("navigation", { name: "Primary" });
  const menu = within(nav).getByRole("button", { name: "Menu" });
  expect(menu).toHaveAttribute("aria-expanded", "false");
  expect(within(nav).queryByRole("link")).toBeNull();

  userEvent.click(menu);
  expect(menu).toHaveAttribute("aria-expanded", "true");
  userEvent.tab();
  expect(within(nav).getByRole("link", { name: "About" })).toHaveFocus();
  userEvent.keyboard("{Escape}");
  expect(menu).toHaveFocus();
  expect(menu).toHaveAttribute("aria-expanded", "false");

  userEvent.click(menu);
  userEvent.click(within(nav).getByRole("link", { name: "Projects" }));
  await waitFor(() => {
    expect(window.location.hash).toBe("#projects");
    expect(screen.getByRole("heading", { name: "Projects", level: 2 })).toHaveFocus();
  });
  expect(menu).toHaveAttribute("aria-expanded", "false");
  userEvent.click(menu);
  const currentLink = within(nav).getByRole("link", { name: "Projects" });
  expect(currentLink).toHaveAttribute("aria-current", "location");
  userEvent.click(currentLink);
  await waitFor(() => expect(screen.getByRole("heading", { name: "Projects", level: 2 })).toHaveFocus());

  userEvent.click(menu);
  const lastLink = within(nav).getByRole("link", { name: "Contact" });
  act(() => lastLink.focus());
  userEvent.tab();
  expect(screen.getByRole("link", { name: "View projects" })).toHaveFocus();
  await waitFor(() => expect(menu).toHaveAttribute("aria-expanded", "false"));
});

test("moves focus when the responsive navigation hides the focused control", () => {
  render(<App />);
  const nav = screen.getByRole("navigation", { name: "Primary" });
  const menu = within(nav).getByRole("button", { name: "Menu" });
  userEvent.click(menu);

  act(() => updateBreakpoint({ matches: true }));
  expect(within(nav).queryByRole("button")).toBeNull();
  expect(within(nav).getByRole("link", { name: "About" })).toHaveFocus();

  act(() => updateBreakpoint({ matches: false }));
  expect(menu).toHaveFocus();
  expect(menu).toHaveAttribute("aria-expanded", "false");
  expect(within(nav).queryByRole("link")).toBeNull();
});

test("aligns a direct section hash without moving focus", async () => {
  window.history.replaceState(null, "", "/Portfolio/#skills");
  breakpoint.matches = true;
  render(<App />);

  const nav = screen.getByRole("navigation", { name: "Primary" });
  expect(within(nav).getByRole("link", { name: "Skills" })).toHaveAttribute("aria-current", "location");
  await waitFor(() => expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(1));
  expect(document.body).toHaveFocus();
});
