import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { FrutaComponent } from './fruta/fruta.component';
import { VerduraComponent } from './verdura/verdura.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'fruta', component: FrutaComponent},
	{path: 'verdura', component: VerduraComponent},
	{path: 'empleado', component: EmpleadoComponent},
	{path: '', component: HomeComponent},	//Home
	{path: '**', component: HomeComponent}	//Eror404
];

export const appRoutingProviders: any [] = [];	//Lo necesita angular
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);