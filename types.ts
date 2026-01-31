import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProjectImage {
  id: string;
  url: string | Record<string, any>;
  title: string;
  isGenerated?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  image: string | Record<string, any>;
  excerpt: string;
  date?: string;
  story: string[];
  tips: { title: string; description: string }[];
  qa: { question: string; answer: string }[];
}

export enum NavigationLinks {
  HOME = '/',
  SERVICES = '/services',
  PROJECTS = '/projects', // Gallery
  GALLERY = '/gallery',
  BLOG = '/blog',
  ABOUT = '/about',
  CONTACT = '/contact',
}