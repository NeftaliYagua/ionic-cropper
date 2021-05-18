declare module '@capacitor/core' {
  interface PluginRegistry {
    IonicCropper: IonicCropperPlugin;
  }
}

export interface IonicCropperPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
