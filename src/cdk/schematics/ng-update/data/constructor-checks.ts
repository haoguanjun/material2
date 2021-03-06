/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {TargetVersion} from '../target-version';
import {VersionChanges} from '../upgrade-data';

export type ConstructorChecksUpgradeData = string;

/**
 * List of class names for which the constructor signature has been changed. The new constructor
 * signature types don't need to be stored here because the signature will be determined
 * automatically through type checking.
 */
export const constructorChecks: VersionChanges<ConstructorChecksUpgradeData> = {
  [TargetVersion.V8]: [
    {
      pr: 'https://github.com/angular/material2/pull/15647',
      changes: [
        'CdkDrag', 'CdkDropList', 'ConnectedPositionStrategy', 'FlexibleConnectedPositionStrategy',
        'OverlayPositionBuilder', 'CdkTable'
      ]
    }
  ],
  [TargetVersion.V7]: [],
  [TargetVersion.V6]: []
};
