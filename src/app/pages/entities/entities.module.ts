import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './entities.component';
import { Routes,RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';


const routes:Routes= [{
  path:'entities',
  component:EntitiesComponent,
  children:[{
    path:'tables',
    component: TableComponent
},
{path:'**',
redirectTo:'tables',
pathMatch:'full'}
]
}];

@NgModule({
  declarations: [
    EntitiesComponent,
    TableComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EntitiesModule { }
