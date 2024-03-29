export interface WatchProvider {
  display_priority: number
  logo_path: string
  provider_id: number
  provider_name: string
}
export interface Result {
  link: string
  flatrate: WatchProvider[] | undefined
  rent: WatchProvider[]
  buy: WatchProvider[]
}

export interface ProvidersType {
  id: number
  results: {
    AD: Result
    AL: Result
    AR: Result
    AT: Result
    AU: Result
    BA: Result
    BE: Result
    BG: Result
    BO: Result
    BR: Result
    CA: Result
    CH: Result
    CL: Result
    CO: Result
    CR: Result
    CV: Result
    CY: Result
    CZ: Result
    DE: Result
    DK: Result
    DO: Result
    EC: Result
    EE: Result
    EG: Result
    ES: Result
    FI: Result
    FR: Result
    GB: Result
    GH: Result
    GR: Result
    GT: Result
    HK: Result
    HN: Result
    HR: Result
    HU: Result
    ID: Result
    IE: Result
    IL: Result
    IN: Result
    IS: Result
    IT: Result
    JP: Result
    KR: Result
    LI: Result
    LT: Result
    LU: Result
    LV: Result
    MD: Result
    ME: Result
    MK: Result
    MT: Result
    MX: Result
    MY: Result
    MZ: Result
    NL: Result
    NO: Result
    NZ: Result
    PA: Result
    PE: Result
    PH: Result
    PL: Result
    PT: Result
    PY: Result
    RO: Result
    RS: Result
    SE: Result
    SG: Result
    SI: Result
    SK: Result
    SM: Result
    SV: Result
    TW: Result
  }
}
