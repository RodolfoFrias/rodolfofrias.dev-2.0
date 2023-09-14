import { Project } from '../../domain/Project';
import { ProjectRepositoryI } from '../../domain/ProjectRepository';

export function getProjects(projectRepository: ProjectRepositoryI): Promise<Project[]> {
    return projectRepository.getProjects();
}
