import { Project } from '../../domain/Project';
import { ProjectRepositoryI } from '../../domain/ProjectRepository';

export function getProject(projectRepository: ProjectRepositoryI, projectId: string): Promise<Project> {
    return projectRepository.getProject(projectId);
}
