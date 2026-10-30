
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Aperture,
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  PlusCircle,
  Building2,
  CalendarDays,
  LogOut,
  UserRound,
} from "lucide-react";
import Image from "next/image";

type NavbarUser = {
  name: string;
  email?: string;
  image?: string;
};

type NavbarProps = {
  user?: NavbarUser | null;
  onLogout?: () => void | Promise<void>;
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Studios", href: "/studios" },
];

const userMenu = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Add New Studio",
    href: "/studios/new",
    icon: PlusCircle,
  },
  {
    label: "My Studio Listings",
    href: "/my-studios",
    icon: Building2,
  },
  {
    label: "My Bookings",
    href: "/my-bookings",
    icon: CalendarDays,
  },
];

export default function Navbar({
  user = null,
  onLogout,
}: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const isActive = (href: string) => {
    const path = href.split("#")[0] || "/";

    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const closeMenus = () => {
    setMobileOpen(false);
    setProfileOpen(false);
  };

  const handleLogout = async () => {
    if (!onLogout) return;

    try {
      setLoggingOut(true);
      await onLogout();
      closeMenus();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-studio-elevated bg-studio-bg/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-19 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenus}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-studio-orange text-studio-bg shadow-lg shadow-studio-orange/10 transition-transform duration-300 group-hover:rotate-12">
            <Aperture size={25} strokeWidth={2.2} />
          </span>

          <span className="text-xl font-bold tracking-tight text-studio-text sm:text-2xl">
            Studio<span className="text-studio-orange">Space</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenus}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 xl:px-4 ${
                  active
                    ? "text-studio-orange"
                    : "text-studio-muted hover:bg-studio-surface hover:text-studio-text"
                }`}
              >
                {link.label}

                {active && (
                  <span className="absolute inset-x-3 -bottom-4.25 h-0.5 rounded-full bg-studio-orange xl:inset-x-4" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Auth / Profile */}
        <div className="hidden items-center gap-3 lg:flex">
          {!user ? (
            <>
              <Link
                href="/login"
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-studio-text transition-colors hover:bg-studio-surface"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-studio-orange px-5 py-2.5 text-sm font-bold text-studio-bg shadow-lg shadow-studio-orange/10 transition-all duration-200 hover:bg-studio-orange-hover hover:shadow-studio-orange/20"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                type="button"
                aria-expanded={profileOpen}
                aria-haspopup="menu"
                onClick={() => setProfileOpen(!profileOpen)}
                className={`flex items-center gap-3 rounded-xl border px-3 py-2 transition-colors ${
                  profileOpen
                    ? "border-studio-orange/50 bg-studio-surface"
                    : "border-transparent hover:border-studio-elevated hover:bg-studio-surface"
                }`}
              >
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={`${user.name}'s avatar`}
                    className="size-9 rounded-full border border-studio-elevated object-cover"
                  />
                ) : (
                  <span className="flex size-9 items-center justify-center rounded-full bg-studio-orange/15 text-studio-orange">
                    <UserRound size={20} />
                  </span>
                )}

                <span className="max-w-32 truncate text-sm font-semibold text-studio-text">
                  {user.name}
                </span>

                <ChevronDown
                  size={16}
                  className={`text-studio-muted transition-transform ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {profileOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-studio-elevated bg-studio-surface p-2 shadow-2xl shadow-black/30"
                >
                  <div className="border-b border-studio-elevated px-3 py-3">
                    <p className="truncate text-sm font-semibold text-studio-text">
                      {user.name}
                    </p>
                    {user.email && (
                      <p className="mt-1 truncate text-xs text-studio-muted">
                        {user.email}
                      </p>
                    )}
                  </div>

                  <div className="py-2">
                    {userMenu.map(({ label, href, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        role="menuitem"
                        onClick={closeMenus}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                          isActive(href)
                            ? "bg-studio-orange/10 text-studio-orange"
                            : "text-studio-muted hover:bg-studio-elevated hover:text-studio-text"
                        }`}
                      >
                        <Icon size={17} />
                        {label}
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-studio-elevated pt-2">
                    <button
                      type="button"
                      role="menuitem"
                      disabled={loggingOut || !onLogout}
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <LogOut size={17} />
                      {loggingOut ? "Logging out..." : "Logout"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setProfileOpen(false);
          }}
          className="flex size-10 items-center justify-center rounded-lg border border-studio-elevated text-studio-text transition-colors hover:bg-studio-surface lg:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-studio-elevated bg-studio-bg px-4 pb-5 pt-3 shadow-xl lg:hidden sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenus}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-studio-orange/10 text-studio-orange"
                      : "text-studio-muted hover:bg-studio-surface hover:text-studio-text"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="ml-auto size-1.5 rounded-full bg-studio-orange" />
                  )}
                </Link>
              );
            })}

            <div className="my-2 border-t border-studio-elevated" />

            {!user ? (
              <div className="flex gap-3 pt-1">
                <Link
                  href="/login"
                  onClick={closeMenus}
                  className="flex-1 rounded-xl border border-studio-elevated px-4 py-3 text-center text-sm font-semibold text-studio-text transition-colors hover:bg-studio-surface"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={closeMenus}
                  className="flex-1 rounded-xl bg-studio-orange px-4 py-3 text-center text-sm font-bold text-studio-bg transition-colors hover:bg-studio-orange-hover"
                >
                  Register
                </Link>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 px-3 py-3">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={`${user.name}'s avatar`}
                      className="size-10 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex size-10 items-center justify-center rounded-full bg-studio-orange/15 text-studio-orange">
                      <UserRound size={20} />
                    </span>
                  )}

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-studio-text">
                      {user.name}
                    </p>
                    {user.email && (
                      <p className="truncate text-xs text-studio-muted">
                        {user.email}
                      </p>
                    )}
                  </div>
                </div>

                {userMenu.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMenus}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors ${
                      isActive(href)
                        ? "bg-studio-orange/10 text-studio-orange"
                        : "text-studio-muted hover:bg-studio-surface hover:text-studio-text"
                    }`}
                  >
                    <Icon size={18} />
                    {label}
                  </Link>
                ))}

                <button
                  type="button"
                  disabled={loggingOut || !onLogout}
                  onClick={handleLogout}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10 disabled:opacity-50"
                >
                  <LogOut size={18} />
                  {loggingOut ? "Logging out..." : "Logout"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
