export class CommonUtils {

  public static isIOS(): boolean {
    const iosDevices = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ];
    return iosDevices.includes(navigator.platform) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
  }

}
