import theme from "./theme";

const styles = {
    app: {
      color: theme.dark.text,
      fontFamily: theme.font.family
    },
    page: {
        height: '100%',
        width: '100%',
        background: theme.dark.background,
        zIndex: 10
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    round: {
        position: 'absolute',
        zIndex: 1,
        top: '50%',
        left: '0',
        height: '50%',
        width: '50vw',
    },
    btn: {
        background: theme.dark.main,
        color: theme.dark.text,
        fontSize: theme.font.size.m,
        fontWeight: 600,
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        boxShadow: '5px 5px 0 ' + theme.dark.darkerMain,
        zIndex: 10
    },
    header: {
        item: {
            active: {
                background: theme.dark.brighterMain
            },
            normal: {
                // width: '20vw',
                padding: '0 3.5vw',
                height: '100%',
                background: theme.dark.darkerMain,
                color: theme.dark.text,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                textDecoration: 'none',
                fontSize: theme.font.size.m
            }
        }
    }
}

export default styles;