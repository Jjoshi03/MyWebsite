import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        Janki's Portfolio
      </SectionTitle>
      <SectionText>
        An upcoming full stack Software Engineer will skills more focused towards front-end development.
      </SectionText>
      <Button onClick={()=>window.location='https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;