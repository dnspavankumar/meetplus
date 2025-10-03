'use client';

import React, { useState } from 'react';
import { Button } from './button';
import {
  Video,
  Mic,
  Phone,
  PhoneOff,
  Copy,
  Calendar,
  Users,
  Settings,
  ChevronRight,
  Share,
  Plus
} from 'lucide-react';

/**
 * Button Examples Component
 * 
 * This component demonstrates all the enhanced features of the improved Button component.
 * Use this for testing and as a reference for implementation.
 */
export default function ButtonExamples() {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const simulateLoading = (key: string, duration = 2000) => {
    setLoadingStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [key]: false }));
    }, duration);
  };

  return (
    <div className="p-8 space-y-8 bg-black-gradient min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gradient">Enhanced Button Component Examples</h1>
        
        {/* Variant Examples */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="primary">Black Gradient Primary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="outline-primary">Gradient Border</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghost-primary">Gradient Text</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        {/* Size Examples */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="xs" variant="primary">Extra Small</Button>
            <Button size="sm" variant="primary">Small</Button>
            <Button size="default" variant="primary">Default</Button>
            <Button size="lg" variant="primary">Large</Button>
            <Button size="xl" variant="primary">Extra Large</Button>
          </div>
        </section>

        {/* Icon Sizes */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Icon Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="icon-sm" variant="primary">
              <Video className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="success">
              <Mic className="h-4 w-4" />
            </Button>
            <Button size="icon-lg" variant="danger">
              <PhoneOff className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Loading States */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Loading States</h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              loading={loadingStates.join}
              onClick={() => simulateLoading('join')}
            >
              Join Meeting
            </Button>
            <Button 
              variant="success" 
              loading={loadingStates.create}
              loadingText="Creating..."
              onClick={() => simulateLoading('create')}
            >
              Create Meeting
            </Button>
            <Button 
              variant="outline-primary" 
              loading={loadingStates.copy}
              loadingText="Copying..."
              onClick={() => simulateLoading('copy', 1000)}
            >
              Copy Link
            </Button>
          </div>
        </section>

        {/* Gradient Border Showcase */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Gradient Border Effects</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Black Gradient with Border
            </Button>
            <Button variant="outline-primary" size="lg">
              Gradient Border Only
            </Button>
            <Button variant="ghost-primary" size="lg">
              Gradient Text Effect
            </Button>
          </div>
          <p className="text-sm text-gray-400">
            The primary variant features a black gradient background with a colorful gradient border.
          </p>
        </section>

        {/* Icons with Text */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Buttons with Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" leftIcon={<Video className="h-4 w-4" />}>
              Start Video
            </Button>
            <Button variant="success" leftIcon={<Mic className="h-4 w-4" />}>
              Unmute
            </Button>
            <Button variant="outline" rightIcon={<ChevronRight className="h-4 w-4" />}>
              Next Step
            </Button>
            <Button variant="ghost-primary" leftIcon={<Copy className="h-4 w-4" />}>
              Copy Meeting Link
            </Button>
            <Button variant="warning" leftIcon={<Users className="h-4 w-4" />} rightIcon={<Settings className="h-4 w-4" />}>
              Manage Participants
            </Button>
          </div>
        </section>

        {/* Video Chat Specific Examples */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Video Chat Specific Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              variant="success" 
              size="lg" 
              fullWidth
              leftIcon={<Phone className="h-5 w-5" />}
            >
              Join Meeting
            </Button>
            <Button 
              variant="danger" 
              size="lg" 
              fullWidth
              leftIcon={<PhoneOff className="h-5 w-5" />}
            >
              End Call for Everyone
            </Button>
            <Button 
              variant="primary" 
              fullWidth
              leftIcon={<Calendar className="h-4 w-4" />}
            >
              Schedule Meeting
            </Button>
            <Button 
              variant="outline-primary" 
              fullWidth
              leftIcon={<Plus className="h-4 w-4" />}
            >
              Create Instant Meeting
            </Button>
          </div>
        </section>

        {/* Control Buttons */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Meeting Controls</h2>
          <div className="flex justify-center gap-2">
            <Button size="icon" variant="ghost" className="bg-dark-3 hover:bg-dark-4">
              <Video className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="bg-dark-3 hover:bg-dark-4">
              <Mic className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="bg-dark-3 hover:bg-dark-4">
              <Share className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="danger">
              <PhoneOff className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Disabled States */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Disabled States</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>Disabled Primary</Button>
            <Button variant="success" disabled leftIcon={<Video className="h-4 w-4" />}>
              Disabled with Icon
            </Button>
            <Button variant="outline" disabled>Disabled Outline</Button>
          </div>
        </section>

        {/* Full Width Examples */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Full Width Buttons</h2>
          <div className="space-y-2 max-w-md">
            <Button variant="primary" fullWidth>Full Width Primary</Button>
            <Button variant="outline-primary" fullWidth>Full Width Outline</Button>
            <Button variant="ghost-primary" fullWidth>Full Width Ghost</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
