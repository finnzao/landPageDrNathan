export interface LocationData {
    name: string;
    address: string;
    city: string;
    zipCode: string;
    whatsapp: string;
    mapEmbed: string;
    instagram?: string;
    phone?: string;
    hours?: {
        weekdays: string;
        saturday: string;
        sunday: string;
    };
}

export const LOCATIONS: Record<string, LocationData> = {
    aracaju: {
        name: "Prime OdontoMed",
        address: "Rua Divina Pastora, 291 - Centro",
        city: "Aracaju - SE",
        zipCode: "49010-580",
        whatsapp: "https://wa.me/message/BMPNVWC4QTNTM1",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.85728710112335!2d-37.05191774921855!3d-10.909129759242472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab36f913c154d%3A0x2f452953f3210b83!2sR.%20Divina%20Pastora%2C%20291%20-%20Centro%2C%20Aracaju%20-%20SE%2C%2049010-600!5e0!3m2!1spt-BR!2sbr!4v1688678143707!5m2!1spt-BR!2sbr",
        instagram: "https://www.instagram.com/dr.nathandantas/",
        hours: {
            weekdays: "Segunda a Sexta: 8h às 18h",
            saturday: "Sábado: 8h às 12h",
            sunday: "Domingo: Fechado"
        }
    },

    // Exemplos para futuras expansões:

    salvador: {
      name: "Clínica Dr. Nathan Dantas Salvador",
      address: "Rua Exemplo, 123 - Barra",
      city: "Salvador - BA",
      zipCode: "40070-000",
      whatsapp: "https://wa.me/message/EXEMPLO_SALVADOR",
      mapEmbed: "URL_DO_GOOGLE_MAPS_SALVADOR",
      instagram: "https://www.instagram.com/dr.nathandantas/",
      hours: {
        weekdays: "Segunda a Sexta: 8h às 18h",
        saturday: "Sábado: 8h às 12h",
        sunday: "Domingo: Fechado"
      }
    },

    recife: {
      name: "Clínica Dr. Nathan Dantas Recife",
      address: "Avenida Exemplo, 456 - Boa Viagem",
      city: "Recife - PE",
      zipCode: "51020-000",
      whatsapp: "https://wa.me/message/EXEMPLO_RECIFE",
      mapEmbed: "URL_DO_GOOGLE_MAPS_RECIFE",
      instagram: "https://www.instagram.com/dr.nathandantas/",
      hours: {
        weekdays: "Segunda a Sexta: 8h às 18h",
        saturday: "Sábado: 8h às 12h",
        sunday: "Domingo: Fechado"
      }
    }
};

export const DEFAULT_LOCATION = 'aracaju';

export function getLocationData(locationKey?: string): LocationData {
    const key = locationKey || DEFAULT_LOCATION;
    return LOCATIONS[key] || LOCATIONS[DEFAULT_LOCATION];
}

export function getAvailableLocations(): Array<{ key: string; name: string; city: string }> {
    return Object.entries(LOCATIONS).map(([key, data]) => ({
        key,
        name: data.name,
        city: data.city
    }));
}