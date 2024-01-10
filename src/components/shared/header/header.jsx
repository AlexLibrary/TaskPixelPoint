'use client';

import Button from '../button';

const Header = () => (
  <header className="absolute left-0 right-0 top-0 z-50 h-[64px] px-safe pt-safe">
    <nav
      className="container flex h-full items-center justify-end gap-x-[244px] px-4"
      aria-label="Global"
    >
      <div className="flex gap-x-10">
        <Button className="text-base font-normal">Integrations</Button>
        <Button className="text-base font-normal">Core Platform</Button>
        <Button className="text-base font-normal">Company</Button>
        <Button className="text-base font-normal">Resources</Button>
      </div>
      <div className="flex gap-x-8">
        <Button className="text-base font-medium">Contact Sales</Button>
        <Button className="bg-white text-base font-semibold px-[18px] py-[10px] rounded-full text-black">
          Book a Demo
        </Button>
      </div>
    </nav>
  </header>
);

export default Header;
