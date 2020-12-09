import theme from "./theme";

const styles = {
    app: {
      color: theme.dark.text,
      fontFamily: theme.font.family
    },
    page: {
        height: '100%',
        width: '100%',
        background: theme.dark.background
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    round: {
        position: 'absolute',
        zIndex: '1',
        top: '50vh',
        left: '0',
        height: '50vh',
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
        boxShadow: '5px 5px 0 ' + theme.dark.darkerMain
    }
}

export default styles;