import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmpVisionComponent } from './emp.vision.component';
import { ManVisionComponent } from './man.vision.component';

@NgModule({
    imports: [CommonModule],
    declarations: [EmpVisionComponent, ManVisionComponent],
    providers:[]
})

export class VisionModule{}