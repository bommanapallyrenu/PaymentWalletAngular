import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AddEmployeeComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { AddAccountComponent } from './app.addAccount';
import { DeleteAccountComponent } from './deleteAccount';
import { DisplayComponent } from './display/display.component';
import { TransferComponent } from './transfer/transfer.component';
import { AddingComponent } from './deposit/deposit.component';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';




const routes: Routes = [
{path:'listemp',component:ListEmployeeComponent},
{path:'addemp',component:AddEmployeeComponent},
{path:'updateemp',component:UpdateEmployeeComponent},
{path:'applogin',component:LoginComponent},
{
  path: 'loginsuccess',
  component: LoginsuccessComponent,
  children: [
    {path: 'addaccount', component:AddAccountComponent },
    {path: 'delete', component: DeleteAccountComponent},
    {path:'display',component:DisplayComponent},
    {path:'transfer',component:TransferComponent},
    {path:'adding',component:AddingComponent},
    {path:'transaction',component:TransactionComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
