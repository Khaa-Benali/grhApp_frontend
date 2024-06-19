// daf-interface.component.ts
import { Component, OnInit } from '@angular/core';
import { DafService } from '../services/daf.service';
import { CollaborateurDto } from '../models/Collaborateurdto';

@Component({
  selector: 'app-daf-interface',
  templateUrl: './daf-interface.component.html',
  styleUrls: ['./daf-interface.component.css']
})
export class DAFInterfaceComponent implements OnInit {
  masseSalariale: number | undefined;
  collaborateurs: CollaborateurDto[] = [];

  constructor(private dafService: DafService) {}

  ngOnInit(): void {
    this.getMasseSalariale();
    this.getAllCollaborateurs();
  }

  getMasseSalariale(): void {
    this.dafService.getMasseSalariale().subscribe(
      (data) => {
        this.masseSalariale = data;
      },
      (error) => {
        console.error('Error fetching masse salariale', error);
      }
    );
  }

  getAllCollaborateurs(): void {
    this.dafService.getAllCollaborateurs().subscribe(
      (data) => {
        this.collaborateurs = data;
      },
      (error) => {
        console.error('Error fetching collaborateurs', error);
      }
    );
  }
}
