import { writable } from 'svelte/store';
import { projects } from './projects';
import type { Project } from './types';

export const runAnimation = writable(false);

export const projectSlide = writable(projects[0] as Project);