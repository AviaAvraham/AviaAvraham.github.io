import React from 'react';
import Card from '../Card';
import { Mail } from 'lucide-react';
import ContactLink from '../ContactLink';

const Contact = ({ isVisible }) => (
  <section id="contact">
    <Card title="Get in Touch" id="contact" isVisible={isVisible}>
      <div className="space-y-4">
        <p className="text-gray-600">Feel free to reach out to me at:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactLink 
            href="mailto:avia.avraham@gmail.com" 
            icon={<Mail className="text-green-600" size={20} />}
            text="avia.avraham@gmail.com"
          />
          <ContactLink 
            href="https://www.linkedin.com/in/avia-avraham" 
            icon={<i className="fab fa-linkedin text-green-600"></i>}
            text="LinkedIn Profile"
          />
        </div>
      </div>
    </Card>
  </section>
);

export default Contact;