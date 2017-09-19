import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileModalComponent } from './profile-modal.component';
import { CargoComponent } from './cargo.component';
import { FormacaoAcademicaComponent } from './formacao-academica.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule,
  ],
  declarations: [
    ProfileComponent,
    ProfileModalComponent,
    CargoComponent,
    FormacaoAcademicaComponent,
  ],
})
export class ProfileModule { }
