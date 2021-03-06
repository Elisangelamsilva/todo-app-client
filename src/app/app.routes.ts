import {Routes} from "@angular/router"

import {FormComponent} from './form/form.component'
import {CadastroComponent} from './cadastro/cadastro.component'
import {HomeComponent} from './home/home.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'form', component: FormComponent },
    {path: 'cadastro', component: CadastroComponent},
]
