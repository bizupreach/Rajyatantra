
import React from 'react';
import { PracticeArea, Sector, Publication } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'policy-design',
    title: 'Policy Design & Advisory',
    description: 'Specialized support for the conceptualization and formalization of public policy frameworks.',
    points: [
      'Evidence-based policy formulation support',
      'Regulatory framework design and audit',
      'Technical white papers and policy notes',
      'Cabinet and departmental briefing support'
    ]
  },
  {
    id: 'institutional-reform',
    title: 'Governance & Institutional Reform',
    description: 'Strengthening the structural capacity of state institutions to deliver public services efficiently.',
    points: [
      'Administrative process redesign',
      'Institutional capacity and gap assessment',
      'Inter-departmental coordination frameworks',
      'Performance management system design'
    ]
  },
  {
    id: 'program-evaluation',
    title: 'Program & Scheme Evaluation',
    description: 'Rigorous assessment of public interventions using mixed-method research and data analysis.',
    points: [
      'Impact assessment and baseline studies',
      'Monitoring & Evaluation (M&E) framework design',
      'Outcome vs. output analysis',
      'Systemic beneficiary feedback loops'
    ]
  },
  {
    id: 'public-finance',
    title: 'Public Finance & Budget Analysis',
    description: 'Providing fiscal insights to improve the efficiency and transparency of public spending.',
    points: [
      'Sectoral budget analysis and tracking',
      'Public expenditure efficiency studies',
      'Fiscal prioritization and resource mapping'
    ]
  },
  {
    id: 'data-decision-support',
    title: 'Data & Decision Support',
    description: 'Enabling evidence-based governance through advanced data visualization and MIS tools.',
    points: [
      'Governance Management Information Systems (MIS)',
      'Custom departmental performance dashboards',
      'Evidence-based administrative decision tools'
    ]
  }
];

export const SECTORS: Sector[] = [
  { id: 'health', name: 'Health', description: 'Strengthening health systems and primary care delivery through policy and monitoring.', icon: 'PlusSquare' },
  { id: 'education', name: 'Education', description: 'Governance interventions in primary, secondary, and higher education ecosystems.', icon: 'Book' },
  { id: 'nutrition', name: 'Nutrition', description: 'Integrating inter-departmental efforts to combat malnutrition and food insecurity.', icon: 'Target' },
  { id: 'urban', name: 'Urban Governance', description: 'Improving municipal administration, urban planning, and civic service delivery.', icon: 'Building2' },
  { id: 'rural', name: 'Rural Development', description: 'Institutional design for rural livelihoods, infrastructure, and local governance.', icon: 'Globe' },
  { id: 'skills', name: 'Employment & Skills', description: 'Bridging the gap between vocational training and market-driven labor demands.', icon: 'Users' },
  { id: 'welfare', name: 'Social Welfare', description: 'Targeting and delivery optimization for social safety nets and marginalized groups.', icon: 'ShieldCheck' },
  { id: 'infrastructure', name: 'Infrastructure', description: 'Governance frameworks for sustainable public utilities and physical assets.', icon: 'Layers' }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    title: 'Institutional Capacity in Local Administration: A Multi-State Review',
    category: 'Research Note',
    date: 'December 2024',
    description: 'A comprehensive analysis of administrative bottlenecks in district-level implementation units.'
  },
  {
    id: '2',
    title: 'Fiscal Decentralization and Urban Outcomes',
    category: 'White Paper',
    date: 'October 2024',
    description: 'Evaluating the link between municipal financial autonomy and service delivery efficiency.'
  },
  {
    id: '3',
    title: 'Evaluating Direct Benefit Transfer Frameworks',
    category: 'Policy Brief',
    date: 'August 2024',
    description: 'Critical insights into the scalability and precision of digital welfare delivery systems.'
  }
];
