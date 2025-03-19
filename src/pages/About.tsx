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
          <GitHubContributions />
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