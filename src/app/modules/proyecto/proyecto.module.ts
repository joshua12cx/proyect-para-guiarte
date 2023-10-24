import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { OptionsComponent } from './pages/components/options/options.component';
import {MatInputModule} from '@angular/material/input'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormProyectoComponent } from './pages/components/form-proyecto/form-proyecto.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ProyectoComponent,
    OptionsComponent,
    FormProyectoComponent
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoModule { }
