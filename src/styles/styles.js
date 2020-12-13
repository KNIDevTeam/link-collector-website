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
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    round: {
        position: 'absolute',
        zIndex: 0,
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
        padding: '2vh 4vw'
    },
    header: {
        item: {
            active: {
                background: theme.dark.brighterMain
            },
            normal: {
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
    },
    sideBar: {
        background: theme.dark.text,
        height: '20%',
        width: '100%',
        backgroundColor: theme.dark.main,
        headerItem: {
            width: '10%',
            height: '100%',
            background: theme.dark.darkerMain,
            fontSize: theme.font.size.m,
            fontWeight: 700
        },
        item: {
            height: '50%',
            width: '12%',
            background: theme.dark.brighterMain,
            borderRadius: '10%',
            boxShadow: '5px 5px 0 ' + theme.dark.darkerMain,
        }
    },
    table: {
        color: theme.dark.text,
        border: '3px solid',
        boxShadow: '5px 5px 0px ' + theme.dark.darkerMain,
        borderColor: theme.dark.text,
        fontFamily: theme.font.family,
        '& svg': {
            fill: theme.dark.text
        },
        '& div': {
            color: theme.dark.text
        },
        '& .MuiDataGrid-colCell': {
            fontSize: theme.font.size.xs,
        },
        '& .MuiDataGrid-colCellTitleContainer, .MuiDataGrid-cell, .MuiDataGrid-mainGridContainer, .MuiDataGrid-columnsContainer': {
            textAlign: 'center',
            justifyContent: 'center'
        }
    }
}

export default styles;