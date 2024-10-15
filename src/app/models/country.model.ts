export interface Country {
    name: {
        common: string | null
    }
    region: string | null
    capital: string | null
    population: number | null
    flags: {
        png: string | null
    }
}