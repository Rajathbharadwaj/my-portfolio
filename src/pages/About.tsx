import React from 'react';
import Typewriter from 'typewriter-effect';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import Card from '../components/Card';
import GitHubContributions from '../components/GitHubContributions';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-500 p-4 font-mono overflow-y-auto">
      <Navigation />
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Typewriter
            options={{
              strings: ['About Me'],
              autoStart: true,
              loop: false,
              delay: 50,
            }}
          />
        </div>

        <Section title="Introduction">
          <Card>
            <p>
              I'm a Machine Learning Engineer and AI Researcher with a passion for developing
              innovative solutions using cutting-edge AI technologies. Currently pursuing my
              Master's in Computer Science with AI Specialization at the University of Windsor.
            </p>
          </Card>
        </Section>

        <Section title="GitHub Activity">
          <Card>
            <div className="mb-4">
              <a
                href="https://github.com/rajathbharadwaj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:underline"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View full profile on GitHub
              </a>
            </div>
            <GitHubContributions />
          </Card>
        </Section>

        <Section title="Research Interests">
          <Card>
            <ul className="list-disc list-inside space-y-2">
              <li>Large Language Models and Natural Language Processing</li>
              <li>Computer Vision and Generative AI</li>
              <li>Reinforcement Learning</li>
              <li>AI Model Optimization and Deployment</li>
            </ul>
          </Card>
        </Section>

        <Section title="Current Focus">
          <Card>
            <p>
              Currently working on advancing emotional expressiveness in talking head generation
              using diffusion models, while also contributing to various AI research projects
              at the University of Windsor.
            </p>
          </Card>
        </Section>

        <Section title="Technical Expertise">
          <Card>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Core Technologies:</h3>
                <p>Python, TensorFlow, PyTorch, CUDA, Docker, Kubernetes</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Specialized Areas:</h3>
                <p>LLMs, RAG, Computer Vision, MLOps, Edge AI Deployment</p>
              </div>
            </div>
          </Card>
        </Section>
      </div>
    </div>
  );
};

export default About;