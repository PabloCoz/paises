import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { RegionComponent } from './pages/region/region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CapitalComponent,
    PaisesComponent,
    RegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CapitalComponent,
    PaisesComponent,
    RegionComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
