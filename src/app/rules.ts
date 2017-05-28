import {
    AngularmService
} from 'angularm';

import { EditFormLineComponent } from './edit-entity/edit-form-line'

export let defineRules = (angularm: AngularmService) => {
    angularm
        .pr('edit_form_line', '*', '*', 'number', EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};