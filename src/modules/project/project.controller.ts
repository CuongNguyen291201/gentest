import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ProjectService } from "./project.service";

@ApiTags('Project')
@Controller('project')
export class ProjectController {
    constructor(
        private readonly projectService: ProjectService, // Assuming you have a ProjectService to handle business logic
    ) {

    }

    @Get()
    @ApiOperation({ summary: 'Get project details' })
    getProjects() {

    }

    @Get('/:projectId')
    @ApiOperation({ summary: 'Get project by ID' })
    getProjectDetail() {
        // Logic to get project by ID
    }

    @Post()
    @ApiOperation({ summary: 'Create a new project' })
    createProject() {
        // Logic to create a new project
    }

    @Post('/search')
    @ApiOperation({ summary: 'Search projects' })
    searchProjects() {
        // Logic to search for projects
    }

    @Put('/:projectId')
    @ApiOperation({ summary: 'Update an existing project' })
    updateProject() {
        // Logic to update an existing project
    }

    @Delete('/:projectId')
    @ApiOperation({ summary: 'Delete a project' })
    deleteProject() {
        // Logic to delete a project
    }
}