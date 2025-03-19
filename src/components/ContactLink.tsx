import React from 'react';

interface ContactLinkProps {
  href: string;
  label: string;
  value: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, label, value }) => {
  return (
    <div className="flex flex-col space-y-1">
      <span className="text-blue-400">{label}:</span>
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:underline"
      >
        {value}
      </a>
    </div>
  );
};

export default ContactLink;