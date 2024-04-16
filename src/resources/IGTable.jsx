import { List, Datagrid } from "react-admin";
import { Children, cloneElement } from "react";

export const IGTable = ({ children, ...rest }) => {
  const CustomChildren = Children.map(children, (child) => {
    return cloneElement(child, {
      sortable: false,
    });
  });

  return (
    <List
      sx={{
        "& .RaList-content": {
          boxShadow: "none",
        },
      }}
     
    >
      <Datagrid
        sx={{
          backgroundColor: "#FFFF",
          "& .RaDatagrid-headerCell": {
            fontWeight: "bold",
            backgroundColor: "#E5E4E4",
            border: "1px solid #D7D6D6",
            fontSize: "14px",
          },
          "& .RaDatagrid-rowCell	": {
            border: "1px solid #D7D6D6",
          },
        }}
        bulkActionButtons={false}
      >
        {CustomChildren}
      </Datagrid>
    </List>
  );
};
