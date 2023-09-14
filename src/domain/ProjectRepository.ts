import { Project } from './Project';

export interface ProjectRepositoryI {
    getProjects: () => Promise<Project[]>;
    getProject: (projectId: string) => Promise<Project>;
}
