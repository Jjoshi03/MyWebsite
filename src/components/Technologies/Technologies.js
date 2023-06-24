import React from 'react';
import { DiFirebase, DiJira, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with range of technologies in web development world from back-end to design.
    </SectionText>
    <List>
      <ListItem> 
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle> Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem> 
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle> Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            NodeJS and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem> 
        <DiJira size="3rem"/>
        <ListContainer>
          <ListTitle> Testing Tools</ListTitle>
          <ListParagraph>
            Experience with <br/>
            JUnit and Selenium
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
