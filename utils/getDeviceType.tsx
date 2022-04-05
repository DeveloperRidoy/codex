import { EDeviceType } from "./types";

/**
 * @param ua string containing the user-agent info 
 * @returns returns device type
 */
const getDeviceType = (ua: string): EDeviceType => {
  const isMobile =
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua);
  return isMobile ? EDeviceType.MOBILE : EDeviceType.PC
}

export default getDeviceType
