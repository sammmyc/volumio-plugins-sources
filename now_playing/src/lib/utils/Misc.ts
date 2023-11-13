// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import libQ from 'kew';

import * as SystemUtils from './System';
import np from '../NowPlayingContext';

const VOLUMIO_BG_PATH = '/data/backgrounds';

export function jsPromiseToKew<T>(promise: Promise<T>): any {
  const defer = libQ.defer();

  promise.then((result) => {
    defer.resolve(result);
  })
    .catch((error) => {
      defer.reject(error);
    });

  return defer.promise;
}

export function kewToJSPromise(promise: any): Promise<any> {
  // Guard against a JS promise from being passed to this function.
  if (typeof promise.catch === 'function' && typeof promise.fail === undefined) {
    // JS promise - return as is
    return promise;
  }
  return new Promise((resolve, reject) => {
    promise.then((result: any) => {
      resolve(result);
    })
      .fail((error: any) => {
        reject(error);
      });
  });
}

export function getVolumioBackgrounds() {
  try {
    return SystemUtils.readdir(VOLUMIO_BG_PATH, 'thumbnail-');
  }
  catch (error) {
    np.getLogger().error(np.getErrorMessage(`[now-playing] Error getting Volumio backgrounds from ${VOLUMIO_BG_PATH}: `, error));
    np.toast('error', np.getI18n('NOW_PLAYING_GET_VOLUMIO_BG_ERR'));
    return [];
  }
}

export function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
