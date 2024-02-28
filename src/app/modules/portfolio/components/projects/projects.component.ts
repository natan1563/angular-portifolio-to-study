import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

const baseImagesPath = 'assets/img/projects'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: `${baseImagesPath}/vfull.png`,
      alt: "Projeto vida fullstack",
      title: "Vida full Stack",
      width: "100px",
      height: "51px",
      description: "<p>Explore um projeto muito legal.</p>",
      links: [
        {
          name: 'Conheça o Blog',
          href: '#'
        }
      ]
    }
  ])
}
