import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Full Stack Development',
        p: 'Novembro 2021 - Fevereiro 2024'
      },
      text: "<p>Realizei implementações de novas funcionalidades, ajustes sistemáticos, análise de projetos, divisão de tarefas e correções de BUG'S. Participo do processo de revisão da qualidade e integridade de código e de estimativas nas novas tarefas.</p>"
    },
    {
      summary: {
        strong: 'Full Stack Development',
        p: 'Fevereiro 2021 - Novembro 2021'
      },
      text: "<p>Implementações de novas features, Integrações com apis externas e internas, Desenvolvimento do framework da plataforma, Manutenção de códigos legados, Correção de bugs, Suporte a outros desenvolvedores.</p>"
    },
    {
      summary: {
        strong: 'Suporte N2',
        p: 'Fevereiro 2020 - Novembro 2021'
      },
      text: "<p>Realizei reparos e manutenções de computadores e servidores (Windows, linux), instalações de softwares, suporte ao usuários, desenvolvimento de sistemas internos utilizando como ferramentas: HTML, CSS, JS, Bootstrap 3, Jquery, PHP e Laravel.</p>"
    },
  ])
}
