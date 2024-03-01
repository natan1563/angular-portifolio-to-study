import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

const baseImagesPath = 'assets/img/projects'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
