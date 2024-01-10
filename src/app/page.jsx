import Image from 'next/image';

import Advantage from 'components/shared/advantage';
import Input from 'components/shared/input';
import getMetadata from 'utils/get-metadata';

import illustration from '../images/illustration.png';

const Home = () => (
  <section className="py-72 px-safe pb-40">
    <div className="container px-4">
      <div className="mb-60 relative">
        <div className="w-48 h-48 bg-primary-1 left-[180px] top-[-200px] absolute rounded-full blur-[12rem] z-0" />
        <h1 className="w-[696px] text-neutral-50 text-[76px] font-normal font-poppins leading-[85.50px] mb-7 relative z-1">
          Unlock valuable insights from subscription data
        </h1>
        <p className="w-[590px] tracking-[0.4px] mb-10 text-xl leading-normal">
          Analyze your subscription ecosystem for cost optimization and risk management
        </p>
        <Input />
        <Image
          className="absolute right-[-230px] top-[50%] translate-y-[-50%]"
          width={916}
          height="100%"
          src={illustration}
          alt="Picture of the table"
          priority
        />
      </div>
      <div className="flex gap-x-40">
        <Advantage
          header="3x"
          subhead="Faster Analysis Cycles"
          text="Stop the tedium of manual subscription data review. Quickly access essential information
            from all subscriptions."
        />
        <Advantage
          header="10%+"
          subhead="Savings on Costs"
          text="Insights into both subscription data and expenditure lead to rapid, smart cost-cutting strategies."
        />
        <Advantage
          header="30"
          subhead="Day Setup"
          text="Implement swiftly with straightforward, no-code processes and ready-to-use integrations."
        />
      </div>
    </div>
  </section>
);

export default Home;

export async function generateMetadata() {
  // FIXME: Add real data here
  return getMetadata({
    title: 'Home - Next.js Tailwind Starter',
    description: 'Next.js Tailwind Starter',
    pathname: '/',
  });
}
