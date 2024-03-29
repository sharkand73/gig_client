export const countries = ['Scotland', 'England', 'Wales'];

export const bookingMethods = ['SMS', 'EMAIL', 'PHONE', 'MESSENGER', 'WHATSAPP'];
export const bookingStatuses = ['CONFIRMED', 'UNCONFIRMED', 'CANCELLED', 'CLOSED'];
export const dressCodes = ['UNKNOWN', 'BLACK_TIE', 'WHITE_JACKET', 'ALL_BLACK', 'BLACK_SUIT_WHITE_SHIRT',
                    'BLACK_SUIT_BLACK_SHIRT', 'SUIT', 'SUIT_NO_TIE', 'VINTAGE', 'CASUAL',
                    'FANCY_DRESS'];
export const gigTypes = ['REHEARSAL', 'MUSIC_SOCIETY', 'JAZZ_FESTIVAL', 'FESTIVAL', 'THEATRE', 
                    'BACKGROUND', 'PUB', 'JAZZ', 'FUNCTION', 'WEDDING', 'RECORDING', 'OTHER'];
export const paymentMethods = ['BACS', 'CASH', 'CHEQUE'];
export const instrumentNames = [];
export const skillNames = ['READING', 'IMPROVISING', 'JAZZ_STANDARDS', 'CHORD_CHARTS', 'LEARNING_SONGS',
    'DOUBLING', 'ARCO'];
export const styleNames = ['JAZZ', 'BEBOP', 'VOCAL_JAZZ', 'BIG_BAND', 'SWING',
    'GYPSY_JAZZ', 'MODERN_JAZZ', 'NEW_ORLEANS', 'DIXIELAND', 'EARLY_JAZZ', 'FUSION',
    'FUNK', 'SOUL', 'WEST_END_MUSICAL', 'CABARET', 'BLUES', 'FOLK', 'ROCK_N_ROLL',
    'SINGER_SONGWRITER', 'ROCK', 'POP', 'COVERS', 'LATIN'];
export const venueTypes = ['LARGE_THEATRE', 'MEDIUM_THEATRE', 'SMALL_THEATRE',
                    'CONCERT_HALL', 'TOWN_HALL', 'VILLAGE_HALL', 'PUB',
                    'JAZZ_CLUB', 'HOTEL', 'RESTAURANT', 'HOTEL_RESTAURANT', 
                    'REHEARSAL_SPACE', 'SUITE', 'WEDDING_VENUE', 'OUTDOOR', 'OTHER'
                    ];

export const convertEnumToString = (item) => {
    const enumWords = item.split('_');
    const allowedCapitalWords = ['BACS', 'SMS'];
    const normalCaseWords = enumWords.map((word) => {
        if (allowedCapitalWords.indexOf(word) + 1){
            return word;
        }
        return word[0] + word.slice(1).toLowerCase();        
    }
    );
    return normalCaseWords.join(' ');
}