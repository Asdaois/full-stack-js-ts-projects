export class CaracteresEspeciales {
  static decode (paraConvertir: string) {
    return paraConvertir.replace(/%3A/g, ':')
  }
}
