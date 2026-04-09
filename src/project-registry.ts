import type { ProjectConfig } from './types.js';

export interface ProjectRegistry {
  get(projectId: string): ProjectConfig | undefined;
  list(): ProjectConfig[];
}

export class InMemoryProjectRegistry implements ProjectRegistry {
  private readonly projects = new Map<string, ProjectConfig>();

  constructor(initialProjects: ProjectConfig[] = []) {
    for (const project of initialProjects) {
      this.projects.set(project.project_id, project);
    }
  }

  get(projectId: string): ProjectConfig | undefined {
    return this.projects.get(projectId);
  }

  list(): ProjectConfig[] {
    return Array.from(this.projects.values());
  }
}
