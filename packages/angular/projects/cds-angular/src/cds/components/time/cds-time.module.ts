/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsTimeDirective } from './cds-time.directive';

import '@cds/core/time/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [CdsTimeDirective],
  exports: [CdsTimeDirective],
})
export class CdsTimeModule {}
