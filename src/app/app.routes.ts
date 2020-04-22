import {Routes} from "@angular/router"

import {FormComponent} from './form/form.component'
import {CadastroComponent} from './cadastro/cadastro.component'

export const ROUTES: Routes = [
    { path: 'form', component: FormComponent },
    {path: 'cadastro', component: CadastroComponent}
]
