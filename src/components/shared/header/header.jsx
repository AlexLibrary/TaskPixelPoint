'use client';

import Button from '../button';

const Header = () => (
  <header className="absolute left-0 right-0 top-0 z-50 h-[64px] px-safe pt-safe">
    <nav
      className="container flex h-full items-center justify-end gap-x-[244px] px-4"
      aria-label="Global"
    >
      <div className="flex gap-x-10">
        <Button theme="link" size="link">
          Integrations
        </Button>
        <Button theme="link" size="link">
          Core Platform
        </Button>
        <Button theme="link" size="link">
          Company
        </Button>
        <Button theme="link" size="link">
          Resources
        </Button>
      </div>
      <div className="flex gap-x-8">
        <Button theme="link" size="link" className="font-medium">
          Contact Sales
        </Button>
        <Button size="sm" theme="white" className="text-base font-semibold ">
          Book a Demo
        </Button>
      </div>
    </nav>
  </header>
);

export default Header;
