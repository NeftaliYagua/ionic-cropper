import { WebPlugin } from '@capacitor/core';
import { IonicCropperPlugin } from './definitions';

export class IonicCropperWeb extends WebPlugin implements IonicCropperPlugin {
  constructor() {
    super({
      name: 'IonicCropper',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const IonicCropper = new IonicCropperWeb();

export { IonicCropper };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(IonicCropper);
