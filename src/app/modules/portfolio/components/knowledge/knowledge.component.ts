import { Component, signal } from '@angular/core';
import { IKnowLedge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  private baseAssetsKnowledge = 'assets/icons/knowledge'
  public arrayKnowledge = signal<IKnowLedge[]>([
  {
    src: `${this.baseAssetsKnowledge}/html5.svg`,
    alt: 'Icone de conhecimento em HTML5'
  },
  {
    src: `${this.baseAssetsKnowledge}/css3.svg`,
    alt: 'Icone de conhecimento em CSS3'
  },
  {
    src: `${this.baseAssetsKnowledge}/javascript.svg`,
    alt: 'Icone de conhecimento em JS'
  },
  {
    src: `${this.baseAssetsKnowledge}/angular.svg`,
    alt: 'Icone de conhecimento em Angular'
  },
  {
    src: `${this.baseAssetsKnowledge}/nodejs.svg`,
    alt: 'Icone de conhecimento em NodeJs'
  },
  {
    src: `${this.baseAssetsKnowledge}/sass.svg`,
    alt: 'Icone de conhecimento em SASS'
  },
  ])
}
