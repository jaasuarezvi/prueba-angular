import { NgModule} from "@angular/core";
import { Routes,RouterModule } from "@angular/router";


const routes:Routes = [{
  path:'home',
  loadChildren:()=>import ('./pages/entities/entities.module').then(m => m.EntitiesModule)
},
{
  path:'**',
  redirectTo:'home'
}]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{

}
