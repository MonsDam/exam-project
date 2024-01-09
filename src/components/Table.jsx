import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";

const Tabla = ({ data = null, columns = null, refreshFunction }) => {
  const getCaps = (head, id) => {
    if (head) return head.toUpperCase();
    return id.toUpperCase();
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "90%", overflow: "hidden", m: 2, marginLeft: 8 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns &&
                columns.map((head, index) => (
                  <TableCell
                    sx={{ fontSize: 19 }}
                    key={index}
                    style={{
                      minWidth: columns.minWidth,
                      color: "rgb(57,56,56)",
                      fontWeight: "bold",
                    }}
                  >
                    {getCaps(head.label, head.id)}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                  {columns.map((col, index) => {
                    if (col.buttons) {
                      return (
                        <TableCell key={index}>
                          {col.buttons.map((ActionButton, index) => {
                            return (
                              <Box key={index} sx={{ display: "inline-flex" }}>
                                <ActionButton
                                  row={data.find((e) => e._id === row._id)}
                                  refreshFunction={refreshFunction}
                                />
                              </Box>
                            );
                          })}
                        </TableCell>
                      );
                    }
                    const value = row[col.id];
                    return (
                      <TableCell key={index}>
                        {col.format && typeof value === "number" ? col.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {data ? null : <p>No hay resultados para mostrar</p>}
    </Paper>
  );
};

export default Tabla;
