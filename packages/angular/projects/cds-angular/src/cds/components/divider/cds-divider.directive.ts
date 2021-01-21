/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-divider' })
export class CdsDividerDirective extends BaseCdsDirective {
  get orientation() {
    return this.element['orientation'];
  }
  @Input() set orientation(value) {
    this.element['orientation'] = value;
  }
}
