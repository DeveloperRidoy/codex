import { EDeviceType } from "../types";

const getDeviceType = (ua: string): EDeviceType => {
  const isMobile =
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua);
  return isMobile ? EDeviceType.MOBILE : EDeviceType.PC
}

export default getDeviceType
