//Jest możliwość stworzenia dwóch themeów i przekazywania ich jako context i zmiana w app

const theme = {
    dark: {
        background: '#081120',
        main: '#00318C',
        darkerMain: '#192857',
        brighterMain: '#124BB5',
        text: '#EDF3FD'
    },
    bright: {},
    font: {
        size: {
            xs: '1.8vh',
            s: '2.5vh',
            m: '2.67vh',
            l: '3.2vh',
            xl: '4.8vh'
        },
        family: 'Manrope, sans-serif'
    }
}

export default theme;