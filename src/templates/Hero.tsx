import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background>
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Whitepaper</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Enter App</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'OHMADENA\n'}
            {/* <span className="text-purple-600">Coming soon</span> */}
          </>
        }
        description="The decentralized reserve currency built on Kadena."
        button={<></>}
      />
    </Section>
  </Background>
);

export { Hero };
