// src/fetcher.ts
import { Event } from './types';

export async function fetchEvents(): Promise<Event[]> {
  const response = await fetch('./events.json');
  if (!response.ok) throw new Error('Failed to load events');
  return response.json();
}