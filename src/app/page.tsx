'use client';

import { useState } from 'react';
import { Thought } from '@/types/thought';

export default function Home() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [newThought, setNewThought] = useState('');

  const addThought = () => {
    if (!newThought.trim()) return;

    const thought: Thought = {
      id: Date.now().toString(),
      content: newThought,
      createdAt: new Date(),
    };

    setThoughts([thought, ...thoughts]);
    setNewThought('');
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Daily Thoughts</h1>
      
      <div className="mb-8">
        <textarea
          className="w-full p-4 border rounded-lg shadow-sm"
          rows={4}
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button
          onClick={addThought}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Thought
        </button>
      </div>

      <div className="space-y-4">
        {thoughts.map((thought) => (
          <div key={thought.id} className="p-4 border rounded-lg">
            <p className="text-gray-800">{thought.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              {thought.createdAt.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
} 