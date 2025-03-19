import React from 'react';
import Typewriter from 'typewriter-effect';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import Card from '../components/Card';
import ContactLink from '../components/ContactLink';
import { contact } from '../data/resume';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-500 p-4 font-mono overflow-y-auto">
      <Navigation />
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Typewriter
            options={{
              strings: ['Contact Me'],
              autoStart: true,
              loop: false,
              delay: 50,
            }}
          />
        </div>

        <Section title="Get in Touch">
          <Card>
            <div className="space-y-4">
              <ContactLink
                href={`mailto:${contact.email}`}
                label="Email"
                value={contact.email}
              />
              <div className="flex flex-col space-y-1">
                <span className="text-blue-400">Phone:</span>
                <span>{contact.phone}</span>
              </div>
              <ContactLink
                href={contact.github}
                label="GitHub"
                value={contact.github}
              />
              <ContactLink
                href={contact.linkedin}
                label="LinkedIn"
                value={contact.linkedin}
              />
            </div>
          </Card>
        </Section>
      </div>
    </div>
  );
};

export default Contact;