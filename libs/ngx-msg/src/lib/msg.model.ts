/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license
 * that can be found at http://neekware.com/license/MIT.html
 */

import { SnackbarStatus } from './snackbar/snackbar.model';

export interface MessageMap {
  [id: string]: {
    [id: string]: SnackbarStatus;
  };
}
