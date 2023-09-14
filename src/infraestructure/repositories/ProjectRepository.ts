import { ProjectRepositoryI } from '../../domain/ProjectRepository';
import { Project } from '../../domain/Project';
import axios from 'axios';
import type { AxiosResponse } from 'axios';

export class ProjectRepository implements ProjectRepositoryI {
    private API_URL: string;

    constructor(API_URL: string) {
        this.API_URL = API_URL;
    }

    public async getProjects(): Promise<Project[]> {
        const axiosResponse: AxiosResponse = await axios.get(`${this.API_URL}`);
        return axiosResponse.data.projects;
    }
    public async getProject(projectId: string): Promise<Project> {
        const axiosResponse: AxiosResponse = await axios.get(`${this.API_URL}`);
        return axiosResponse.data.projects.find(project => project.id === projectId);
    }
}
