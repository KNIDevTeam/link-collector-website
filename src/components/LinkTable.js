import React from "react";
import {DataGrid} from "@material-ui/data-grid";
import {styled} from "@material-ui/core";
import styles from "../styles/styles";

const StyledDataGrid = styled(DataGrid)({
    ...styles.table,
})

const LinkTable = React.forwardRef((props, ref) => {

    return(
        <StyledDataGrid ref={ref} autoPageSize rows={props.rows} columns={props.cols} checkboxSelection />
    )
})

export default LinkTable;